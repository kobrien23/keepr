import {models}  from '../config/constants'
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

// var schema = new mongoose.Schema({
//     title: {type: String },
//     imgUrl: {type: String },
//     body: {type: String},
//     keepCount: {type: Number, default: 0},
//     shareCount: {type: Number, default: 0},
//     viewCount: {type: Number, default: 0},
//     author: {type: String}, // user's name 
//     public: {type: Boolean, default: true},
//     user: {type: ObjectId, ref: models.user.name} 
//       });




let schema = new mongoose.Schema({
  title: { type: String, required: true },
  imageUrl: { type: String },
  // articleLink: { type: String },
  body: { type: String },
  public: { type: Boolean, default: true },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  timesVaulted: { type: Number, default: 0 },
  // Relations
  userId: { type: ObjectId, ref: models.user.name, required: true },
})

module.exports = mongoose.model(models.keep.name, schema);