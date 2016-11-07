import React, { PropTypes } from 'react'
import { map, isArray } from 'lodash'
import Highlight from 'react-highlight'

export default function BasicCode(props) {
  const snippets = props.snippet
  const languages = props.lang
  const template = (snippet, language) => (
    <div>
      <pre>{snippet}</pre>
      <Highlight className={language}>{snippetsMap[snippet]}</Highlight>
    </div>
  )

  const toRender = map(snippets, (snippet, index) => {
    return template(snippet, languages[index])
  })

  return <div>{toRender}</div>
}

const snippetsMap = {
  "index.html": `
<html>
  <head>
    <title>Webpack</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="/application.js"></script>
  </body>
</html>
  `,

  'entry.js - 1': `
alert('File Loaded')
  `,

  'webpack.config.js - 1': `
module.exports = {
  entry: './src/entry.js',
  output: {
    path: __dirname + '/dist',
    filename: 'application.js'
  }
}
  `,

  'entry.js - 2': `
const template = require('./templates/hello-world.pug')

document.getElementById('root').innerHTML = template({ name: 'KualiDays' })
  `,


  'hello-world.pug - 1': `
h1 Hello #{name}!
  `,

  'webpack.config.js - 2': `
module.exports = {
  entry: './src/entry.js',
  output: {
    path: __dirname + '/dist',
    filename: 'application.js'
  },
  module: {
    loaders: [
      { test: /\.pug$/, loader: 'pug' }
    ]
  }
}
  `,

  'package.json': `
{
  "name": "kuali-days-webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "babel-core": "6.18.2",
    "babel-loader": "6.2.7",
    "babel-preset-es2015": "6.18.0",
    "babel-preset-react": "6.16.0",
    "pug": "2.0.0-beta6",
    "pug-loader": "2.3.0",
    "react": "15.3.2",
    "react-dom": "15.3.2",
    "webpack": "1.13.3"
  }
}
  `,
  'Babel Loader Definition': `
{
  test: /\.js$/,
  include: [__dirname + '/src'],
  loader: 'babel',
  query: {
    presets: ['es2015', 'react']
  }
}
  `,

  'entry.js - 3': `
import ReactDOM from 'react-dom'
import React from 'react'

function HelloWorld({ name }) {
  return <h1>Hello {name}!</h1>
}

ReactDOM.render(
  <HelloWorld name="KualiDays" />,
  document.getElementById('root')
)
  `,

}