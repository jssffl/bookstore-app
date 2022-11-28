import { Link } from 'react-router-dom'
import { UserMenu } from './user-nav.styles'
const UserNav = () => {
  return (
    <UserMenu>
      <li>
        <Link to='/'>Home</Link>
        <Link to='/'>Help</Link>
      </li>
      <li>
        <Link to='/'>Order status</Link>
        <Link to='/'>Sign in</Link>
        <Link to='/'>Sign out</Link>
      </li>
    </UserMenu>
  )
}

export default UserNav
