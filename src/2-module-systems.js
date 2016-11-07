import React, { PropTypes } from 'react'
import Highlight from 'react-highlight'

export default function ModuleSystems(props) {
  return (
    <div>
      <h1>Module Systems</h1>

      { props.scripts && <section>
        <h2>Stone Age</h2>
        <Highlight>
          {`
<script src="does/anyone/remeber/this.js"><script>
<script>window.someSeriousDarkDays = function() {
  console.log('I am sorry for reminding you of this')
}</script>
          `}
        </Highlight>
      </section>
      }

      { props.commonjs && <section>
        <h2>CommonJs</h2>
        <Highlight>
          {`
// Export
export.namedExport = function() {}
module.exports = defaultExport
// Import
require('module') // Implicit require, has its own resolver flow
require('./someFile.js') // Explicit Require
          `}
        </Highlight>
      </section>
      }

      { props.amd && <section>
        <h2>AMD</h2>
        <Highlight>
          {`
// Export
define('advancedMathModule', ['basicMathModule'], function(basicMath) {
  return {
    add: function(a, b) { return basicMath.add(a, b) }
  }
})
// Import
require(['advancedMathModule'], function(advancedMath) {
  var total = advancedMath.add(1, 2)
})
          `}
        </Highlight>
      </section>
      }

      { props.es6 && <section>
        <h2>ES6 Module System</h2>
        <Highlight>
          {`
// Export
export function namedExport() {}
export default function() {}
// Import
import { namedExport } from './myExplicitModule'
import defaultExport from 'someImplicitModule'
          `}
        </Highlight>
      </section>
      }
    </div>
  )
}
