import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  applyBrake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading"> SPEEDOMETER </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h2 className="title"> Speed is {count}mph </h2>
        <p className="description"> Min Limit is 0mph, Max Limit is 200mph </p>
        <div className="buttons-container">
          <button
            className="accelerate-button"
            type="button"
            onClick={this.accelerate}
          >
            {' '}
            Accelerate{' '}
          </button>
          <button
            className="apply-brake-button"
            type="button"
            onClick={this.applyBrake}
          >
            {' '}
            Apply Brake{' '}
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
