import { createSlice } from '@reduxjs/toolkit'
import { logIn } from '../actions/user'

const initialState = {
  isLoggingIn: false,
  data: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut(state, action) {
      state.data = null
    },
  },
  // immer가 적용되어 있기 때문에(state = draft) 불변성을 지키지 않아도 된다.
  extraReducers: builder =>
    builder
      .addCase(logIn.pending, (state, action) => {})
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoggingIn = false
        state.data = action.payload
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoggingIn = false
        state.data = null
      })
      .addMatcher(
        action => action.type.includes('/pending'),
        (state, action) => {
          state.isLoggingIn = true
        }
      ),
})

export default userSlice
