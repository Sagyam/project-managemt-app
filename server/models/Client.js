const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Client name is required"],
		minlength: 3,
		maxlength: 255,
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		minlength: 3,
		maxlength: 255,
	},
	phone: {
		type: String,
		required: [true, "Phone is required"],
		minlength: 3,
		maxlength: 255,
	},
});

module.exports = mongoose.model("Client", ClientSchema);
