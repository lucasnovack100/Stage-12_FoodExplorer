import styled from "styled-components";

export const Container = styled.select`

width: 100%;
height: 4.8rem;

padding: 1.6rem;

display: flex;
align-items: center;

background-color: ${({theme}) => theme.COLORS.DARK_900};
color: ${({theme}) => theme.COLORS.LIGHT_400};

font-size: 1.4rem;
font-family: 'Roboto';
font-weight: 400;

border: none;
border-radius: 0.8rem;

appearance: none;
-webkit-appearance: none;

background-image: url("../../../src/assets/Icons/chevron-down.png");
background-repeat: no-repeat;
background-position: right 1.6rem top 50%;

//Troca de cor quando selecionado
background-color:${({ theme, selectedOption }) => selectedOption === 'option0' ? theme.COLORS.DARK_800 : theme.COLORS.DARK_900};
color: ${({ theme, selectedOption }) => selectedOption === 'option0' ? theme.COLORS.LIGHT_400 : theme.COLORS.LIGHT_100};

`;