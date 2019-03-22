import clear from "clear";
import chalk from "chalk";
import figlet from "figlet";
import minimist from "minimist";

//Commands
import HelpCommand from "./commands/help-command";
import CreateTemplateCommand from "./commands/create-template";



const cliName = "adMooH CLI";
export default class AdmoohCLI {
	_helpCommand: HelpCommand = new HelpCommand();
	_createTemplateCommand: CreateTemplateCommand = new CreateTemplateCommand();

	start() {
		clear();
		console.log(
			"    ```                                                  	 \n" +
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
			"                           ``````````````                   \n"
		);
		console.log(
			chalk.blue(figlet.textSync(cliName,
				{
					horizontalLayout: 'full'
				}
			))
		);

		const argv = minimist(process.argv.slice(2));
		if (argv.help) {
			this.helpCommad();
			return;
		}
		const command = argv._[0] as string;
		if (command === undefined) return;
		switch (command.toLowerCase()) {
			case 'create-template': {
				const templateName = argv.n as string || argv.name as string || undefined;
				const templatePath = argv.p as string || argv.path as string || undefined;

				this.createTemplateCommand(templateName, templatePath);
				break;
			}
			default: {
				console.log(chalk.red(`command '${command}' no ecxiste.`));
				return;
			}
		}
	}

	helpCommad() {
		this._helpCommand.showHelpScreen();
	}
	createTemplateCommand(templateName?: string, templatePath?: string) {
		this._createTemplateCommand.createTemplate(templateName, templatePath);
	}
}