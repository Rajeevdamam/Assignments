import mongoose from "mongoose";

const PostsSchema = new mongoose.Schema(
	{
		caption: {
			type: String,
		},
		media: {
			type: String,
		},
		textualPost: {
			type: String,
		},
		userID: {
			type: String,
		},
		comments: {
			type: Array,
		},
		likes: {
			type: Number,
		},
		date: {
			type: Date,
			default: Date.now(),
		},
		category: {
			type: Array,
		},
	},
	{ collection: "posts" }
);

const userModel = mongoose.model("posts", PostsSchema);

export default userModel;
