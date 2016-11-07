import React, { PropTypes } from 'react'

export default function AssetCompiling(props) {
  return (
    <div>
      <h1>Asset Compiler</h1>
      <p>Webpack loads javascript by default</p>
      <p>It can also be told how to load other assets via transformers</p>
      <ul>
        <li>stylesheets</li>
        <li>template files</li>
        <li>images</li>
      </ul>
    </div>
  )
}
