import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { changeFilterValue } from '../actions/index.js'

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 25px;
`
const Label = styled.label`
  display: block;
  align-self: flex-start;

  margin-bottom: 15px;
`

const thumb = `
  width: 25px;
  height: 25px;

  border: 4px solid #3F51B5;
  border-radius: 50%;

  background: #3F51B5;
  cursor: pointer;
`

const Range = styled.input`
  & {
    -webkit-appearance: none;
    width: 100%;
    height: 10px;

    margin: 10px 0;

    border-radius: 5px;
    background: #939393;
  }

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;

    ${thumb}
  }

  &::-moz-range-thumb {
    ${thumb}
  }
`

const Filter = props => {
  const rangeRef = useRef(null);
  const dispatch = useDispatch();

  const handleChange = () => {
     const refValue = rangeRef.current.value;
     dispatch(changeFilterValue(refValue, props.index))
   }

   // const setResetValue = value => {
   //   rangeRef.current.value = value;
   // }

  return(
    <FilterWrapper>
      <Label>{props.desc}</Label>
      <Range
        type = 'range'
        min = {props.min}
        max = {props.max}
        step = {props.step}
        defaultValue = {props.defaultValue}
        ref = {rangeRef}
        onChange = {handleChange}
        disabled = {props.disabled}
      />
    </FilterWrapper>
  )
}

export default Filter
