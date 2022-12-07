import {
  NavFooterCol,
  NavFooterRow,
  TheFooter,
  CopyText,
} from './footer.styles'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <TheFooter>
      <NavFooterRow>
        <NavFooterCol>
          <div>Company</div>
          <ul>
            <li>
              <Link to='#'>About us</Link>
            </li>
            <li>
              <Link to='#'>Terms</Link>
            </li>
            <li>
              <Link to='#'>Privacy</Link>
            </li>
          </ul>
        </NavFooterCol>
        <NavFooterCol>
          <div>Work with us</div>
          <ul>
            <li>
              <Link to='#'>Jobs</Link>
            </li>
            <li>
              <Link to='#'>Authors</Link>
            </li>
            <li>
              <Link to='#'>Advertise</Link>
            </li>
          </ul>
        </NavFooterCol>
        <NavFooterCol>
          <div>Let us help you</div>
          <ul>
            <li>
              <Link to='#'>Contact us</Link>
            </li>
            <li>
              <Link to='#'>Your Account</Link>
            </li>
            <li>
              <Link to='#'>Your Orders</Link>
            </li>
          </ul>
        </NavFooterCol>
      </NavFooterRow>
      <CopyText>
        <img src={logo} alt='logo' />
        <p>&copy; 2022 Bookstore, Inc</p>
      </CopyText>
    </TheFooter>
  )
}

export default Footer
