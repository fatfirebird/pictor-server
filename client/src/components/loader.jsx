import styled from 'styled-components'
import { Colors } from '../styles/index.js'

export const Loader = styled('div')`
  width: 75px;
  height: 75px;
  background-color: ${Colors.blue};
  margin: auto;
  animation: sk-rotating-plane 1.2s infinite ease-in-out;

  @keyframes sk-rotating-plane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
`
