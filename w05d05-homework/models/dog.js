const mongoose = require('mongoose');

const dogSchema = mongoose.Schema({
	name: String,
	breed: String,
	color: String,
	toy: String,
});


module.exports = mongoose.model('Dogs', dogSchema);



