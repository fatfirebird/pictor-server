import styled, { keyframes } from 'styled-components'

export const fadeOutLeft = keyframes`
  from {
    display: none;
    left: -1000px;
   }

   to {
     display: flex;
     left: 0px;
   }

   @media (min-width: 768px) {
     left: -2000px
   }
`

export const fadeInLeft = keyframes`
  from {
    display: flex;
    left: 0px;
  }

  to {
    display: none;
    left: -1000px;
   }

   @media (min-width: 768px) {
     left: -2000px
   }
`

export const Animation = styled.div`
  animation: ${props => props.animation} ${props => props.delay} linear forwards;
`
