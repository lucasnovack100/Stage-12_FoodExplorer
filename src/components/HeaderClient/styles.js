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
`

export const Receipt = styled.button`
  border: none;
  background: none;
  display: flex;
`

