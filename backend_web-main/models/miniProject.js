const mongoose = require('mongoose');

const miniProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  languages: [String],
  guideSteps: [String],
  clubOnly: Boolean,
});
module.exports = mongoose.model('MiniProject', miniProjectSchema);
