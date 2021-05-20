"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var PostsSchema = new mongoose_1.default.Schema({
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
}, { collection: "posts" });
var userModel = mongoose_1.default.model("posts", PostsSchema);
exports.default = userModel;
