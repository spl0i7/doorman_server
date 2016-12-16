let Visitor = require('../models/visitor');

let visitor = new Visitor({
	thumbnail: "/logs/test.jpg",
	date: new Date(),
	access: true
});

visitor.save((err)=> {
	if(err) console.log(err);

	console.log(`Entry sucess`);
});


