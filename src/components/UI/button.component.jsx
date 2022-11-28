import { AddButton, BaseButton, LoadingSpinner } from '../UI/button.styles'

const BUTTON_TYPES_ClASSES = {
  base: 'base',
  add: 'add',
}

const getButton = (buttonType = BUTTON_TYPES_ClASSES.base) =>
  ({
    [BUTTON_TYPES_ClASSES.base]: BaseButton,
    [BUTTON_TYPES_ClASSES.add]: AddButton,
  }[buttonType])

const CustomButton = ({
  children,
  buttonType,
  isLoading = false,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType)

  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <LoadingSpinner /> : children}
    </CustomButton>
  )
}

export default CustomButton
