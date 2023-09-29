// async action creator
const logIn = data => {
  return (dispatch, getState) => {
    dispatch(logInRequest(data)) // 요청
    try {
      setTimeout(() => { // 성공
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: 'kangbyeonghyeon',
          })
        )
      }, 2000)
    } catch (error) { // 실패
      dispatch(logInFailure(error))
    }
  }
}

const logInRequest = data => {
  return {
    type: 'LOG_IN_REQUEST',
    data,
  }
}

const logInSuccess = data => {
  return {
    type: 'LOG_IN_SUCCESS',
    data,
  }
}

const logInFailure = error => {
  return {
    type: 'LOG_IN_FAILURE',
    error,
  }
}

// sync action creator
// const logIn = data => {
//   return {
//     type: 'LOG_IN',
//     data,
//   }
// }

const logOut = () => {
  return {
    type: 'LOG_OUT',
  }
}

module.exports = { logIn, logOut }
