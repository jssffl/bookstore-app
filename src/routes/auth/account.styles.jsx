import styled from 'styled-components/macro'

export const AccountWrap = styled.div`
  background-color: #fff;

  padding: 30px 20px;
  grid-column: center-start/ center-end;
  margin: 20px auto;
  width: 900px;
  height: 400px;

  h2 {
    width: 100%;
    height: 30px;
    font-size: 22px;
    margin-left: 10px;
    margin-bottom: 15px;
  }

  a {
    color: #444;
  }

  @media screen and (max-width: 900px) {
    width: 95%;
  }

  @media screen and (max-width: 700px) {
    height: auto;

    padding-bottom: 10px;

    h2 {
      font-size: 20px;
    }
  }
`

export const AccountColWrap = styled.div`
  flex: 1;
  border: 1px solid var(--color-grey-light-3);
  border-radius: 8px;
  margin: 10px;
  overflow: hidden;

  h3 {
    text-align: center;
    padding: 15px 0;
    background-color: #ddd;
    border-radius: 8px 8px 0 0;
  }

  li:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-light-1);
  }
  a {
    display: inline-block;
    font-size: 16px;
    padding: 15px;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 0px;
    margin-bottom: 40px;

    h3 {
      font-size: 16px;
      padding: 12px 0;
    }

    a {
      font-size: 14px;
      padding: 10px 15px;
    }
  }
`

export const AccountRowWrap = styled.div`
  display: flex;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`
