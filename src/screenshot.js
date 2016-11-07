import React, { PropTypes } from 'react'

export default function Screenshot(props) {
  return (<img width="900" src={`images/${props.name}.png`} />)
}
