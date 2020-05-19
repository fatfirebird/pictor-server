import React from 'react'
import styled from 'styled-components'

const Error = styled.span`
  display: block;
  text-align: center;

  color: #bb1414;
`
export const ErrorBlock = props => {
  return(
    <React.Fragment>
    {
      props.errStatus
      &&
      <Error>{props.errStatus}</Error>
    }
    </React.Fragment>
  )
}
