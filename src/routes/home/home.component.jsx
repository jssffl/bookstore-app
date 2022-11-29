import { BlockWrap, BannerWrap, SubBannerWrap, PanelWrap } from './home.styles'
import featuredImg from '../../assets/christmas.webp'
import BaseSideBar from '../../components/UI/base-sidebar.component'
import MainContent from '../../components/UI/main-content.component'
const Home = () => {
  return (
    <>
      <BaseSideBar>
        <BlockWrap>Newsletter</BlockWrap>
        <BlockWrap>BLOG</BlockWrap>
      </BaseSideBar>
      <MainContent>
        <BannerWrap>
          <a href='#'>
            <img src={featuredImg} alt='featured banner' />
          </a>
        </BannerWrap>
        <SubBannerWrap>What's Hot</SubBannerWrap>
        <PanelWrap>Bestselling Books</PanelWrap>
        <PanelWrap>News release</PanelWrap>
      </MainContent>
    </>
  )
}
export default Home
