import React from 'react'
import LoadPic from '../content/load_picture.svg'
import { Loader } from './loader.jsx'

export const LoadingPicture = props => {
  const { isLoading } = props;

  return(
    <React.Fragment>
    { !isLoading
      ?
      <div>
       <img src = {`${LoadPic}`} width='50%' height='50%' alt='Картинка'/>
       <p>Нажмите здесь, чтобы загрузить изображение в формате jpeg или png</p>
      </div>
      :
      <Loader />
    }

    </React.Fragment>

  )
}
