import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from '../UI/form-input.component'
import CustomButton from '../UI/button.component'
import {
  ButtonContainer,
  SignInContainer,
  MessageBanner,
} from './sign-in-form.styles'

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields
  const [error, setError] = useState(null)
  // const navigation = useNavigation()
  const navigate = useNavigate()

  // console.log('navigate', navigate)
  // console.log('navigation', navigation)

  const resetFormField = () => {
    setFormFields(defaultFormFields)
  }

  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      await signInAuthUserWithEmailAndPassword(email, password)

      resetFormField()
      navigate('/')

      setFormFields(defaultFormFields)
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          setError('Incorrect  Email or password ')
          break
        case 'auth/user-not-found':
          setError('No user associated with this email')
          break
        default:
          setError('Something went wrong, please try later!')
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
    resetFormField()
    navigate('/')
  }

  return (
    <SignInContainer>
      <h2>Sign in</h2>
      <span>Forgot password?</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label='Email'
          inputOptions={{
            name: 'email',
            value: email,
            type: 'email',
            required: true,
            onChange: handleChange,
          }}
        />
        <FormInput
          label='Password'
          inputOptions={{
            type: 'password',
            name: 'password',
            value: password,
            required: true,
            onChange: handleChange,
          }}
        />
        <ButtonContainer>
          <CustomButton type='submit' buttonType='add'>
            SIGN IN
          </CustomButton>
          <CustomButton
            onClick={signInWithGoogle}
            type='button'
            buttonType='add'
          >
            GOOGLE SIGN IN
          </CustomButton>
        </ButtonContainer>
      </form>

      {error && (
        <MessageBanner error={error}>
          <p>{error}</p>
        </MessageBanner>
      )}
    </SignInContainer>
  )
}

export default SignInForm
