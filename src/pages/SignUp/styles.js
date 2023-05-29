import styled from "styled-components"

import polygon from "../../assets/Polygon 1.png";

export const Container = styled.div`
height: 100vh;
display: flex;
justify-content: center;

margin-top: 158px;


`

export const Form = styled.form`

> h1 {
  font-family: 'Roboto';
  font-weight: 700;
  line-height: 44px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  margin-bottom: 73px;
}

> img {
  position: relative;
  background: transparent;
}

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

`

