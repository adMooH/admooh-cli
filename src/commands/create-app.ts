import inquirer from 'inquirer';
import FileUtils from '../utils/file-utils';
import fetch from 'node-fetch';
import fs from 'fs-extra';
import path from 'path';
import unzip from 'unzip';
import chalk from "chalk";
import validateProjectName from "validate-npm-package-name";
import rimraf from 'rimraf';
import editJsonFile from "edit-json-file";

export default class CreateAppCommand {
	
	private _repouRL: string = 'https://github.com/adMooH/admooh-app-model/archive/master.zip';
	private _modelFolderName: string = "admooh-app-model-master";

	async createApp(name?: string, templatePath?: string) {
		let _appName = name;

		if (_appName === undefined || _appName === "") {
			const questions = [
				{
					name: 'appName',
					type: 'input',
					message: 'What\'s your app name ?:',
					validate: (value: string) => {
						if (value.length) {
							if (this.checkAppName(value)) {
								return true;
							} else {
								return 'Please enter a valid app name.';
							}

						} else {
							return 'Please enter your app name.';
						}
					}
				}
			];
			const { appName } = await inquirer.prompt(questions);
			_appName = appName;
		} else if(!this.checkAppName(_appName)) {
			return ;
		}

		const root = path.resolve(_appName);
		fs.ensureDirSync(_appName);

		console.log('Create App in:', chalk.bold(root));
		console.log();

		 console.log(chalk.blue("downloading model files..."));
		 const zipModelFile = path.join(root, 'model.zip');
		 
		 const response = await fetch(this._repouRL);
		 await new Promise((resolve, reject) => {
		 	const fileStream = fs.createWriteStream(zipModelFile);
		 	response.body.pipe(fileStream);
		 	response.body.on("error", (err) => {
		 		reject(err);
		 	  });
		 	  fileStream.on("finish", () => {
		 		resolve();
		 	  });
		 });

		 console.log(chalk.blue("unzip model files..."));

		 await new Promise((resolve, reject) => {
			const fileStream = fs.createReadStream(zipModelFile);
			const extract = unzip.Extract({ path: root });
			fileStream.pipe(extract);
			extract.on('close', () => {
				resolve();
			})
		});

		console.log(chalk.blue("removing zip file..."));

		await new Promise((resolve, reject) => {
			fs.unlink(zipModelFile, (err) =>{
				if(err) console.error(err);
				resolve();
			});
		});		

		console.log(chalk.blue("copying model files..."));
		const modelPath = path.normalize(path.join(root, this._modelFolderName, '\//'));
		await fs.copy(modelPath, root);
		
		await new Promise((resolve, reject) => {
			rimraf(modelPath, ()=> {
				resolve();
			});
		});

		const file = editJsonFile(path.join(root, 'package.json'));
		file.set('name', _appName);
		file.set('version', '0.0.1');	
		file.save();

		console.log(chalk.blue("goto https://github.com/adMooH/admooh-app-model for more information"));
	}

	checkAppName(appName: string) {
		const validationResult = validateProjectName(appName);
		if (!validationResult.validForNewPackages) {
		  console.error(
			`Could not create a app called ${chalk.red(
			  `"${appName}"`
			)} because of npm naming restrictions:`
		  );
		  return false;
		}
		return true;
	}
}