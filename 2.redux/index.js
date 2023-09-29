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

// dispatch
// store.dispatch(
//   logIn({
//     id: 1,
//     name: '강병현',
//     admin: true,
//   })
// )
// console.log(store.getState())

// store.dispatch(
//   addPost({
//     userId: 1,
//     id: 1,
//     content: '안녕하세요. 강병현 입니다.',
//   })
// )
// console.log(store.getState())

// store.dispatch(addPost({ userId: 2, id: 2, content: '2번째 컨텐츠' }))
// console.log(store.getState())

// store.dispatch(logOut())
// console.log(store.getState())

store.dispatch(logIn({ id: 1, name: 'kangbyeonghyeon', admin: true }))
console.log(store.getState())
