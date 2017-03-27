import { models } from '../config/constants'
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
    title: {type: String },
    imgUrl: {type: String },
    body: {type: String},
    keepCount: {type: Number, default: 0},
    shareCount: {type: Number, default: 0},
    viewCount: {type: Number, default: 0},
    author: {type: String}
  });


module.exports = mongoose.model(models.keep.name, schema);



