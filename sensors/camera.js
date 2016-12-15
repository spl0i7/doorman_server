let RaspiCam = require('raspicam');

class Camera  {
	constructor(width, height, path) { 
		let opts =  {
			mode: 'photo',    // photo mode
			encoding: 'png',  // png format
			width: width,	//width 
			height: height,	//height
			output: path,
			timeout: 0 	//no delays
		};
		this.path = path;

		this.camera = new RaspiCam(opts); //call constructor

		this.camera.on('start', (err,timestamp)=> console.log(`Starting camera`));

		this.camera.on('read', (err,timestamp, filename)=> { 	
			console.log(`Stopping the camera`);
			this.camera.stop();
		});
		this.camera.on('exit', (timestamp)=> console.log('Done, Suspending the camera'));
	}

	clickPhoto() { 
		let currTime = new Date().getTime();
		this.camera.set('output', this.path + '/' + currTime + '.png');
		this.camera.start();
	}

	
}
module.exports = Camera //export camera
