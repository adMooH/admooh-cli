#!/usr/bin/env node
!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t){e.exports=require("chalk")},function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),(new(n(o(2)).default)).start()},function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(o(3)),i=n(o(0)),a=n(o(4)),s=n(o(5)),l=n(o(6)),M=n(o(7)),u="adMooH CLI";t.default=class{constructor(){this._helpCommand=new l.default,this._createAppCommand=new M.default}start(){r.default(),console.log("    ```                                                  \t \n   ``:::.`````        ``````````````              ```       \n    `sNNms.````    ``-+osyyyyyysso+/:.```     ```````-::-`  \n    `.dNNNm+```````+mMMMMMMMMMMMMmo:.``````  `````./hNNNo`  \n     `.smNds-`````sMMMMMMMMMMMMMMd:``````````````:hNNNm:`   \n       ``-/ooo:``/MMMMMMMMMMMMMMMMMmy+-```````..-ymNdo.`    \n               ``dMMMMMMMMMMMMMMMMMMMMN:``````.://:.``      \n               `-MMMMN-:NMMMMMMMMMMdymMMdys+``              \n              ``sMMMMs`:MMMMMMMMMMMo`/MMMMMN.`              \n              ``mMMMM-`yMMMMMMMMMMMd`.mMMMMM:`              \n              `.MMMMMNNMMMMMMMMMMMMMy+mMMMMM+`              \n              `-MMMNMMMMMMMMMMMMMMMMMMMMMMMMo`              \n              `-/-....:+sydmNMMMMMMMMMmhydNM+`              \n             `.+dNNNNNdyo+:-...--::--..--..:-`              \n             `/NN/.-smNNNNNNNNNmmddddmNNdhds-`              \n             `:NNoomNNNNNNNNNNNNNNNNNNms-`.md``             \n             ``+NNNNNNNNNNNNNNNNNNNNNNNNNhyNm``             \n              ``-yNNNNNNNNNNNNNNNNNNNNNNNNNNs``             \n                ``.+ydNNNNNNNNNNNNNNNNNNNNd+.`              \n                   ````-:/+ooosssssssso+/-```               \n                           ``````````````                   \n"),console.log(i.default.blue(a.default.textSync(u,{horizontalLayout:"full"})));const e=s.default(process.argv.slice(2));if(e.help)return void this.helpCommad();const t=e._[0];if(void 0!==t)switch(t.toLowerCase()){case"create-app":{const t=e.n||e.name||void 0,o=e.p||e.path||void 0;this.createAppCommand(t,o);break}default:return void console.log(i.default.red(`command '${t}' no ecxiste.`))}}helpCommad(){this._helpCommand.showHelpScreen()}createAppCommand(e,t){this._createAppCommand.createApp(e,t)}}},function(e,t){e.exports=require("clear")},function(e,t){e.exports=require("figlet")},function(e,t){e.exports=require("minimist")},function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(o(0));t.default=class{showHelpScreen(){console.log(r.default.blue(""))}}},function(e,t,o){"use strict";var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))(function(r,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){e.done?r(e.value):new o(function(t){t(e.value)}).then(a,s)}l((n=n.apply(e,t||[])).next())})},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(o(8)),a=r(o(9)),s=r(o(12)),l=r(o(13)),M=r(o(14)),u=r(o(15)),d=r(o(0)),c=r(o(16)),N=r(o(17)),f=r(o(18));t.default=class{constructor(){this._fileUtils=new a.default,this._repouRL="https://github.com/adMooH/admooh-app-model/archive/master.zip",this._modelFolderName="admooh-app-model-master"}createApp(e,t){return n(this,void 0,void 0,function*(){let t=e;if(void 0===t||""===t){const e=[{name:"appName",type:"input",message:"What's your app name ?:",validate:e=>e.length?!!this.checkAppName(t)||"Please enter a valid app name.":"Please enter your app name."}],{templateName:o}=yield i.default.prompt(e);t=o}else if(!this.checkAppName(t))return;const o=M.default.resolve(t);l.default.ensureDirSync(t),console.log("Create App in:",d.default.bold(o)),console.log(),console.log(d.default.blue("downloading model files..."));const n=M.default.join(o,"model.zip"),r=yield s.default(this._repouRL);yield new Promise((e,t)=>{const o=l.default.createWriteStream(n);r.body.pipe(o),r.body.on("error",e=>{t(e)}),o.on("finish",()=>{e()})}),console.log(d.default.blue("unzip model files...")),yield new Promise((e,t)=>{const r=l.default.createReadStream(n),i=u.default.Extract({path:o});r.pipe(i),i.on("close",()=>{e()})}),console.log(d.default.blue("removing zip file...")),yield new Promise((e,t)=>{l.default.unlink(n,t=>{t&&console.error(t),e()})}),console.log(d.default.blue("copying model files..."));const a=M.default.normalize(M.default.join(o,this._modelFolderName,"//"));yield l.default.copy(a,o),yield new Promise((e,t)=>{N.default(a,()=>{e()})});const c=f.default(M.default.join(o,"package.json"));c.set("name",t),c.set("version","0.0.1"),c.save()})}checkAppName(e){return!!c.default(e).validForNewPackages||(console.error(`Could not create a app called ${d.default.red(`"${e}"`)} because of npm naming restrictions:`),!1)}}},function(e,t){e.exports=require("inquirer")},function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(o(10)),i=n(o(0)),a=n(o(11));t.default=class{createDirectory(e){if(a.default(e))try{this.directoryExists(e)?console.warn(i.default.yellow("Directory already exists!")):r.default.mkdirSync(e)}catch(e){console.warn(i.default.red(JSON.stringify(e)))}else console.warn(i.default.red("Directory name is invalid!"))}directoryExists(e){try{return r.default.statSync(e).isDirectory()}catch(e){return!1}}fileExists(e){try{return r.default.existsSync(e)}catch(e){return!1}}}},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("is-valid-path")},function(e,t){e.exports=require("node-fetch")},function(e,t){e.exports=require("fs-extra")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("unzip")},function(e,t){e.exports=require("validate-npm-package-name")},function(e,t){e.exports=require("rimraf")},function(e,t){e.exports=require("edit-json-file")}]);