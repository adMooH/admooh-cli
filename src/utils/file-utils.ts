import fs from 'fs';
import chalk from "chalk";
import isValid from 'is-valid-path';

export default class FileUtils {

	createDirectory(dirPath: string) {
		if (!isValid(dirPath)) {
			console.warn(chalk.red("Directory name is invalid!"));
			return;
		}
		try {
			if (!this.directoryExists(dirPath)) {
				fs.mkdirSync(dirPath);
			} else {
				console.warn(chalk.yellow("Directory already exists!"));
			}
		} catch (err) {
			console.warn(chalk.red(JSON.stringify(err)));
		}
	}

	directoryExists(dirPath: string) {
		try {
			return fs.statSync(dirPath).isDirectory();
		} catch (err) {
			return false;
		}
	}
	fileExists(filePath: string) {
		try {
			return fs.existsSync(filePath);
		} catch (err) {
			return false;
		}
	}

}