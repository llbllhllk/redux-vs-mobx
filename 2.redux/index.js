const { createStore, applyMiddleware, compose } = require('redux')
const reducer = require('./reducers')
const { logIn, logOut } = require('./actions/user')
const { addPost } = require('./actions/post')

// state
const initialState = {
  user: {
    isLoggingIn: true,
    data: null,
  },
  posts: [],
  comments: [],
  favorites: [],
  history: [],
  likes: [],
  followers: [],
}

// 삼단 고차함수
const firstMiddleware = store => next => action => {
  // ~ dispatch
  console.log('action 로깅', action)

  next(action) // = dispatch

  // dispatch ~ reducer
  // console.log('action 끝')
}

const thunkMiddleware = store => next => action => {
  if (typeof action === 'function') {
    // 비동기 = function
    return action(store.dispatch, store.getState)
  }
  // 동기
  next(action)
}

const enhancer = compose(applyMiddleware(firstMiddleware, thunkMiddleware))

// store
const store = createStore(reducer, initialState, enhancer)

store.dispatch(logIn({ id: 1, name: 'kangbyeonghyeon', admin: true }))
console.log(store.getState())
