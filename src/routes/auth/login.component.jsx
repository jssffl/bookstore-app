import SignInForm from '../../components/auth/sign-in-form.component'
import SignUpForm from '../../components/auth/sign-up-form.component'
import { AuthContainer } from './login.styles'

const Authentication = () => {
  return (
    <AuthContainer>
      <SignInForm />
      <SignUpForm />
    </AuthContainer>
  )
}

export default Authentication
