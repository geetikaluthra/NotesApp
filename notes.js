//console.log('Starting notes');
const fs=require('fs');

var fetchNotes=()=>{
	try{
		//try and catch so that first time when notes-data.json file doestn't exits the program doesn't crashes
		var notesString=fs.readFileSync('notes-data.json');
		//reading previous notes and putting into notes
		return JSON.parse(notesString);
	}catch(e){
		return [];
	}
};

var saveNotes=(notes)=>{
	fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote =(title,body)=>{
	//console.log('Adding Note',title,body);
	var notes=fetchNotes();
	var note={
		title,
		body
	};
	
	
	var duplicateNotes=notes.filter((note)=>note.title===title);
	if(duplicateNotes.length===0){
		notes.push(note);
		saveNotes(notes);
		console.log('Adding Note',title,body);
		return note;
	}
	
};

var getAll=()=>{
	return fetchNotes();
};

var getNote = (title)=>{
	var notes=fetchNotes();
	var fnotes=notes.filter((note)=>note.title===title);
	console.log('Reading note :',title);
	return fnotes[0];
	
};

var removeNote=(title)=>{
	var notes=fetchNotes(); //fetch notes
	var fnotes=notes.filter((note)=>note.title!==title);		//filter notes
	saveNotes(fnotes);  //save notes
	
	return notes.length!==fnotes.length;
};

var logNote=(note)=>{
	//debugger;
	console.log('--');
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
};

module.exports={
	addNote,
	getAll,
	getNote,
	removeNote,
	logNote
};