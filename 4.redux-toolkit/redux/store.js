import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/index'

const firstMiddleware = store => next => action => {
  console.log('액션 로깅', action)
  next(action)
}

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(firstMiddleware),
})

export default store
