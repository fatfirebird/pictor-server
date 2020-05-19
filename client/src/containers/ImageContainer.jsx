import React, { useRef } from 'react'
import styled from 'styled-components'
import { LoadingPicture } from '../components/loadingPicture.jsx'
import { EditingPicture } from '../components/editingPicture.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { ColumnFlex } from './PageContainer'
import { loadImg, imgData, setImgLoading, imgUnload } from '../actions/index.js'
import Cookies from 'js-cookie'
import axios from 'axios'

const ImageWrapper = styled(ColumnFlex)`
  width: 100%;
  height: 100%;

  text-align: center;

  background-color: #080715f2;

  p {
    margin: 20px 0 0 0;
    padding: 0 50px;
  }
`

const Label = styled.label`
  cursor: pointer;

  input[type = 'file'] {
    display: none;
  }
`

const ImageContainer = () => {
  const isImgLoaded = useSelector(state => state.isImgLoaded);
  const { isLoaded, url, isLoading, disabled } = isImgLoaded;
  const fileRef = useRef(null);
  const dispatch = useDispatch();

  const handleUpload = () => {
    const file = fileRef.current.files[0];
    dispatch(setImgLoading());
    if (file) return sendImg(file);
  }

  // const readFile = file => {
  //   // const reader = new FileReader();
  //   // reader.readAsDataURL(file);
  //   // reader.onload = () => {
  //   //   dispatch(imgData(file, reader.result));
  //   // }
  //   return sendImg(file);
  // }

  const sendImg = file => {
    const token = Cookies.get('access');
    let form = new FormData();
    form.append('image', file);

    const config = {
        headers: {
          'authorization': `${token}`,
          'content-type': 'multipart/form-data'
        }
    }

    axios.post('/upload', form, config)
    .then(res => {
      const { dataUrl, fileName } = res.data;
      dispatch(loadImg());
      dispatch(imgData(dataUrl, fileName));
    })
    .catch(err => {
      dispatch(imgUnload());
    })
  }

  const checkImg = () => {
    if (!isLoaded) return {height: '100vh'}
  }

  return(
    <ImageWrapper style = {checkImg()}>
    <form method="post" encType="multipart/form-data" onChange = {handleUpload}>
      <Label>
        {!isLoaded
          ?
          <LoadingPicture isLoading = {isLoading} />
          :
          <EditingPicture url = {url} disabled = {disabled}/>
         }
       <input
         type = 'file'
         ref = {fileRef}
         name = 'img'
         accept = '.jpg, .jpeg, .png'
       />
      </Label>
    </form>
    </ImageWrapper>
  )
}

export default ImageContainer
