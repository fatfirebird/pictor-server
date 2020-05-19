import React from 'react'
import styled from 'styled-components'
import User from  '../components/User.jsx'
import { Link } from '../components/Link.jsx'
import { ArrowButton } from '../components/buttons.js'
import { fadeOutLeft, fadeInLeft, Animation } from '../styles/animations.js'
import { showModal, hideModal, exit, imgUnload } from '../actions/index.js'
import { useSelector, useDispatch, batch } from 'react-redux'
import Cookies from 'js-cookie'

const Navbar = styled(Animation)`
  position: absolute;

  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  background-color: #fff;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    margin: 40px 0 0 25px;
  }

  @media (min-width: 1024px) {
    width: 350px;
  }
`

const Navigation = () => {
  const modal = useSelector(state => state.menuReducer.modal);
  const imgUrl = useSelector(state => state.isImgLoaded.url);
  const isModalOpened = modal.isOpened;
  const dispatch = useDispatch();

  const createAnimation = () => {
    let animation;
    !isModalOpened ? animation = fadeInLeft : animation = fadeOutLeft;
    return animation
  }

  return(
    <Navbar animation = {createAnimation()} delay = '0.4s'>
      <User />
      <ul>
        <li>
          <Link icon="filledImg">Редактировать изображение</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link icon="question" onClick={e => {
            e.preventDefault()
            batch(() => {
              dispatch(hideModal('navbar'));
              dispatch(showModal('help'));
            })
          }}>Справка</Link>
        </li>
        <li>
          <Link icon="exit" onClick={e => {
            e.preventDefault();
            Cookies.remove('access');
            batch(() => {
              dispatch(hideModal('navbar'));
              dispatch(exit());
              if (imgUrl) dispatch(imgUnload());
            })
          }}>Выход</Link>
        </li>
      </ul>
      <ArrowButton onClick={e => {
        e.preventDefault();
        isModalOpened ? dispatch(hideModal('navbar')) : dispatch(showModal('navbar'))
      }}/>
    </Navbar>
  )
}

export default Navigation
