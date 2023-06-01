import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  height: 114px;
  width: 100%;

  background-color: ${({theme}) => theme.COLORS.DARK_700};

  display: flex;
  justify-content: space-between;
  padding: 56px 28px 0;

  > h1{
    display: flex;
    font-size: 21px;

    img{ 
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }

  @media (min-width: 770px){
    
  }

`
export const Menu = styled.ul`
  border: none;
  background: none;

  cursor: pointer;
`

export const Receipt = styled.button`
  border: none;
  background: none;
  display: flex;

  position: relative;

  .receipt_status{
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    width: 20px;
    height: 20px;
    border-radius: 50%;

    position: absolute;
    top: -9px;
    right: -9px;

    font-family: 'Poppins';
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

  }

`

