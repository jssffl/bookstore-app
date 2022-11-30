import { PrimaryBanner, SecondaryBanner } from './promotion-banner.style'
import promotionIcon from '../../assets/promotion-icon.png'

const PromotionBanner = () => {
  return (
    <>
      <PrimaryBanner to='/'>
        Free
        <br /> delivery
      </PrimaryBanner>
      <SecondaryBanner to='/'>
        <img src={promotionIcon} alt='promotion icon' />
        <p>
          Christmas Sales
          <span>Click Here &rarr;</span>
        </p>
      </SecondaryBanner>
    </>
  )
}

export default PromotionBanner
