import React, { Component } from "react";
import draw from './ridge.js';


/**
 * Entire component for RidgeChart. Created using d3 (ridge.js) 
 * and grabs parent element for width and height
 *
 * @component
 * @example
 * return (
 *   <RidgeChart />
 * )
 */
class RidgeChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      d3: '',
      height: 0,
      width: 0
    }
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    let width = this.getWidth();
    let height = this.getHeight();
    draw({ width: width, height: height });
  }
  componentDidUpdate(prevProps) {
    let width = this.getWidth();
    let height = this.getHeight();
    draw({ width: width, height: height });
  }
  getWidth() {
    return this.chartRef.current.parentElement.offsetWidth;
  }
  getHeight() {
    return this.chartRef.current.parentElement.offsetHeight;
  }

  render() { return <div ref={this.chartRef} className="ridge"></div> }
}


export default RidgeChart;
