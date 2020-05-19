import React, { useEffect } from 'react'
import Filter from '../components/Filter.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { imgData, editing, loadImg } from '../actions/index.js'
import styled from 'styled-components'
import axios from 'axios'

const FiltersWrapper = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    grid-gap: 30px;
  }
`

const Filters = () => {
  const filters = useSelector(state => state.filters);
  const presets = useSelector(state => state.presets);
  const dispatch = useDispatch();
  const fileName = useSelector(state => state.isImgLoaded.fileName);
  const disabled = useSelector(state => state.isImgLoaded.disabled);


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
    setChange();
  }, [filters, presets, dispatch, fileName]);

  const createFilters = () =>
    Object
    .keys(filters)
    .map(id =>
      <Filter
        key = {id}
        index = {+id}
        id = {filters[id].name}
        disabled = {disabled}
        min = {filters[id].min}
        max = {filters[id].max}
        step = {filters[id].step}
        defaultValue = {filters[id].value}
        desc = {filters[id].desc}
      />
    );

  return(
    <FiltersWrapper>
      {createFilters()}
    </FiltersWrapper>
  )
}

export default Filters
