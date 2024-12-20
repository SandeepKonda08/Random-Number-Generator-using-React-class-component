// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  increment = () => {
    console.log('clicked Bro')
    console.log(Math.floor(Math.random(1, 101) * 100))
    this.setState({
      count: Math.floor(Math.random(1, 101) * 100),
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-head">Random Number</h1>
          <p className="para1">
            Generate a random number in the range of 0 to 100
          </p>
          <button onClick={this.increment} className="button">
            Generate
          </button>
          <p className="heading">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
