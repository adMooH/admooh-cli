import chalk from "chalk";
// var packageJson = require("./package.json");
//TODO: recuperar versao do package json

export default class VersionCommand {
	showVersionScreen() {
		console.log(
			chalk.blue("1.0.2")
		);
	}
}