import {models}  from '../config/constants'
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

// var schema = new Schema({
//   name: { type: String, required: true },
//   user: {type: ObjectId, ref: models.user.name, required: true },
//   description: { type: String },
//   created: { type: Number, default: Date.now() },
//   keeps: [{type: ObjectId, ref: models.keep.name}]
// });




let schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String },
  // Relations
  userId: { type: ObjectId, ref: models.user.name, required: true },
  keeps: [{ type: ObjectId, ref: models.keep.name }]
})

module.exports = mongoose.model(models.vault.name, schema);