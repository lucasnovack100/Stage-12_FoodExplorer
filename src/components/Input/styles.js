import styled from "styled-components";

export const Container = styled.div`

width: 100%;

display: flex;
align-items: center;

background-color: ${({theme}) => theme.COLORS.DARK_900};//placeholder
color: ${({theme}) => theme.COLORS.LIGHT_500};//placeholder

margin-bottom: 3.2rem;
border-radius: 0.8rem;

> input {
  height: 4.8rem;
  width: 100%;

  padding: 1.2rem;

  color: ${({theme}) => theme.COLORS.LIGHT_100};//text
  background: transparent;//text
  border: 0;//text

  &:placeholder {
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }
}

> svg {
  margin-left: 1.6rem;
}
`;

