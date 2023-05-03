const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  priority: {
    required: true,
    type: Number,
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Data", notesSchema);
