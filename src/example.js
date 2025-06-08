// file: src/example.js
import dotenv from 'dotenv'
dotenv.config()

import { initDatabase } from './db/init.js'
import { Post } from './db/models/post.js'

await initDatabase()

const post = new Post({
  title: 'My First Post',
  author: 'John Doe',
  contents: 'This is the content of my first post.',
  tags: ['introduction', 'first post'],
})

const createdPost = await post.save()
await Post.findByIdAndUpdate(createdPost._id, {
  $set: { title: 'Updated Post Title' },
})

const posts = await Post.find()
console.log('Posts:', posts)
