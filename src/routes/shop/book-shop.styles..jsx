import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
export const Heading = styled(Link)`
  display: flex;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 3px solid var(--color-primary);
`
export const Sidebar = styled.div`
  width: 100%;
  height: 500px;
  background-color: #fff;
  padding: 15px 10px;
  text-transform: capitalize;

  a {
    color: var(--color-grey-dark);
  }
  h3 {
    font-size: 18px;
    transform: translateY(-3px);
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 10px;

    li {
      border-bottom: 1px solid #f0f0f0;
    }
  }
`

export const BaseLink = styled(Link)`
  font-size: 15px;
  width: 100%;
  display: inline-block;
  line-height: 35px;
  height: 35px;

  font-weight: ${({ active }) => (active ? '700' : '400')};
`

export const ProductsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`
