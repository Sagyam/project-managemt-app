const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Project name is required"],
		minlength: 3,
		maxlength: 255,
	},
	description: {
		type: String,
		required: [true, "Description is required"],
		minlength: 3,
		maxlength: 255,
	},
	status: {
		type: String,
		required: [true, "Status is required"],
		minlength: 3,
		maxlength: 255,
		enum: ["Not Started", "In Progress", "Completed"],
	},
	clientId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Client",
		required: [true, "Client is required"],
	},
});

module.exports = mongoose.model("Project", ProjectSchema);
