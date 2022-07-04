const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  itemStatus: {
    type: String,
  },
  userStatus: {
    type: String,
  },
  totalChap: {
    type: Number,
    required: true,
  },
  stopChap: {
    type: Number,
    required: true,
  },
  tags: {
    type: [String],
    // type: String,
  },
//   userId: {
//     type: Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
});

module.exports = mongoose.model("Item", itemSchema);