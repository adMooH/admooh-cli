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

export default class CreateTemplateCommand {

	private _fileUtils: FileUtils = new FileUtils();
	private _repouRL: string = 'https://github.com/adMooH/signage-template-model/archive/master.zip';
	private _modelFolderName: string = "signage-template-model-master";

	async createTemplate(name?: string, templatePath?: string) {
		let _templateName = name;

		if (_templateName === undefined || _templateName === "") {
			const questions = [
				{
					name: 'templateName',
					type: 'input',
					message: 'What\'s your template name ?:',
					validate: (value: string) => {
						if (value.length) {
							if (this.checkTemplateName(_templateName)) {
								return true;
							} else {
								return 'Please enter a valid template name.';
							}

						} else {
							return 'Please enter your template name.';
						}
					}
				}
			];
			const { templateName } = await inquirer.prompt(questions);
			_templateName = templateName;
		} else if(!this.checkTemplateName(_templateName)) {
			return ;
		}

		const root = path.resolve(_templateName);
		fs.ensureDirSync(_templateName);

		console.log('Create template in:', chalk.bold(root));
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
		file.set('name', _templateName);
		file.set('version', '0.0.1');	
		file.save();
	}

	checkTemplateName(template: string) {
		const validationResult = validateProjectName(template);
		if (!validationResult.validForNewPackages) {
		  console.error(
			`Could not create a template called ${chalk.red(
			  `"${template}"`
			)} because of npm naming restrictions:`
		  );
		  return false;
		}
		return true;
	}
}