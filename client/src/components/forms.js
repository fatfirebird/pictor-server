import styled from 'styled-components';
import { Colors, Font } from '../styles/index.js';

export const Form = styled.form`
  display: flex;
  flex-direction: column
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    margin: 10px 0;
  }

  label {
    font-family: ${Font.fontFamily};
    font-size:   ${1.4 * Font.fontSize}px;
    line-height: ${1.4 * Font.lineHeight}px;

    color: ${Font.fontColor};
  }

  input {
    border: 1px solid ${Colors.grey};
    border-radius: 4px;
    padding: 5px 10px;

    color: ${Colors.grey};

    ::placeholder {
      color: ${Colors.lightgrey}
    }

    :hover,
    :focus {
      outline: none;
      border-color: ${Colors.blue};
    }
  }

  button {
    margin: 20px 0;
  }
`
