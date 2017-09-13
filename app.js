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
	var note=notes.addNote(argv.title,argv.body);
	if(note){
		console.log('Note created');
		console.log('--');
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);
		
	}
	else{
		console.log('Please enter a unique title for the note');
	}	
}
else if(command=== 'list'){
		notes.getAll();
	}
else if(command === 'read'){
		notes.getNote(argv.title);
	}
else if(command ==='remove'){
		var noteRemoved=notes.removeNote(argv.title);
		var message=noteRemoved ? 'Note was removed':'Note was not removed';
		console.log(message);
}else{
		console.log('Command not recognized');
	}
