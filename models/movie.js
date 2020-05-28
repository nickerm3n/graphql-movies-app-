const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  directorId: { type: String, required: true },
  rate: { type: Number, required: true },
  watched: { type: Boolean, required: true },
});

module.exports = model("Movie", schema);
