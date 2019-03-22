import inquirer from 'inquirer';
import FileUtils from '../utils/file-utils';
import isValid from 'is-valid-path';


export default class CreateTemplateCommand {

	_fileUtils: FileUtils = new FileUtils();

	async createTemplate(templateName?: string, templatePath?: string) {
		let _templateName = templateName;

		if (_templateName === undefined || _templateName === "") {
			const questions = [
				{
					name: 'templateName',
					type: 'input',
					message: 'What\'s your template name ?:',
					validate: (value: string) => {
						if (value.length) {
							if (isValid(value)) {
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
		}
		const _templatePath = templatePath !== undefined ? templateName : `.\/${_templateName}`;
		this._fileUtils.createDirectory(_templatePath);
		console.log(_templateName, _templatePath);
	}
}