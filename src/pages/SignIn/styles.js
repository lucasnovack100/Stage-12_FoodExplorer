import styled from "styled-components"
import { mediaQueries } from "../../components/mediaQueries";

export const Container = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

margin-top: 158px;


> h1 {
  display: flex;
  font-family: 'Roboto';
  font-weight: 700;
  line-height: 44px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  margin-bottom: 73px;

  
}

${mediaQueries("md")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  
`}

`;
export const Form = styled.form`

> p {
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;

  margin-bottom: 8px;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};
}

> a {
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  display: flex;
  justify-content: center;
  margin-top: 32px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
}

${mediaQueries("md")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  border: 2px solid blue
`}
//Forma que está atualmente é que quando fica assim ta aplicando ao mobile ao inves do desktop
`