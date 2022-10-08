import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title can't be empty"],
    },
    body: {
      type: String,
      unique: true,
      required: [true, "body can't be empty"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", PostSchema);
