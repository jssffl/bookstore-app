import { SpinnerContainer, SpinnerOverlay } from './spinner.styles'

const Spinner = (props) => (
  <SpinnerOverlay fullWidth={props.fullWidth}>
    <SpinnerContainer />
  </SpinnerOverlay>
)

export default Spinner
