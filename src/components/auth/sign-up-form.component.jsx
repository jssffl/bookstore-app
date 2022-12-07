import { useState } from 'react'

import FormInput from '../UI/form-input.component'
import CustomButton from '../UI/button.component'
import {
  ButtonContainer,
  MessageBanner,
  SignUpContainer,
} from './sign-up-form.styles'

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'
import { useNavigate } from 'react-router-dom'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password } = formFields
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsloading] = useState(false)
  const navigate = useNavigate()
  const submitHandler = async (e) => {
    e.preventDefault()
    setError(null)
    setIsloading(true)
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })

      setMessage('Signup successfully! Redirect to homepage in 2 second...')
      setFormFields(defaultFormFields)
      setTimeout(() => {
        navigate('/')
      }, 2500)
    } catch (error) {
      setError(error.code)
      switch (error.code) {
        case 'auth/email-already-in-use':
          setMessage('Email already in use!')
          break
        case 'auth/weak-password':
          setMessage('Password should be at least 6 characters!')
          break
        default:
          setMessage('Something went wrong, please try later!')
      }
    } finally {
      setIsloading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <SignUpContainer>
      <h2>Sign up</h2>

      <form onSubmit={submitHandler}>
        <FormInput
          label='Display Name'
          inputOptions={{
            name: 'displayName',
            value: displayName,
            type: 'text',
            required: true,
            onChange: handleChange,
          }}
        />
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
          <CustomButton isLoading={isLoading} buttonType='add'>
            SIGN UP
          </CustomButton>
        </ButtonContainer>
      </form>
      {message && (
        <MessageBanner error={error}>
          <p>{message}</p>
        </MessageBanner>
      )}
    </SignUpContainer>
  )
}

export default SignUpForm
