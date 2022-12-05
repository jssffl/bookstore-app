import styled from 'styled-components/macro'

export const multiEllipsis = `
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`

export const singleEllipsis = `
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`
export const BookCardWrap = styled.div`
  display: block;
  width: 140px;
  height: 280px;
  font-size: 14px;
  padding: 5px 10px;
  color: #444;

  button {
    width: 100%;
    border-radius: 10px;
    margin-top: 5px;
  }
`

export const ImgWrap = styled.div`
  height: 140px;
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    height: 100%;
    width: 100%;
  }
`

export const InfoWrap = styled.div`
  height: 95px;
  width: 100%;

  /* background-color: #fcfcfc; */
  display: flex;
  flex-direction: column;

  h3 {
    margin-top: 10px;
    margin-bottom: auto;
  }

  p {
    padding: 2px 0;
  }

  a,
  a:visited {
    color: #444;

    font-size: 13px;

    ${multiEllipsis}
  }

  a:hover {
    text-decoration: underline;
  }
`

export const AuthorWrap = styled.p`
  font-size: 10px;
  ${singleEllipsis}
`

export const PriceWrap = styled.p`
  color: #ff0072;
  font-weight: 400;
  font-size: 15px;
`
