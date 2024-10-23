const { Schema, model } = require("mongoose");

const Post = new Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  subject: { type: String, required: true },
  category: { type: String, required: true },
});

module.exports = model("Post", Post);
