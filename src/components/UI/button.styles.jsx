import styled from 'styled-components/macro'

export const BaseButton = styled.button`
  background-color: white;
  /* border: 1px solid #c0c0c0; */
  font-weight: 400;
  color: #696969;
  letter-spacing: 0.2px;
  height: 30px;
  width: 150px;
  border-radius: 6px;
  font-size: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  &:hover {
    /* border: 1px solid var(--color-primary); */
    /* color: var(--color-primary); */
    background-color: #e2e2e2;
  }
`

export const AddButton = styled.button`
  background-color: var(--color-primary);
  border: none;
  font-weight: 600;
  color: white;
  letter-spacing: 0.2px;
  height: 30px;
  width: 150px;
  border-radius: 6px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    /* border: none; */
    background-color: #10bbd5dd;
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
