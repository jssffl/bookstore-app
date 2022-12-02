import { Link } from 'react-router-dom'
import { AccountColWrap, AccountWrap, AccountRowWrap } from './account.styles'

const Account = () => {
  return (
    <AccountWrap>
      <h2>My Account</h2>
      <AccountRowWrap>
        <AccountColWrap>
          <h3>Personal Details</h3>
          <ul>
            <li>
              <Link to='#'>Name, Email & Password</Link>
            </li>
            <li>
              <Link to='#'>Payment Options</Link>
            </li>
            <li>
              <Link to='#'>Address Book</Link>
            </li>
            <li>
              <Link to='#'>Wishlist</Link>
            </li>
          </ul>
        </AccountColWrap>
        <AccountColWrap>
          <h3>Orders</h3>
          <ul>
            <li>
              <Link to='#'>Order History</Link>
            </li>
            <li>
              <Link to='#'>Order Status</Link>
            </li>
            <li>
              <Link to='#'>Order Returns</Link>
            </li>
          </ul>
        </AccountColWrap>
      </AccountRowWrap>
    </AccountWrap>
  )
}

export default Account
