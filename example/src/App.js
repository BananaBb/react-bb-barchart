import React, { Component } from 'react'
import BbarChart from 'react-bb-barchart'

export default class App extends Component {
  render () {
    return (
      <div>
        <BbarChart 
        	nums={[
        		{"2018": "1908511"}, 
        		{"2017": "1883407"}, 
        		{"2016": "1859414"}
        	]}
        />
      </div>
    )
  }
}
