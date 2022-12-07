import styled from 'styled-components/macro'

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  ::after {
    content: '';
    display: block;
    background: ${({ isMenuOpen }) => (isMenuOpen ? '#000' : 'transparent')};
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? '0.3' : '0')};
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: ${({ isMenuOpen }) => (isMenuOpen ? '950' : '-1')};
  }
`

export const ContentWrap = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding: 10px;
  display: flex;

  @media screen and (max-width: 1440px) {
    width: 100%;
  }

  @media screen and (max-width: 700px) {
    flex-wrap: wrap;
    padding: 0px;
  }
`
