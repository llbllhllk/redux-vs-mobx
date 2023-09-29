const { produce } = require('immer')

const initialState = { isLoggingIn: false, data: null }

const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
const LOG_IN_FAILURE = 'LOG_IN_FAILURE'
const LOG_OUT = 'LOG_OUT'

const userReducer = (prevState = initialState, action) => {
  return produce(prevState, draft => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.data = null
        draft.isLoggingIn = true
        break
      case LOG_IN_SUCCESS:
        draft.isLoggingIn = false
        draft.data = action.data
        break
      case LOG_IN_FAILURE:
        draft.isLoggingIn = false
        draft.data = null
        break
      case LOG_OUT:
        draft.data = null
        break
      default:
        break
    }
  })
}

module.exports = userReducer
