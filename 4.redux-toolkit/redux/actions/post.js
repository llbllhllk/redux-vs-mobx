import { createAsyncThunk } from '@reduxjs/toolkit'

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value)
    }, time)
  })

export const addPost = createAsyncThunk('post/add', async () => {
  const res = delay(200, {
    title: '새 게시글',
    content: 'Hello World',
  })
  
  return res
})
