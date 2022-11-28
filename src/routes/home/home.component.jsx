import {
  MainContent,
  SideBar,
  BlockWrap,
  BannerWrap,
  SubBannerWrap,
  PanelWrap,
} from './home.styles'
import featuredImg from '../../assets/christmas.webp'

const Home = () => {
  return (
    <>
      <SideBar>
        <BlockWrap>Newsletter</BlockWrap>
        <BlockWrap>BLOG</BlockWrap>
      </SideBar>
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
