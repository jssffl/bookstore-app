import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import {
//   googleSignInStart,
//   emailSignInStart,
// } from '../../store/user/user.action'
import FormInput from '../UI/form-input.component'
import CustomButton from '../UI/button.component'
import {
  ButtonContainer,
  SignInContainer,
  MessageBanner,
} from './sign-in-form.styles'
// import { selectUserError } from '../../store/user/user.selector'

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

  // const dispatch = useDispatch()
  const navigate = useNavigate()
  const resetFormField = () => {
    setFormFields(defaultFormFields)
  }

  // let error = useSelector(selectUserError)

  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      const user = await signInAuthUserWithEmailAndPassword(email, password)

      // dispatch(emailSignInStart(email, password))
      resetFormField()
      navigate('/')

      setFormFields(defaultFormFields)
    } catch (error) {
      console.log('user sign in failed', error)

      switch (error.code) {
        case 'auth/wrong-password':
          setError('Incorrent  Email or password ')
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
    const response = await signInWithGooglePopup()
    console.log(response)
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
