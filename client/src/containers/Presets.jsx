import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Preset } from '../components/preset.jsx'
import axios from 'axios'
import { imgData, loadImg, editing } from '../actions/index.js'

const PresetContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 150px);
  grid-template-rows: repeat(4, 150px);
  justify-content: center;
  grid-gap: 25px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 150px);
    grid-template-rows: repeat(2, 150px)
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 150px);
    grid-template-rows: repeat(2, 150px)
  }
`

const Presets = () => {
  const isImgLoaded = useSelector(state => state.isImgLoaded);
  const { url, fileName } = isImgLoaded;
  const presets = useSelector(state => state.presets);
  const filters = useSelector(state => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    const setChange = async () => {
      const url = '/edit';
      const params = {
        fileName,
        filters,
        presets
      };

      axios.post(url, {params})
      .then(res => {
        const { dataUrl, fileName } = res.data;
        dispatch(imgData(dataUrl, fileName));
      })
      .catch(err => {
        console.log(err);
        dispatch(loadImg())
      })
    }

    dispatch(editing());
    setChange()
  }, [presets, filters, fileName, dispatch])

  const createPresets = () =>
    Object
      .keys(presets)
      .map(id =>
        <Preset
          key = {id}
          index = {+id}
          url = {url}
          name = {presets[id].name}
          desc = {presets[id].desc}
        />
      );

  return(
    <PresetContainer>
      {createPresets()}
    </PresetContainer>
  )
}

export default Presets
