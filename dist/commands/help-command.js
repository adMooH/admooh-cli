"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class HelpCommand {
    showHelpScreen() {
        console.log(chalk_1.default.blue(""));
    }
}
exports.default = HelpCommand;
//# sourceMappingURL=help-command.js.map