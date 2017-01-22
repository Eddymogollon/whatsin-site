var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var txtInputSchema = new Schema({
	product_id: {
		type: String,
		trim: true
	},
	course_code: {
		type: String,
		trim: true
	},
	bookname: {
		type: String,
		trim: true
	},
	isbn: {
		type: String,
		trim: true
	},
	condition: {
		type: String,
		trim: true
	},
	price: {
		type: String,
		trim: true
	},
	pic_url: {
		type: String,
		trim: true
	},
});

 txtInputSchema.methods.saveInput = function() {
    this.save(function(err) {
        if (err) throw err;
        console.log('User saved successfully!');
    });
};

var TxtInput = mongoose.model('TxtInput', txtInputSchema); 
module.exports = TxtInput;

//Create a regex to find the properties, ignore case
//txtinputs.find({"course_code": "E1234", "condition": "new"});