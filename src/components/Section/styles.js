import styled from "styled-components";

export const Container = styled.section`
margin-top: 24px;
margin-bottom: 0;



> h2{
  margin-bottom: 16px;

  font-size: 16px;

  font-family: 'Roboto';
  font-weight: 400;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};
}
`;