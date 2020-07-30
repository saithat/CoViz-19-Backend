const mongoose = require('mongoose');

// Specifying the format of the JSON data
const dataSchema = mongoose.Schema(
  {
    updated: Date,
    name: String,
    country: String,
    cases: Number,
    recovered: Number,
    deaths: Number,
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

module.exports = mongoose.model('covid-user-data', dataSchema);
