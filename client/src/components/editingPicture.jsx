import React from 'react'
import styled from 'styled-components'
import { Loader } from './loader.jsx'

const UploadedImg = styled.img`
  max-width: 300px;
  max-height: 300px;

  @media (min-width: 768px) {
    max-width: 700px;
    max-height: 400px;
  }

  @media (min-width: 1024px) {
    max-width: 900px;
    max-height: 300px;
  }
`

export const EditingPicture = props => {
  return(
    <React.Fragment>
    {!props.disabled
      ?
      <UploadedImg src = {props.url}/>
      :
      <Loader/>
    }
    </React.Fragment>

  )
}
