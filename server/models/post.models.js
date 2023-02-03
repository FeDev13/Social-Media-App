const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
    comments: {
      type: Array,
      userId: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

var Post = mongoose.model("Post", postSchema);

module.exports = {
  Post,
};
