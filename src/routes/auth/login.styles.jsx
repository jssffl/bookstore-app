import styled from 'styled-components/macro'

export const AuthWrap = styled.div`
  grid-column: center-start / center-end;
  width: 900px;
  height: 500px;
  margin: 20px auto;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-around;
  background-color: #fff;
  padding: 20px 0 30px;

  @media screen and (max-width: 900px) {
    width: 95%;
    padding: 20px 0 30px;
  }

  @media screen and (max-width: 700px) {
    background-color: transparent;
    flex-direction: column;
    align-items: center;

    box-shadow: none;
    border-radius: none;
    padding: 0;

    height: auto;
  }
`
