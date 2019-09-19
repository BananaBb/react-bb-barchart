# react-bb-barchart

> This is a modulable component to render Bar Chart with some nice features !

[![NPM](https://img.shields.io/npm/v/react-bb-barchart.svg)](https://www.npmjs.com/package/react-bb-barchart) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-bb-barchart
```

## Usage
The component support 2 decimal
```jsx
import React, { Component } from 'react'
import BbarChart from 'react-bb-barchart'

export default class App extends Component {
  render () {
    return (
      <div>
        <BbarChart 
          nums={[
            {"2016": "1810000"},
            {"2017": "1853407"}, 
            {"2018": "1908511"} 
          ]}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <BbarChart 
          nums={[
            {"2016": "0.91"},
            {"2017": "0.82"}, 
            {"2018": "0.86"} 
          ]}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <BbarChart 
          nums={[
            {"2016": "0.09"},
            {"2017": "0.06"}, 
            {"2018": "0.08"} 
          ]}
        />
      </div>
    )
  }
}

```

## License

MIT © [BananaBb](https://github.com/BananaBb)
