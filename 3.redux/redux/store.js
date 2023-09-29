const { createStore, applyMiddleware, compose } = require('redux')
const { combineReducers } = require('redux')
const { composeWithDevTools } = require('redux-devtools-extension')
const userReducer = require('./reducers/user')
const postReducer = require('./reducers/post')

const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
}

const firstMiddleware = store => next => action => {
  console.log('action 로깅', action)
  next(action) // = dispatch
}

const thunkMiddleware = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState)
  }
  next(action)
}

const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(firstMiddleware, thunkMiddleware))
    : composeWithDevTools(applyMiddleware(firstMiddleware, thunkMiddleware))
const reducer = combineReducers({ user: userReducer, posts: postReducer })
const store = createStore(reducer, initialState, enhancer)

module.exports = store
