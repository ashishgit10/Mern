import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    blog: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Blog",
    },
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
    },
  },
  { timestamps: true }
);
export const Comment = mongoose.model("Comment", commentSchema);
