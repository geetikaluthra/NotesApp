console.log('Starting App');

const fs=require('fs');
const os=require('os');
const notes=require('./notes.js');
const _=require('lodash');
const yargs=require('yargs');

var argv=yargs.argv;
console.log('yargs Command:',argv);

var command=argv._[0];
console.log('Command:',command);

if(command=== 'add'){
	notes.addNote(argv.title,argv.body);
}
else if(command=== 'list'){
		notes.getAll();
	}
else if(command === 'read'){
		notes.getNote(argv.title);
	}
else if(command ==='remove'){
		notes.removeNote(argv.title);
}else{
		console.log('Command not recognized');
	}
