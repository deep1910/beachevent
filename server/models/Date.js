const mongoose = require("mongoose");

const { Schema } = mongoose;

const dateSchema = new Schema({
  day: {
    type: String,
    required: true,
    trim: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const Date = mongoose.model("Date", dateSchema);

module.exports = Date;
