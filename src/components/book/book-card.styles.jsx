import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const multiEllipsis = `
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`

export const BookCardWrap = styled.div`
  width: 181px;
  height: 280px;
  background-color: #f8f8f9;
  font-size: 14px;
  padding: 5px 10px;
  z-index: 1;
  margin: 0px 5px 5px 0;

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
    z-index: 2;
  }
`

export const InfoWrap = styled.div`
  height: 90px;
  width: 100%;

  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 13px;

    ${multiEllipsis}
    margin-top: 5px;
    margin-bottom: auto;
  }

  p {
    padding: 0;
  }
`

export const AuthorWrap = styled.p`
  font-size: 10px;
`

export const PriceWrap = styled.p`
  color: #ff0072;
  font-weight: 400;
  font-size: 16px;
`
