import { createSlice } from '@reduxjs/toolkit'
import { addPost } from '../actions/post'

const initialState = {
  data: [],
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    clearPost(state, action) {
      state.data = null
    },
  },
  extraReducers: builder =>
    builder
      .addCase(addPost.pending, (state, action) => {})
      .addCase(addPost.fulfilled, (state, action) => {
        state.data.push(action.payload)
      })
      .addCase(addPost.rejected, (state, action) => {}),
})

export default postSlice
