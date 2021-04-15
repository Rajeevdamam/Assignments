// const mongoose = require("mongoose");
const env = require("dotenv");
import mongoose from "mongoose";
env.config();

function connectToDB() {
	return new Promise((resolve, reject) => {
		mongoose.connect(
			`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGO_CLUSTER}/bookmanagement?retryWrites=true&w=majority`,
			{
				useNewUrlParser: true,
				useCreateIndex: true,
				useFindAndModify: false,
			},
			(err) => {
				if (err) {
					reject(err);
				} else {
					resolve("Successful");
				}
			}
		);
	});
}

export { connectToDB };
