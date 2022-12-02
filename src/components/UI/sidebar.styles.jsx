import styled from 'styled-components/macro'

// export const SideBar = styled.div`
//   grid-column: center-start / span 2;
//   background-color: #fff;
//   min-height: 100vh;
//   margin-right: 10px;
// `

export const SideBar = styled.div`
  grid-column: center-start/ span 2;
  padding: 10px 0 10px 20px;

  @media screen and (max-width: 1000px) {
    grid-column: center-start/ span 3;
  }
`
