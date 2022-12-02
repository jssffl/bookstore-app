import { Link } from 'react-router-dom'
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
  width: 140px;
  height: 280px;
  font-size: 14px;
  padding: 5px 10px;

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
    max-height: 100%;
    max-width: 100%;
  }
`

export const InfoWrap = styled.div`
  height: 95px;
  width: 100%;

  /* background-color: #fcfcfc; */
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 13px;

    ${multiEllipsis}
    margin-top: 10px;
    margin-bottom: auto;
  }

  p {
    padding: 2px 0;
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
