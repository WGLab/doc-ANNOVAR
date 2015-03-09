var toMarkdown = require('to-markdown').toMarkdown;
var fs = require('fs');
if(process.argv.length!=3) 
{
	console.error("Error: you have to enter one file name!")
	process.exit(1);
}
var file = process.argv[2];


fs.readFile(file, function(err, data){
	data = data.toString();
	console.log(toMarkdown(data));
});