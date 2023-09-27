const { createStore } = require('redux')

// reducer(객체를 생성해서 대체해주는 놈)
const reducer = (prevState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...prevState,
        user: action.data,
      }
    case 'LOG_OUT':
      return {
        ...prevState,
        user: null,
      }
    case 'ADD_POST':
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
      }
    default:
      return prevState
  }
}

// state
const initialState = {
  user: null,
  posts: [],
}

// store(reducer과 initial state를 받는다.)
const store = createStore(reducer, initialState)

// actions(+action creator)
const logIn = data => {
  return {
    type: 'LOG_IN',
    data,
  }
}

const logOut = () => {
  return {
    type: 'LOG_OUT',
  }
}

const addPost = data => {
  return {
    type: 'ADD_POST',
    data,
  }
}

// dispatch(사용)
store.dispatch(
  logIn({
    id: 1,
    name: '강병현',
    admin: true,
  })
)
console.log(store.getState())

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: '안녕하세요. 강병현 입니다.',
  })
)
console.log(store.getState())

store.dispatch(addPost({ userId: 2, id: 2, content: '과연 내가 강병현일까?!' }))
console.log(store.getState())

store.dispatch(logOut())
console.log(store.getState())
