#!/usr/bin/env node
const utilidades = require('../lib/utilities.js');
const ytdow = require('../lib/youtubedownload.js');

//console.log(utilidades);
utilidades.commander('ls',['./']);
console.log(utilidades.getArgs());
console.log('HOLA MUNDO DESDE NPM');

//utilidades.login();
ytdow.youtubeDownload();
//utilidades.menuShow();
//var argv = utilidades.getArgs();
//if (argv)console.log('Hello Sr.',argv[0]+(argv[1]?' '+argv[1]:''));
// var valor = './prueba.js'.red.nocolor;
// console.log(valor);
// var text = fs.readFileSync(('./prueba.js').toString(),'utf8')
//console.log(text);
//prompt.message = 'ToroSoft';

//searchFilesInFolderJSON(['./node_modules/firebase/'],'js');
