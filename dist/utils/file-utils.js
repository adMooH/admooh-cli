"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const chalk_1 = __importDefault(require("chalk"));
const is_valid_path_1 = __importDefault(require("is-valid-path"));
class FileUtils {
    createDirectory(dirPath) {
        if (!is_valid_path_1.default(dirPath)) {
            console.warn(chalk_1.default.red("Directory name is invalid!"));
            return;
        }
        try {
            if (!this.directoryExists(dirPath)) {
                fs_1.default.mkdirSync(dirPath);
            }
            else {
                console.warn(chalk_1.default.yellow("Directory already exists!"));
            }
        }
        catch (err) {
            console.warn(chalk_1.default.red(JSON.stringify(err)));
        }
    }
    directoryExists(dirPath) {
        try {
            return fs_1.default.statSync(dirPath).isDirectory();
        }
        catch (err) {
            return false;
        }
    }
    fileExists(filePath) {
        try {
            return fs_1.default.existsSync(filePath);
        }
        catch (err) {
            return false;
        }
    }
}
exports.default = FileUtils;
//# sourceMappingURL=file-utils.js.map