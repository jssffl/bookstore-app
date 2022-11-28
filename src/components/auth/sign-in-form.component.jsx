import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import {
//   googleSignInStart,
//   emailSignInStart,
// } from '../../store/user/user.action'
import FormInput from '../UI/form-input.component'
import CustomButton from '../UI/button.component'
import { ButtonContainer, SignInContainer } from './sign-in-form.styles'
// import { selectUserError } from '../../store/user/user.selector'

import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields
  // const dispatch = useDispatch()
  // const navigate = useNavigate()
  const resetFormField = () => {
    setFormFields(defaultFormFields)
  }

  // let error = useSelector(selectUserError)

  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      const user = await signInAuthUserWithEmailAndPassword(email, password)
      console.log(user)
      // dispatch(emailSignInStart(email, password))
      // resetFormField()
      // navigate('/')
    } catch (error) {
      console.log('user sign in failed', error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
  }

  // const signInWithGoogle = () => {
  //   dispatch(googleSignInStart())
  //   navigate('/shop')
  // }

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
            // onClick={signInWithGoogle}
            type='button'
            buttonType='add'
          >
            GOOGLE SIGN IN
          </CustomButton>
        </ButtonContainer>
      </form>
    </SignInContainer>
  )
}

export default SignInForm
