import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

export default class BbarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  formater(nums) {
    let data = {}
    let largest, smallest, convert
        largest = smallest = convert = 0

    if (nums) {
      nums.map((obj) => {
        for (let key in obj) {
          convert = obj[key].toString().replace(/(,|\(|\))/g, "");
          convert = Number(convert)
          data[key] = convert

          if (convert > largest) {
            largest = convert
          }
          if (smallest === 0 || convert < smallest) {
            smallest = convert
          }
        }
        return ""
      })
    }

    return {data: data, largest: largest, smallest: smallest}
  }

  convertUnit(num, unit) {
    if (unit === 6) {
      num = (num / Math.pow(10, unit)).toFixed(2) + "m"
    } else if (unit === 12) {
      num = (num / Math.pow(10, unit)).toFixed(2) + "b"
    } else {
      num = num.toFixed(2)
    }
    return num
  }

  calcRoundup(num) {
    let digest, multi, divide
        digest = multi = divide = 0

    if (num > 1) {
      digest = Math.ceil(num).toString().length - 1
      if (num > 100) {
        multi = Math.pow(10, (digest - 1))
        num = Math.ceil(num / multi) * multi
      } else {
        multi = Math.pow(10, digest)
        num = Math.ceil(num / multi) * multi
      }
    } else {
      digest = (num * 10 >= 1)? -1 : -2
      divide = Math.pow(10, (digest + 1))
      num = Math.ceil(num / divide) * divide
    }
    return num
  }

  calcRounddown(num) {
    let digest, multi, divide
        digest = multi = divide = 0

    if (num > 1) {
      digest = Math.floor(num).toString().length - 1
      if (num > 100) {
        multi = Math.pow(10, (digest - 1))
        num = Math.floor(num / multi) * multi
      } else {
        multi = Math.pow(10, digest)
        num = Math.floor(num / multi) * multi
      }
    } else {
      digest = (num * 10 >= 1)? -1 : -2
      divide = Math.pow(10, digest)
      num = (Math.floor(num / divide) - 1) * divide
    }
    return num
  }

  render_Unit(largest, smallest) {
    let million = 6
    let billion = 12
    let max = this.calcRoundup(largest)
    let min = this.calcRounddown(smallest)
    let mid = (max + min) / 2
    let unit = Math.ceil(max).toString().length - 1
    if (unit >= billion) {unit = billion} 
    else if (unit >= million) {unit = million}
    else {unit = 0}

    return [max, mid, min, unit]
  }

  render_Y(max, mid, min, unit) {
    return (
      <div className="bb-bar-chart-y">
        <span>{this.convertUnit(max, unit)}</span>
        <span>{this.convertUnit(mid, unit)}</span>
        <span>{this.convertUnit(min, unit)}</span>
      </div>
    )
  }

  render_X(data, max, min, unit) {
    let items = []
    let style = 0
    for (let key in data) {
      style = {height: ((data[key] - min) * 200) / (max - min)}
      items.push(
        <div className="bb-bar-chart-content" key={"col" + key}>
          <div className="axis-bar"><div style={style}><span>{this.convertUnit(data[key], unit)}</span></div></div>
          <div className="axis-x">{key}</div>
        </div>
      )
    }
    return (
      <div className="bb-bar-chart-x">
        {items}
      </div>
    )
  }

  render() {
    let nums = this.formater(this.props.nums)
    let [max, mid, min, unit] = this.render_Unit(nums.largest, nums.smallest)
    return (
      <div className="bb-bar-chart">
        {this.render_Y(max, mid, min, unit)}
        {this.render_X(nums.data, max, min, unit)}
      </div>
    )
  }
}
