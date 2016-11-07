import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Step from './step'
import WhatIsWebpack from './1-what-is-webpack'
import ModuleSystems from './2-module-systems'
import AssetCompiling from './3-asset-compiling'
import Transformations from './4-transformations'
import TheFear from './5-the-fear'
import BasicCode from './6-basic-code'

import Screenshot from './screenshot'

class App extends Component {
  render() {
    return (
      <div id="impress">
        <Step z="0">
          <WhatIsWebpack />
        </Step>
        <Step x="1000">
          <ModuleSystems scripts />
        </Step>
        <Step x="1000" y="1000">
          <ModuleSystems commonjs />
        </Step>
        <Step x="1000" y="2000">
          <ModuleSystems amd />
        </Step>
        <Step x="1000" y="3000">
          <ModuleSystems es6 />
        </Step>
        <Step x="2000">
          <AssetCompiling />
        </Step>
        <Step x="3000">
          <Transformations explain />
        </Step>
        <Step x="3000" y="1000">
          <Transformations usage />
        </Step>
        <Step x="3000" y="2000">
          <Transformations pipeline />
        </Step>
        <Step x="4000">
          <TheFear />
        </Step>
        <Step x="5000">
          <BasicCode snippet={['index.html']} lang={['html']} />
        </Step>
        <Step x="5000" y="1000">
          <BasicCode snippet={['entry.js - 1', 'webpack.config.js - 1']} lang={['javascript', 'javascript']} />
        </Step>
        <Step x="5000" y="2000">
          <Screenshot name="alert-file-loaded" />
        </Step>
        <Step x="6000" y="0000">
          <BasicCode
            snippet={[
              'entry.js - 2',
              'hello-world.pug - 1',
              'webpack.config.js - 2'
            ]}
            lang={[
              'javascript',
              'pug',
              'javascript'
            ]} />
        </Step>
        <Step x="6000" y="1000">
          <Screenshot name="hello-kualidays" />
        </Step>
        <Step x="7000">
          <h1>Babel... React... Suffering...</h1>
        </Step>
        <Step x="7000" y="1000">
          <BasicCode snippet={['package.json']} lang={['javascript']} />
        </Step>
        <Step x="7000" y="2000">
          <BasicCode snippet={['Babel Loader Definition']} lang={['javascript']} />
        </Step>
        <Step x="7000" y="3000">
          <BasicCode snippet={['entry.js - 3']} lang={['javascript']} />
        </Step>
      </div>
    );
  }
}

export default App;
