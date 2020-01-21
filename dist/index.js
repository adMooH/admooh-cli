#!/usr/bin/env node
!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t){e.exports=require("chalk")},function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),(new(n(o(2)).default)).start()},function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(o(3)),M=n(o(0)),i=n(o(4)),a=n(o(5)),s=n(o(6)),l=n(o(7)),u=n(o(16));t.default=class{constructor(){this._helpCommand=new s.default,this._versionCommand=new u.default,this._createAppCommand=new l.default}start(){r.default(),console.log("    ```                                                  \t \n   ``:::.`````        ``````````````              ```       \n    `sNNms.````    ``-+osyyyyyysso+/:.```     ```````-::-`  \n    `.dNNNm+```````+mMMMMMMMMMMMMmo:.``````  `````./hNNNo`  \n     `.smNds-`````sMMMMMMMMMMMMMMd:``````````````:hNNNm:`   \n       ``-/ooo:``/MMMMMMMMMMMMMMMMMmy+-```````..-ymNdo.`    \n               ``dMMMMMMMMMMMMMMMMMMMMN:``````.://:.``      \n               `-MMMMN-:NMMMMMMMMMMdymMMdys+``              \n              ``sMMMMs`:MMMMMMMMMMMo`/MMMMMN.`              \n              ``mMMMM-`yMMMMMMMMMMMd`.mMMMMM:`              \n              `.MMMMMNNMMMMMMMMMMMMMy+mMMMMM+`              \n              `-MMMNMMMMMMMMMMMMMMMMMMMMMMMMo`              \n              `-/-....:+sydmNMMMMMMMMMmhydNM+`              \n             `.+dNNNNNdyo+:-...--::--..--..:-`              \n             `/NN/.-smNNNNNNNNNmmddddmNNdhds-`              \n             `:NNoomNNNNNNNNNNNNNNNNNNms-`.md``             \n             ``+NNNNNNNNNNNNNNNNNNNNNNNNNhyNm``             \n              ``-yNNNNNNNNNNNNNNNNNNNNNNNNNNs``             \n                ``.+ydNNNNNNNNNNNNNNNNNNNNd+.`              \n                   ````-:/+ooosssssssso+/-```               \n                           ``````````````                   \n"),console.log(M.default.blue(i.default.textSync("adMooH CLI",{horizontalLayout:"full"})));const e=a.default(process.argv.slice(2));if(e.help)return void this.helpCommad();if(e.version)return void this.versionCommad();const t=e._[0];if(void 0!==t)switch(t.toLowerCase()){case"create-app":{const t=e.n||e.name||void 0,o=e.p||e.path||void 0;this.createAppCommand(t,o);break}default:return void console.log(M.default.red(`command '${t}' no ecxiste.`))}}helpCommad(){this._helpCommand.showHelpScreen()}versionCommad(){this._versionCommand.showVersionScreen()}createAppCommand(e,t){this._createAppCommand.createApp(e,t)}}},function(e,t){e.exports=require("clear")},function(e,t){e.exports=require("figlet")},function(e,t){e.exports=require("minimist")},function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(o(0));t.default=class{showHelpScreen(){console.log(r.default.blue(""))}}},function(e,t,o){"use strict";var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(r,M){function i(e){try{s(n.next(e))}catch(e){M(e)}}function a(e){try{s(n.throw(e))}catch(e){M(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}s((n=n.apply(e,t||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const M=r(o(8)),i=r(o(9)),a=r(o(10)),s=r(o(11)),l=r(o(12)),u=r(o(0)),d=r(o(13)),c=r(o(14)),N=r(o(15));t.default=class{constructor(){this._repouRL="https://github.com/adMooH/admooh-app-model/archive/master.zip",this._modelFolderName="admooh-app-model-master"}createApp(e,t){return n(this,void 0,void 0,(function*(){let t=e;if(void 0===t||""===t){const e=[{name:"appName",type:"input",message:"What's your app name ?:",validate:e=>e.length?!!this.checkAppName(e)||"Please enter a valid app name.":"Please enter your app name."}],{appName:o}=yield M.default.prompt(e);t=o}else if(!this.checkAppName(t))return;const o=s.default.resolve(t);a.default.ensureDirSync(t),console.log("Create App in:",u.default.bold(o)),console.log(),console.log(u.default.blue("downloading model files..."));const n=s.default.join(o,"model.zip"),r=yield i.default(this._repouRL);yield new Promise((e,t)=>{const o=a.default.createWriteStream(n);r.body.pipe(o),r.body.on("error",e=>{t(e)}),o.on("finish",()=>{e()})}),console.log(u.default.blue("unzip model files...")),yield new Promise((e,t)=>{const r=a.default.createReadStream(n),M=l.default.Extract({path:o});r.pipe(M),M.on("close",()=>{e()})}),console.log(u.default.blue("removing zip file...")),yield new Promise((e,t)=>{a.default.unlink(n,t=>{t&&console.error(t),e()})}),console.log(u.default.blue("copying model files..."));const d=s.default.normalize(s.default.join(o,this._modelFolderName,"//"));yield a.default.copy(d,o),yield new Promise((e,t)=>{c.default(d,()=>{e()})});const f=N.default(s.default.join(o,"package.json"));f.set("name",t),f.set("version","0.0.1"),f.save(),console.log(u.default.blue("goto https://github.com/adMooH/admooh-app-model for more information"))}))}checkAppName(e){return!!d.default(e).validForNewPackages||(console.error(`Could not create a app called ${u.default.red(`"${e}"`)} because of npm naming restrictions:`),!1)}}},function(e,t){e.exports=require("inquirer")},function(e,t){e.exports=require("node-fetch")},function(e,t){e.exports=require("fs-extra")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("unzip")},function(e,t){e.exports=require("validate-npm-package-name")},function(e,t){e.exports=require("rimraf")},function(e,t){e.exports=require("edit-json-file")},function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(o(0));t.default=class{showVersionScreen(){console.log(r.default.blue("1.0.1"))}}}]);