import styled from 'styled-components'
import { Colors } from '../styles/index.js'
import exit from '../content/exit.svg'
import filledImg from '../content/filledImg.svg'
import question from '../content/question.svg'

export const Link = styled.a`
  position: relative;

  padding-left: 60px;

  color: ${Colors.blue}
  text-decoration: none;

  cursor: pointer;

  &::before {
    content: '';

    position: absolute;
    left: 0;
    top: -5px;

    width: 40px;
    height: 40px;
    background: url(${props => chooseIcon(props.icon)}) no-repeat;
  }
`
const chooseIcon = (icon) => {
  if (icon === 'exit') {
    return exit
  } else
  if (icon === 'filledImg') {
    return filledImg
  } else
  if (icon === 'question') {
    return question
  } else {
    return null
  }
}
