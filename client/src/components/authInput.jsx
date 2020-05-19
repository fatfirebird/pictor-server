import React from 'react'

export const AuthInput = props => {
  return(
    <div>
      <label htmlFor = {props.htmlFor}>{props.label}</label>
      <input
       id = {props.id}
       type = {props.type}
       placeholder = {props.placeholder}
       value = {props.value}
       onChange = {props.onChange}
       required
      />
    </div>
  )
}
