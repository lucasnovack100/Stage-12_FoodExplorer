import styled from "styled-components";

export const Container = styled.div`
width: 100%;

display: flex;
align-items: center;

background-color: ${({theme}) => theme.COLORS.DARK_900};//placeholder
color: ${({theme}) => theme.COLORS.LIGHT_500};//placeholder

margin-bottom: 32px;
border-radius: 8px;

> input {
  height: 48px;
  width: 100%;

  padding: 12px;

  color: ${({theme}) => theme.COLORS.LIGHT_100};//text
  background: transparent;//text
  border: 0;//text

  &:placeholder {
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }
}
> svg {
  margin-left: 16px;
}
`;

