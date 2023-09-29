const initialState = { isLoggingIn: false, data: null }

const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
const LOG_IN_FAILURE = 'LOG_IN_FAILURE'
const LOG_OUT = 'LOG_OUT'

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...prevState,
        isLoggingIn: true,
      }
    case LOG_IN_SUCCESS:
      return {
        ...prevState,
        isLoggingIn: false,
        data: action.data,
      }
    case LOG_IN_FAILURE:
      return {
        ...prevState,
        isLoggingIn: false,
        data: null,
      }
    case LOG_OUT:
      return {
        ...prevState,
        data: null,
      }
    default:
      return prevState
  }
}

module.exports = userReducer
