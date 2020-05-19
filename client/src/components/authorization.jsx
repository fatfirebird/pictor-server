import React from 'react'
import styled from 'styled-components'
import { Button } from './buttons.js'
import { AuthContainer } from '../containers/PageContainer.jsx'
import { AuthTitle } from './authTitle.jsx'

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
`

export const Authorization = props => {
  return(
    <AuthContainer>
      <AuthTitle authStatus = {props.authStatus} />
      <ButtonContainer>
        <Button onClick = {props.registration}>Регистрация</Button>
        <Button type = 'login' onClick = {props.authorization}>Вход в систему</Button>
      </ButtonContainer>
    </AuthContainer>
  )
}
