import {
  PrimaryBanner,
  SecondaryBanner,
  PromotionBannerWrap,
} from './promotion-banner.style'
import promotionIcon from '../../assets/promotion-icon.png'

const PromotionBanner = () => {
  return (
    <PromotionBannerWrap>
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
    </PromotionBannerWrap>
  )
}

export default PromotionBanner
