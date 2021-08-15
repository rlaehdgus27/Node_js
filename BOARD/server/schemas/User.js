import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      require: true,
    },

    hit: {
      type: Number,
      require: true,
      default: 0,
    },

    author: {
      type: String,
      require: true,
    },

    isDelete: {
      type: Boolean,
      require: true,
      default: false,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },

    updatedAt: {
      type: Date,
      default: Date.now,
    },

    deletedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("User", User, "User");
