import styled from 'styled-components/macro'

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 150px;
  grid-template-columns:
    [full-start] 1fr
    [center-start] repeat(10, [col-start] minmax(40px, 144px) [col-end])
    [center-end] 1fr [full-end];

  /* grid-template-columns:
[full-start] 1fr
[center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
[center-end] 1fr [full-end]; */

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
