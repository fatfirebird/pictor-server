import React from 'react'
import styled from 'styled-components'
import { Colors } from '../styles/index.js'
import Cookies from 'js-cookie'

const Head = styled.header`
  display: flex;
  flex-direction: column-reverse;

  width: 100%;
  height: 135px;

  background-color: ${Colors.blue};
`
const Login = styled.span`
  color: #fff;

  padding: 0 0 30px 25px;

  font-size: 26px;
  line-height: 32px;
`

const User = () => {
  const login = Cookies.get('login');

  return(
    <Head>
      <Login>{login}</Login>
    </Head>
  )
}

export default User
