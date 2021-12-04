// Write your code here
import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {subscribed: false}

  clicked = () => {
    const {subscribed} = this.state
    if (subscribed) {
      this.setState(prevObj => ({subscribed: false}))
    } else {
      this.setState(prevObj => ({subscribed: true}))
    }
  }

  render() {
    const {subscribed} = this.state
    return (
      <div className="bgContainer">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <button onClick={this.clicked} className="button">
          {subscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
    )
  }
}

export default Welcome
