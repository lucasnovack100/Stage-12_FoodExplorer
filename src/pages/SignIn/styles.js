import styled, {css} from "styled-components"
import { mediaQueries } from "../../components/mediaQueries";


export const Container = styled.div`
height: 100vh;

  margin-top: 158px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;


> h1 {
  display: flex;
  font-family: 'Roboto';
  font-weight: 700;
  line-height: 44px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  margin-bottom: 73px;
  gap: 11px
  
}

@media (min-width: 770px){

  margin-top: 0;
  display: flex;
  align-items: center;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  > h1{
    gap: 19px;
  }
}

`;
export const Form = styled.form`

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  


> p {
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 8px;
  left: 0;

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


@media (min-width: 770px){

  padding: 64px;
  border-radius: 16px;
  border: none;
  background: ${({ theme }) => theme.COLORS.DARK_700};

}
`