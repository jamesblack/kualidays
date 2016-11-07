import React, { PropTypes } from 'react'
import cx from 'classnames'
import { Paper } from 'material-ui'

export default function Step(props) {
  return (
    <Paper
      className={cx('step', 'slide', { hideOnInactive: props.hideOnInactive })}
      data-x={props.x}
      data-y={props.y}
      data-z={props.z}
      data-rotate={props.rotate}
    >{props.children}</Paper>
  )
}
