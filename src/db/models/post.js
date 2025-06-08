import mongoose, { Schema } from 'mongoose'

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: String,
    contents: String,
    tags: [String],
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  },
)

export const Post = mongoose.model('Post', postSchema)
