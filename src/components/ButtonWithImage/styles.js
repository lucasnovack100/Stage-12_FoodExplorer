import styled from "styled-components";

export const Container = styled.button`
  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  padding: 10px 44px;

  border: none;
  border-radius: 5px;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  display: flex;
  align-items: center;
  gap: 7.5px;

  img{
    height: 14.8px;
    width: 17.58px;


  }

`;