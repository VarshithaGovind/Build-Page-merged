const mongoose = require('mongoose');

const midProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  languages: [String],
  guideSteps: [String],
  clubOnly: Boolean,
});

module.exports = mongoose.model('MidProject', midProjectSchema);
