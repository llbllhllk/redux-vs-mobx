import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logIn } from './redux/actions/user'
import userSlice from './redux/reducers/userSlice'
import { addPost } from './redux/actions/post'

const App = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const onClick = useCallback(() => {
    const data = { id: 'kangbyeongheyon', password: '1234' }
    dispatch(logIn(data))
  }, [])

  const onLogOut = useCallback(() => {
    dispatch(userSlice.actions.logOut())
  }, [])

  const onAddPost = useCallback(() => {
    dispatch(addPost())
  }, [])

  return (
    <div>
      {user.isLoggingIn ? (
        <div>로그인 중...</div>
      ) : user.data ? (
        <p>{user.data.nickname}</p>
      ) : (
        <p>로그인 해주세요</p>
      )}
      {!user.data ? (
        <button onClick={onClick}>로그인</button>
      ) : (
        <button onClick={onLogOut}>로그아웃</button>
      )}
      <button onClick={onAddPost}>게시글 작성</button>
    </div>
  )
}

export default App
