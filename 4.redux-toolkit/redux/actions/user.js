import { createAsyncThunk } from '@reduxjs/toolkit'

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value)
    }, time)
  })

export const logIn = createAsyncThunk('user/logIn', async (data, thunkAPI) => {
  // action.payload
  return await delay(500, data)
})
