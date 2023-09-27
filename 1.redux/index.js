const { createStore } = require('redux')

// 새로운 state를 만들어 주는 애 불변성 조심!
const reducer = (prevState, action) => {
  switch (action.type) {
    case 'CHANGE_COMP_A':
      return {
        ...prevState,
        compA: action.data,
      }
    case 'CHANGE_COMP_B':
      return {
        ...prevState,
        compB: action.data,
      }
    case 'CHANGE_COMP_C':
      return {
        ...prevState,
        compC: action.data,
      }
    // type 오타났을 경우 기존 state를 반환
    default:
      return prevState
  }
}
// reducer가 엄청 늘어나네..



// state
const initialState = {
  compA: 'a',
  compB: 12,
  compC: null,
}

// store에는 reducer를 인수로 받는다.
const store = createStore(reducer, initialState)

store.subscribe(() => { // 화면을 바꿔주는 코드는 여기서 작성하면 된다. react-redux에 드러악 있음.
  console.log('changed')
})

// initialState.compA = 'b' => 이렇게 바꾸면 안된다. 이렇게 하면 전의 history를 모르기 때문이다. 새로운 state를 찍어내도록 해야함.

console.log(store.getState())

// action을 만들어내는 action 생성자이다.
// 중복을 처리하기 위해서 함수로 만들어서 객체를 반환하도록 하는 것임.
const changeCompA = data => {
  // action(객체)
  return {
    type: 'CHANGE_COMP_A',
    data,
  }
}

store.dispatch(changeCompA('b'))

console.log(store.getState())
