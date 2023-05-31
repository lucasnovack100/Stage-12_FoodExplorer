import styled from "styled-components";

export const Container = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  padding: 11px 0 35px;

  border: none;
  border-radius: 5px;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  align-items: center;
  gap: 7.5px;


  img{
    height: 15px;
    width: 8.3px;
  }

`;