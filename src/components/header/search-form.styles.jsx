import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  width: 70%;
  height: 44px;
  margin: 5px;
  position: relative;
  align-items: center;

  svg {
    height: 20px;
    width: 20px;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    justify-content: center;
  }
`

export const SearchInput = styled.input`
  height: 100%;
  width: calc(100% - 100px);
  border-radius: 5px;
  border: none;
  padding-left: 40px;
  font-size: 14px;
  transition: all 0.2s;

  &:hover {
    outline: none;
  }

  @media screen and (max-width: 900px) {
    font-size: 10px;
    padding-left: 10px;
    width: 100%;
  }
`
export const SearchButton = styled.button`
  background-color: var(--color-primary);
  color: white;
  height: 100%;
  width: 80px;
  margin-left: 10px;
  border-radius: 5px;
  text-align: center;
  position: relative;

  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    z-index: 1;
  }

  span {
    z-index: 2;
  }

  @media screen and (max-width: 900px) {
    padding: 0;
    margin: 0;
    width: 35px;
    height: 80%;
    border-radius: 10px;
    position: absolute;
    right: 8px;

    span {
      opacity: 0;
    }

    svg {
      opacity: 1;
      z-index: 3;
    }
  }
`
export const SearchLogoContainer = styled.span`
  position: absolute;
  top: 12px;
  left: 10px;
  cursor: pointer;
  z-index: 20;
  transition: all 0.2s;

  svg {
    height: 20px;
    width: 20px;
  }

  &:active {
    transform: translateY(4px);
  }

  @media screen and (max-width: 900px) {
    opacity: 0;
    z-index: -10;
  }
`

export const FilteredBooksContainer = styled.div`
  position: absolute;
  top: 35px;
  font-size: 10px;
  background-color: white;
  border-radius: 3px;
  z-index: 999;
  border: 1px solid var(--color-grey-light-3);
  border-top: none;
  transform: translateY(8px);
  width: calc(100% - 100px);

  p {
    margin-left: 5px;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`

export const FilteredBookContainer = styled.div`
  display: flex;
  height: 75px;
  border-bottom: 1px solid var(--color-grey-light-3);
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`

export const FilteredBookImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 70px;
  padding: 5px 10px;

  img {
    width: 100%;
  }
`

export const FilteredBookDetail = styled.div`
  padding: 8px 8px 8px 0;
  width: 80%;
  min-width: 100px;

  h6 {
    margin: 0 0 5px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    margin: 0;
  }
`

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`
