import { createGlobalStyle } from 'styled-components'

export const Colors = {
  grey: '#939393',
  lightgrey: '#e5e5e5',
  purple: '#A035A3',
  blue: '#3F51B5'
}

export const Font = {
  fontFamily: 'Roboto, sans-serif',
  fontColor: `${Colors.grey}`,
  fontSize: `14`,
  lineHeight: `18`,
}

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;

    color: ${Colors.grey};
    text-decoration: none;
    font-family: Roboto, sans-serif;
  }
`
