import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { signUpStart } from '../../store/user/user.action'
import FormInput from '../UI/form-input.component'
import CustomButton from '../UI/button.component'
import {
  ButtonContainer,
  MessageBanner,
  SignUpContainer,
} from './sign-up-form.styles'

// import { useNavigate } from 'react-router-dom'
// import {
//   selectCurrentUser,
//   selectUserError,
// } from '../../store/user/user.selector'

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'
import { useEffect } from 'react'
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password } = formFields
  // const dispatch = useDispatch()
  // const error = useSelector(selectUserError)

  // const [message, setMessage] = useState(null)

  const submitHandler = async (e) => {
    e.preventDefault()

    const { user } = await createAuthUserWithEmailAndPassword(email, password)
    const userSnapShot = await createUserDocumentFromAuth(user, {
      user,
      displayName,
    })
    console.log(userSnapShot)
    // try {
    //   dispatch(signUpStart(email, password, displayName))
    //   setFormFields(defaultFormFields)
    //   setMessage('Signup successfully!')
    // } catch (error) {
    //   console.log(error.code)
    //   if (error.code === 'auth/email-already-in-use') {
    //     setMessage('Email already in use!')
    //   } else if (
    //     error.code ===
    //     'Password should be at least 6 characters (auth/weak-password).'
    //   ) {
    //     setMessage('Password should be at least 6 characters!')
    //   } else {
    //     setMessage('Something went wrong, please try later!')
    //   }
    // }
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

      {/* {message && (
        <MessageBanner error={error}>
          <p>{message}</p>
        </MessageBanner>
      )} */}
    </SignUpContainer>
  )
}

export default SignUpForm
