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
        <div>
          Christmas Sales
          <span>Click Here &rarr;</span>
        </div>
      </SecondaryBanner>
    </>
  )
}

export default PromotionBanner
