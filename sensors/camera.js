let RaspiCam = require('raspicam');

class Camera {
    constructor(width, height, path) {
        this.path = path;
        this.camera = new RaspiCam({
        mode: 'photo',
        output: path,
        encoding: "jpg",
        timeout: 0,
	width : width,
	height : height
    });

        this.camera.on("start", function( err, timestamp ){
            console.log("photo started at " + timestamp );
        });

        this.camera.on("read", function( err, timestamp, filename ){
            if(!filename.match(/~$/g)) {
                this.stop();
            }
            console.log("photo image captured with filename: " + filename );
        });

        
    }
    stop() {
	this.camera.stop();

	}

    grabPhoto (callback) {
        let currTime = new Date().getTime();

        this.camera.on("exit", function( timestamp ){
            console.log("camera has exited at " + timestamp );
            return callback(filename)
        });

	let filename = currTime;
        this.camera.set('output', this.path + '/' + filename + '.jpg' );
        this.camera.start();
    }

}

module.exports = Camera;
