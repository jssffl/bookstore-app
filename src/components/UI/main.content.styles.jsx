import styled from 'styled-components/macro'

export const MainContentWrap = styled.div`
  grid-column: col-start 3 / center-end;
  padding: 10px 20px 10px 10px;

  @media screen and (max-width: 1000px) {
    grid-column: col-start 4 / center-end;
  }
`
