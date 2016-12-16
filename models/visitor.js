let mongoose = require('mongoose');
let Schema = mongoose.Schema;

mongoose.connect('mongodb://0.0.0.0:27017/visitor');

let VisitorSchema = new Schema({
	thumbnail : String,
	date : Date,
	access : Boolean
});

module.exports = mongoose.model('Visitor', VisitorSchema);


