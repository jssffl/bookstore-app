import styled from 'styled-components/macro'

export const UserMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  a,
  a:visited {
    color: #d0d0d0;
    line-height: 40px;
    padding: 0 10px;
    border-right: 1px solid var(--color-blue-dark);
  }

  a:hover {
    color: #fff;
  }

  @media screen and (max-width: 900px) {
    display: block;

    a,
    a:visited,
    a:hover {
      display: block;
      color: var(--color-grey-dark);
      background-color: #fff;
      border: none;
      border-bottom: 1px solid var(--color-grey-light-1);
    }
  }
`
