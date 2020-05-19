import styled from 'styled-components'
import { Font } from './constants.js'

export const Header1 = styled.h1`
  font-family: ${Font.fontFamily};
  font-size:   ${2.5 * Font.fontSize}px;
  line-height: ${2.5 * Font.lineHeight}px;

  color: ${Font.fontColor};
`

export const Header2 = styled.h2`
  font-family: ${Font.fontFamily};
  font-size:   ${1.7 * Font.fontSize}px;
  line-height: ${1.7 * Font.lineHeight}px;

  margin: 20px 0;

  color: ${Font.fontColor};
`
export const SpecialText = styled.span`
  font-family: ${Font.fontFamily};
  font-size:   ${1.4 * Font.fontSize}px;
  line-height: ${1.4 * Font.lineHeight}px;

  color: ${Font.fontColor};
`
export const Text = styled.p`
  font-family: ${Font.fontFamily};
  font-size:   ${Font.fontSize}px;
  line-height: ${Font.lineHeight}px;

  color: ${Font.fontColor};
`
