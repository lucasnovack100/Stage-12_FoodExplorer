import styled from "styled-components";

export const Container = styled.span`
display: flex;
align-items: center;
justify-content: center;

font-family: 'Poppins';
font-weight: 500;
font-size: 14px;
line-height: 24px;


padding: 4px 8px;

border-radius: 5px;

background-color: ${({ theme }) => theme.COLORS.DARK_1000};
color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;