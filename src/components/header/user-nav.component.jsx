import { Link } from 'react-router-dom'
import { UserMenu } from './user-nav.styles'

import { signOutUser } from '../../utils/firebase/firebase.utils'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector'

const UserNav = () => {
  const currentUser = useSelector(selectCurrentUser)

  return (
    <UserMenu>
      <li>
        <Link to='/'>Home</Link>
        <Link to='#'>Help</Link>
      </li>
      <li>
        {currentUser && <Link to='/account'>My Account</Link>}
        {!currentUser && <Link to='/account/login'>Sign in</Link>}
        {currentUser && (
          <Link to='/' onClick={signOutUser}>
            Sign out
          </Link>
        )}
      </li>
    </UserMenu>
  )
}

export default UserNav
