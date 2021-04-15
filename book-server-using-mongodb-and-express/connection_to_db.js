"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = void 0;
// const mongoose = require("mongoose");
var env = require("dotenv");
var mongoose_1 = __importDefault(require("mongoose"));
env.config();
function connectToDB() {
    return new Promise(function (resolve, reject) {
        mongoose_1.default.connect("mongodb+srv://" + process.env.MONGODB_USER + ":" + process.env.MONGODB_PASSWORD + "@" + process.env.MONGO_CLUSTER + "/bookmanagement?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
        }, function (err) {
            if (err) {
                reject(err);
            }
            else {
                resolve("Successful");
            }
        });
    });
}
exports.connectToDB = connectToDB;
