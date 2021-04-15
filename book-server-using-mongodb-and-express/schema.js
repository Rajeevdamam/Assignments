"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.books = void 0;
var mongoose = __importStar(require("mongoose"));
var bookSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    isbn: {
        type: String,
    },
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    pages: {
        type: String,
    },
    price: {
        type: String,
    },
    rating: {
        type: String,
    },
    votes: {
        type: String,
    },
    description: {
        type: String,
    },
    tags: {
        type: Array,
    },
    series: {
        type: String,
    },
    seriesIndex: {
        type: String,
    },
    releaseDate: {
        type: String,
    },
    cover: {
        type: String,
    },
});
var books = mongoose.model("books", bookSchema);
exports.books = books;
