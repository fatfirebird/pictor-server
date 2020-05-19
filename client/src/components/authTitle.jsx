import React from 'react'

export const AuthTitle = props => {
  return(
    <h2>{props.authStatus === 'reg' ? 'Регистрация' : 'Авторизация'}</h2>
  )
}
