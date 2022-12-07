import styled from 'styled-components'

export const TheFooter = styled.footer`
  color: #ddd;
  background-color: #232f3e;
  grid-column: full-start / full-end;
  font-size: 12px;
  padding: 25px 80px;
  display: flex;
  flex-wrap: wrap;
  margin-top: auto;

  a {
    color: #ddd;
  }

  @media screen and (max-width: 900px) {
    padding: 25px 40px;
  }

  @media screen and (max-width: 600px) {
    padding: 30px 5px;
    justify-content: center;
  }
`

export const NavFooterRow = styled.div`
  display: flex;
  width: 80%;
  /* justify-content: center; */

  @media screen and (max-width: 900px) {
    width: 75%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

export const NavFooterCol = styled.div`
  flex: 1;
  h6 {
    font-size: 14px;
    margin-bottom: 5px;
  }

  li {
  }

  a {
    line-height: 23px;
    height: 23px;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`

export const CopyText = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 900px) {
    width: 25%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    flex-direction: row;
    margin-top: 20px;

    img {
      width: 35px;
      height: 35px;
      margin-right: 15px;
      margin-bottom: 0;
    }
  }
`
