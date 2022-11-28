import styled from 'styled-components/macro'

export const BaseButton = styled.button`
  background-color: white;
  border: 1px solid #c0c0c0;
  border-radius: 20px;
  font-size: 10px;
  cursor: pointer;
  letter-spacing: 0.2px;
  font-weight: 400;
  color: #696969;
  width: 130px;
  height: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border: 1px solid var(--color-primary);
    color: var(--color--primary);
  }
`

export const AddButton = styled.button`
  background-color: var(--color-primary);
  border: none;
  font-weight: 600;
  color: white;
  height: 35px;
  width: 150px;
  border-radius: 8px;

  font-size: 12px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    /* border: none; */
    /* background-color: #10bbd5; */
  }
`

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
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
