import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

export default class BbarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  formater(nums) {
    let obj = {}
    let largest, smallest, convert = 0

    if (nums) {
      for (let i=0; i<nums.length; i++) {
        [...nums[i]].map((val, key) => {
          console.log(val);
          convert = val.toString().replace(/(,|\(|\))/g, "");
          convert = Number(convert)
          obj[key] = convert

          if (convert > largest) {
            largest = convert
          }
          if (smallest === 0 || convert < smallest) {
            smallest = convert
          }

          return ""
        })
      }
    }

    return {obj: obj, largest: largest, smallest: smallest}
  }

  render_Unit(largest, smallest) {
    let million = 6
    let billion = 12
    let max, mid, min, unit, digest, multi, divide = 0

    if (largest > 1) {
      digest = Math.ceil(largest).toString().length - 1
      multi = Math.pow(10, digest)

      if (digest >= billion) {unit = billion} 
      else if (digestAmt >= million) {unit = million}
      
      max = Math.ceil(largest / multi) * multi
    } else {
      max = Math.ceil(largest)
    }

    if (smallest > 1) {
      digest = Math.floor(smallest).toString().length - 1
      multi = Math.pow(10, digest)
      
      min = Math.floor(smallest / multi) * multi
    } else {
      digest = Math.floor(smallest).toString().length - 2
      divide = Math.pow(10, digest)

      min = Math.floor(smallest * divide) / divide
    }

    min = (max - min) / 2

    return [max, mid, min, unit]
  }

  render_Y(max, mid, min) {
    return (
      <div className="chart-y">
        <span>{max}</span>
        <span>{mid}</span>
        <span>{min}</span>
      </div>
    )
  }

  render_X(nums) {
    return (
      <div className="chart-x">
        nums.map((val, key) => {
          
            <div className="chart-content">
              <div className="axis-bar"><div><span>{val}</span></div></div>
              <div className="axis-x">{key}</div>
            </div>
          
        })
      </div>
    )
  }

  render() {
    let nums = this.formater(this.props.nums)
    // console.log(nums);
    let [max, mid, min, unit] = this.render_Unit(nums.largest, nums.smallest)
    return (
      <div className="bar-chart">
        {this.render_Y(max, mid, min)}
        {this.render_X(nums.obj)}
      </div>
    )
  }
}
