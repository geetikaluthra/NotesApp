console.log('Starting notes');
const fs=require('fs');

var addNote =(title,body)=>{
	//console.log('Adding Note',title,body);
	var notes=[];
	var note={
		title,
		body
	};
	
	try{
		//try and catch so that first time when notes-data.json file doestn't exits the program doesn't crashes
		var notesString=fs.readFileSync('notes-data.json');
		//reading previous notes and putting into notes
		notes=JSON.parse(notesString);
	}catch(e){
		
	}
	
	var duplicateNotes=notes.filter((note)=>note.title===title);
	if(duplicateNotes.length===0){
		notes.push(note);
		fs.writeFileSync('notes-data.json',JSON.stringify(notes));
		console.log('Adding Note',title,body);
	}
	else{
		console.log('Please enter a unique title for the note');
	}
		
};

var getAll=()=>{
	console.log('Getting All notes');
};

var getNote = (title)=>{
	console.log('Reading note :',title);
};

var removeNote=(title)=>{
	console.log('Removing Note:',title);
};

module.exports={
	addNote,
	getAll,
	getNote,
	removeNote
};