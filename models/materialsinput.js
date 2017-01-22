var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var materialsInputSchema = new Schema({
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
	},
});

materialsInputSchema.methods.saveInput = function() {
    this.save(function(err) {
        if (err) throw err;
        console.log('User saved successfully!');
    });
};

var MaterialsInput = mongoose.model('MaterialsInput', materialsInputSchema);

module.exports= MaterialsInput;