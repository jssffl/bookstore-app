import SignInForm from '../../components/auth/sign-in-form.component'
import SignUpForm from '../../components/auth/sign-up-form.component'
import { AuthWrap } from './login.styles'

const Authentication = () => {
  return (
    <AuthWrap>
      <SignInForm />
      <SignUpForm />
    </AuthWrap>
  )
}

export default Authentication
