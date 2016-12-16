let express = require('express');
let bodyparser = require('body-parser');
let path = require('path');
let Camera = require('./sensors/camera');

let app = express();

const SUCCESS =  {
	message:'success'
};
app.get('/camera', (req,res) => {
	let mycam = new Camera('720','480', './logs/');

	mycam.grabPhoto((timestamp)=> {

		res.sendFile(path.resolve('./logs/' + timestamp + '.jpg' ),(err)=> {
		});

		console.log('saved!');
		return;
	});
});

app.listen(8080, (err)=> {
	if(err) throw err;
	console.log('started server');
});

