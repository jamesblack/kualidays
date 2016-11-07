import React, { PropTypes } from 'react'
import Highlight from 'react-highlight'

export default function Transformations(props) {
  const subTitle = () => {
    if (props.explain) return ''
    if (props.usage) return ' - Usage'
    if (props.pipeline) return ' - Pipeline'
  }
  return (
    <div>
      <h1>Loaders{subTitle()}</h1>
      { props.explain &&
        (
          <div>
            <p>Loaders are a function that takes your file contents as input, and return a output based on some transformation</p>
            <p>Loaders are the secret sauce that allow you to use non-javascript assets in your module tree</p>
            <Highlight>
            {`
// fileContents -> transformedContents
module.exports = function(source) {
  // Do some amazing things to the source
  return source
}
            `}
            </Highlight>
          </div>
        )
      }

      { props.usage && (
        <div>
          <h2>Require</h2>
          <Highlight>
            {`
require('jade!./template.jade')
require('style!css!less!./someLessFile.less')
            `}
          </Highlight>
          <h2>Config</h2>
          <Highlight>
            {`
{ loader: 'jade' }
{ loader: 'style!css' }
{ loaders: ['style', 'css'] }
            `}
          </Highlight>
          <h2>CLI</h2>
          <Highlight>
            {`
webpack --module-bind jade --module-bind 'css=style!css'
            `}
          </Highlight>
        </div>
      ) }

       { props.pipeline && (
        <div>
          <p>If multiple loaders are declared for a single file, they are process right to left</p>
          <p>You can use as many loaders as you like</p>
          <p>Each file gets run through the loaders independently</p>
        </div>
      ) }

    </div>
  )
}
