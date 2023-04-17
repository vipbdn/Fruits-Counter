import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  eatMango = () => {
    this.setState(prevCount => ({mango: prevCount.mango + 1}))
  }

  eatBanana = () => {
    this.setState(prevCount => ({banana: prevCount.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="heading">
            Bob ate <span className="span-element">{mango}</span> mangoes{' '}
            <span className="span-element">{banana}</span> bananas
          </h1>
          <div className="bottom-container">
            <div className="botom-inner-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <button type="button" className="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>

            <div className="botom-inner-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <button type="button" className="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
