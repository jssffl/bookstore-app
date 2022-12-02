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

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password } = formFields

  const [message, setMessage] = useState(null)

  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })
      setMessage('Signup successfully!')

      setFormFields(defaultFormFields)
    } catch (error) {
      console.log(error.code)

      switch (error.code) {
        case 'auth/email-already-in-use':
          setMessage('Email already in use!')
          break
        case 'Password should be at least 6 characters (auth/weak-password).':
          setMessage('Password should be at least 6 characters!')
          break
        default:
          setMessage('Something went wrong, please try later!')
      }
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
          <CustomButton buttonType='add'>SIGN UP</CustomButton>
        </ButtonContainer>
      </form>
      {message && (
        <MessageBanner error={message}>
          <p>{message}</p>
        </MessageBanner>
      )}
    </SignUpContainer>
  )
}

export default SignUpForm
