let express = require('express');
let bodyparser = require('body-parser');
let path = require('path');
let Camera = require('./sensors/camera');
let Visitor = require('./models/visitor');

let app = express();

const SUCCESS =  {
	message:'success'
};

app.get('/camera', (req,res) => {
	let mycam = new Camera('400','400', './logs/');

	mycam.grabPhoto((timestamp)=> {

		res.sendFile(path.resolve('./logs/' + timestamp + '.jpg' ),(err)=> {
		});

		console.log('saved!');
		return;
	});
});

app.get('/logs', (req,res)=> {

	Visitor.find((err,visitor)=> {
		if(err) console.log(err);
		res.json(visitor);
	});
	
});

app.listen(8080, (err)=> {
	if(err) throw err;
	console.log('started server');
});

