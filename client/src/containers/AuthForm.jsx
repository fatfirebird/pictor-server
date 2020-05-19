import React, { useState } from 'react'
import { useDispatch, batch } from 'react-redux'
import { setConnection, reg, auth, closeAuth, signin } from '../actions/index.js'
import { AuthContainer } from './PageContainer.jsx'
import { Form } from '../components/forms.js'
import { AuthTitle } from '../components/authTitle.jsx'
import { ErrorBlock } from '../components/errorBlock.jsx'
import { AuthInput } from '../components/authInput.jsx'
import { Button, CloseButton } from '../components/buttons.js'
import axios from 'axios'
import Cookies from 'js-cookie'

export const AuthForm = props => {
  const dispatch = useDispatch();
  const user = {login: '', email: '', password: ''};
  const [userInfo, setUserInfo] = useState(user);
  const [errStatus, setError] = useState(null);

  const handleChange = event => {
    const { value, id } = event.target;

    return setUserInfo(state => ({
      ...state,
      [id]: value,
    }));
  }

  const handleError = res => {
    const { statusText } = res;
    return setError(statusText);
  }

  const handleSubmit = () => {
    dispatch(setConnection());

    if (userInfo.hasOwnProperty('email') && userInfo.email !== '') {
      console.log(userInfo.email);

      return sendRequest('/reg', userInfo);
    }

    return sendRequest('/log', userInfo);
  }

  const sendRequest = (url, data) => {
    return axios.post(url, data)
    .then(res => {
      const { login } = data;
      if (res.data.hasOwnProperty('email')) {
         dispatch(signin());
         setUserInfo(state => user);
      }
      if (res.data.token) {
        Cookies.set('access', res.data.token);
        Cookies.set('login', login);

        batch(() => {
          dispatch(auth());
          dispatch(closeAuth());
        });
      }
    })
    .catch(err => {
      const response = err.response;
      const status = response.data.status;

      if (status === 401) {
        dispatch(reg());
      } else if (status === 403) {
        dispatch(signin());
      }
      handleError(response);
    })
  }

  let display = 'flex';
  if (props.authLoading) {
    display = 'none';
  }

  return(
    <AuthContainer style = {{display: `${display}`}}>
      <AuthTitle authStatus = {props.authStatus} />
      {
        props.authStatus
        &&
        <Form onSubmit = {(e) => {
          e.preventDefault()
          setError(state => null);
          handleSubmit()
        }}>
          <ErrorBlock errStatus = {errStatus} />
          {
            props.authStatus === 'reg'
            &&
            <AuthInput
              htmlFor = 'email'
              label = 'E-mail'
              id = 'email'
              type = 'email'
              placeholder = 'Введите email'
              value = {userInfo.email}
              onChange = {handleChange}
            />
          }
          <AuthInput
            htmlFor = 'login'
            label = 'Логин'
            id = 'login'
            type = 'text'
            placeholder = 'Введите логин'
            value = {userInfo.login}
            onChange = {handleChange}
          />
          <AuthInput
            htmlFor = 'password'
            label = 'Пароль'
            id = 'password'
            type = 'password'
            placeholder = 'Введите пароль'
            value = {userInfo.password}
            onChange = {handleChange}
          />
          <Button auth = {props.authStatus}>Отправить</Button>
          <CloseButton onClick = {e => {
            e.preventDefault();
            setError(state => null);
            setUserInfo(state => user);
            dispatch(closeAuth());
          }}/>
        </Form>
      }
    </AuthContainer>
  )
}


// <AuthContainer>
//   <h2>{authStatus === 'reg' ? 'Регистрация' : 'Авторизация'}</h2>
//   {authStatus &&
//    <Form onSubmit = {(e) => {
//      e.preventDefault()
//      setError(state => null);
//      handleSubmit()
//    }}>
//    {errStatus &&
//      <ErrorBlock>
//        {errStatus}
//      </ErrorBlock>
//    }
//        {authStatus === 'reg' &&
//        <div>
//          <label htmlFor = 'email'>E-mail</label>
//          <input
//           id = 'email'
//           type = 'email'
//           placeholder = 'Введите email'
//           value = {userInfo.email}
//           onChange = {handleChange}
//           required
//          />
//        </div>
//        }
//        <div>
//          <label htmlFor = 'login'>Логин</label>
//          <input
//           id = 'login'
//           type = 'text'
//           placeholder = 'Введите логин'
//           onChange = {handleChange}
//           value = {userInfo.login}
//           required
//          />
//        </div>
//        <div>
//          <label htmlFor = 'password'>Пароль</label>
//          <input
//           id = 'password'
//           type = 'password'
//           placeholder = 'Введите пароль'
//           onChange = {handleChange}
//           value = {userInfo.password}
//           required
//           />
//        </div>
//         <Button auth = {authStatus}>Отправить</Button>
//         <CloseButton onClick = {e => {
//           e.preventDefault();
//           setError(state => null);
//           setUserInfo(state => user);
//           dispatch(closeAuth());
//         }}/>
//    </Form>
//   }
// </AuthContainer>
