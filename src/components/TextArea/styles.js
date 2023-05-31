import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 172px;

  background: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  padding: 14px;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;

  resize: none;
  border: none;
  border-radius: 8px;

  &::placeholder{
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;