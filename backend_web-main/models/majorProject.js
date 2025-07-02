const mongoose = require('mongoose');

const majorProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  tech: String,
  duration: String,
  image: String,
  trainer: Boolean,
  languages: [String],
  guideSteps: [String],
});

module.exports = mongoose.model('MajorProject', majorProjectSchema);
