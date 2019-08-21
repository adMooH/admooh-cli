"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clear_1 = __importDefault(require("clear"));
const chalk_1 = __importDefault(require("chalk"));
const figlet_1 = __importDefault(require("figlet"));
const minimist_1 = __importDefault(require("minimist"));
//Commands
const help_command_1 = __importDefault(require("./commands/help-command"));
const create_app_1 = __importDefault(require("./commands/create-app"));
const cliName = "adMooH CLI";
class AdmoohCLI {
    constructor() {
        this._helpCommand = new help_command_1.default();
        this._createAppCommand = new create_app_1.default();
    }
    start() {
        clear_1.default();
        console.log("    ```                                                  	 \n" +
            "   ``:::.`````        ``````````````              ```       \n" +
            "    `sNNms.````    ``-+osyyyyyysso+/:.```     ```````-::-`  \n" +
            "    `.dNNNm+```````+mMMMMMMMMMMMMmo:.``````  `````./hNNNo`  \n" +
            "     `.smNds-`````sMMMMMMMMMMMMMMd:``````````````:hNNNm:`   \n" +
            "       ``-/ooo:``/MMMMMMMMMMMMMMMMMmy+-```````..-ymNdo.`    \n" +
            "               ``dMMMMMMMMMMMMMMMMMMMMN:``````.://:.``      \n" +
            "               `-MMMMN-:NMMMMMMMMMMdymMMdys+``              \n" +
            "              ``sMMMMs`:MMMMMMMMMMMo`/MMMMMN.`              \n" +
            "              ``mMMMM-`yMMMMMMMMMMMd`.mMMMMM:`              \n" +
            "              `.MMMMMNNMMMMMMMMMMMMMy+mMMMMM+`              \n" +
            "              `-MMMNMMMMMMMMMMMMMMMMMMMMMMMMo`              \n" +
            "              `-/-....:+sydmNMMMMMMMMMmhydNM+`              \n" +
            "             `.+dNNNNNdyo+:-...--::--..--..:-`              \n" +
            "             `/NN/.-smNNNNNNNNNmmddddmNNdhds-`              \n" +
            "             `:NNoomNNNNNNNNNNNNNNNNNNms-`.md``             \n" +
            "             ``+NNNNNNNNNNNNNNNNNNNNNNNNNhyNm``             \n" +
            "              ``-yNNNNNNNNNNNNNNNNNNNNNNNNNNs``             \n" +
            "                ``.+ydNNNNNNNNNNNNNNNNNNNNd+.`              \n" +
            "                   ````-:/+ooosssssssso+/-```               \n" +
            "                           ``````````````                   \n");
        console.log(chalk_1.default.blue(figlet_1.default.textSync(cliName, {
            horizontalLayout: 'full'
        })));
        const argv = minimist_1.default(process.argv.slice(2));
        if (argv.help) {
            this.helpCommad();
            return;
        }
        const command = argv._[0];
        if (command === undefined)
            return;
        switch (command.toLowerCase()) {
            case 'create-app': {
                const appName = argv.n || argv.name || undefined;
                const appPath = argv.p || argv.path || undefined;
                this.createAppCommand(appName, appPath);
                break;
            }
            default: {
                console.log(chalk_1.default.red(`command '${command}' no ecxiste.`));
                return;
            }
        }
    }
    helpCommad() {
        this._helpCommand.showHelpScreen();
    }
    createAppCommand(appName, appPath) {
        this._createAppCommand.createApp(appName, appPath);
    }
}
exports.default = AdmoohCLI;
//# sourceMappingURL=admooh-cli.js.map