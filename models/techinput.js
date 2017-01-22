var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var techInputSchema = new Schema({
	study_material: {
		type: String,
		trim: true
	},
	course_code: {
		type: String,
		trim: true
	},
	contact_info: {
		type: String,
		trim: true
	}
});

 techInputSchema.methods.saveInput = function() {
    this.save(function(err) {
        if (err) throw err;
        console.log('User saved successfully!');
    });
};

var TechInput = mongoose.model('TechInput', techInputSchema);
module.exports = TechInput;

