let RaspiCam = require('raspicam');
let currTime = new Date().getTime(); //to store file with timestamp

let logPath = '../logs/' + currTime + '.png' ; //photo path

let opts =  {
	mode: 'photo',    // photo mode
	encoding: 'png',  // png format
	width: 250,	//width 
	height: 250,	//height
	output: logPath, //storage path
	timeout: 0 	//no delays
};

let camera = new RaspiCam(opts); //call constructor

camera.on('start', (err,timestamp)=> console.log(`Starting camera`));

camera.on('read', (err,timestamp, filename)=> { 	
	console.log(`Stopping the camera`);
	camera.stop();
});
camera.on('exit', (timestamp)=> console.log('Done, Suspending the camera'));

//camera.start(); // to start camera

module.exports = camera //export camera
