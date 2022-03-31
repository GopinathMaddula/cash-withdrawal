import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class cashWithdrawal extends Component {
  state = {yourBalance: 2000}

  changingBalance = value => {
    const {yourBalance} = this.state
    const newBalance = yourBalance - value
    this.setState({yourBalance: newBalance})
  }

  render() {
    const {yourBalance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="app-container">
        <div className="card-container">
          <div className="sarah-container">
            <div className="circular-name-container">
              <p className="letter">S</p>
            </div>
            <p className="sarah-heading">Sarah Williams</p>
          </div>
          <div className="your-balance-container">
            <p className="balance-heading">Your Balance</p>
            <p className="balance">{yourBalance}</p>
          </div>
          <div className="rupees-container">
            <p className="rupees">In Rupees</p>
          </div>
          <div className="withdraw-container">
            <p className="withdraw">Withdraw</p>
            <p className="description">CHOOSE SUM (IN RUPEES)</p>
            <ul className="button-container">
              {denominationsList.map(eachValue => (
                <DenominationItem
                  key={eachValue.id}
                  denominationItem={eachValue}
                  changingBalance={this.changingBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default cashWithdrawal
