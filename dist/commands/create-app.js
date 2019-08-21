"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const file_utils_1 = __importDefault(require("../utils/file-utils"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const unzip_1 = __importDefault(require("unzip"));
const chalk_1 = __importDefault(require("chalk"));
const validate_npm_package_name_1 = __importDefault(require("validate-npm-package-name"));
const rimraf_1 = __importDefault(require("rimraf"));
const edit_json_file_1 = __importDefault(require("edit-json-file"));
class CreateAppCommand {
    constructor() {
        this._fileUtils = new file_utils_1.default();
        this._repouRL = 'https://github.com/adMooH/admooh-app-model/archive/master.zip';
        this._modelFolderName = "admooh-app-model-master";
    }
    createApp(name, templatePath) {
        return __awaiter(this, void 0, void 0, function* () {
            let _appName = name;
            if (_appName === undefined || _appName === "") {
                const questions = [
                    {
                        name: 'appName',
                        type: 'input',
                        message: 'What\'s your app name ?:',
                        validate: (value) => {
                            if (value.length) {
                                if (this.checkAppName(_appName)) {
                                    return true;
                                }
                                else {
                                    return 'Please enter a valid app name.';
                                }
                            }
                            else {
                                return 'Please enter your app name.';
                            }
                        }
                    }
                ];
                const { appName } = yield inquirer_1.default.prompt(questions);
                _appName = appName;
            }
            else if (!this.checkAppName(_appName)) {
                return;
            }
            const root = path_1.default.resolve(_appName);
            fs_extra_1.default.ensureDirSync(_appName);
            console.log('Create App in:', chalk_1.default.bold(root));
            console.log();
            console.log(chalk_1.default.blue("downloading model files..."));
            const zipModelFile = path_1.default.join(root, 'model.zip');
            const response = yield node_fetch_1.default(this._repouRL);
            yield new Promise((resolve, reject) => {
                const fileStream = fs_extra_1.default.createWriteStream(zipModelFile);
                response.body.pipe(fileStream);
                response.body.on("error", (err) => {
                    reject(err);
                });
                fileStream.on("finish", () => {
                    resolve();
                });
            });
            console.log(chalk_1.default.blue("unzip model files..."));
            yield new Promise((resolve, reject) => {
                const fileStream = fs_extra_1.default.createReadStream(zipModelFile);
                const extract = unzip_1.default.Extract({ path: root });
                fileStream.pipe(extract);
                extract.on('close', () => {
                    resolve();
                });
            });
            console.log(chalk_1.default.blue("removing zip file..."));
            yield new Promise((resolve, reject) => {
                fs_extra_1.default.unlink(zipModelFile, (err) => {
                    if (err)
                        console.error(err);
                    resolve();
                });
            });
            console.log(chalk_1.default.blue("copying model files..."));
            const modelPath = path_1.default.normalize(path_1.default.join(root, this._modelFolderName, '\//'));
            yield fs_extra_1.default.copy(modelPath, root);
            yield new Promise((resolve, reject) => {
                rimraf_1.default(modelPath, () => {
                    resolve();
                });
            });
            const file = edit_json_file_1.default(path_1.default.join(root, 'package.json'));
            file.set('name', _appName);
            file.set('version', '0.0.1');
            file.save();
        });
    }
    checkAppName(appName) {
        const validationResult = validate_npm_package_name_1.default(appName);
        if (!validationResult.validForNewPackages) {
            console.error(`Could not create a app called ${chalk_1.default.red(`"${appName}"`)} because of npm naming restrictions:`);
            return false;
        }
        return true;
    }
}
exports.default = CreateAppCommand;
//# sourceMappingURL=create-app.js.map