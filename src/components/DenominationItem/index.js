// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationItem, changingBalance} = props
  const {value} = denominationItem

  const updateBalance = () => {
    changingBalance(value)
  }

  return (
    <li className="list-button">
      <button type="button" className="number-button" onClick={updateBalance}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
