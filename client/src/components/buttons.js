import styled from 'styled-components'
import { Colors } from '../styles/index.js'
import arrow from '../content/arrow.svg'

const iconButton = styled.button`
  position: absolute;

  border: 0;
  padding: 0;

  background-color: transparent;
  outline: none;
`

const button = styled.button`
  display: inline-block;

  padding: 12px 10px;
  border: 0px;
  border-radius: 4px;

  max-width: 130px;
  max-height: 53px;

  color: #fff;
  font-family: Roboto
  font-size: 14px;
`

export const Button = styled(button)`
  min-width: 133px;

  background-color: ${props => props.type === 'login' ? Colors.purple : Colors.blue};
`

export const CloseButton = styled(iconButton)`
  top: 20px;
  right: 35px;

  &::after,
  &::before {
    content: '';

    position: absolute;
    top: 0px;
    left: 0px;

    width: 30px;
    height: 3px;

    border-radius: 4px;

    background-color: ${Colors.blue};
  }

  &::after {
    transform: rotate(45deg);
  }

  &::before {
    transform: rotate(-45deg);
  }

  :hover:after,
  :hover:before,
  :focus:after,
  :focus:before {
    background: ${Colors.purple};
  }
`
export const ArrowButton = styled(iconButton)`
  top: 30px;
  right: 20px;

  width: 35px;
  height: 35px;

  background: url(${arrow}) no-repeat;
  transform: rotate(180deg);
`

const circle = styled(iconButton)`
  width: 35px;
  height: 35px;

  background-color: ${Colors.blue};
  border-radius: 50%;
  opacity: 0.5;
  transition: 0.4s;

  &:hover,
  &:focus {
    opacity: 1;
  }
`

export const BurgerButton = styled(circle)`
  top: 30px;
  left: 20px;

  &::before {
    content: '';

    position: absolute;
    top: -25%;
    right: 50%;
    transform: translate(50%, 100%);
    width: 50%;
    height 50%;

    background-image: linear-gradient(
      0deg,
      transparent 0,
      transparent 20%,
      #fff 20%,
      #fff 30%,
      transparent 30%,
      transparent 45%,
      #fff 45%,
      #fff 55%,
      transparent 55%,
      transparent 70%,
      #fff 70%,
      #fff 80%,
      transparent 80%,
      transparent 100%
    )
  }
`
export const DottedButton = styled(circle)`
  position: absolute;

  top: 30px;
  right: 20px;

  &::before {
    content: '•••';

    position: absolute;
    top: -50%;
    right: 50%;
    transform: translate(50%, 50%);
    width: 100%;
    height 100%;

    font-size: 24px;
    color: white;
  }
`
