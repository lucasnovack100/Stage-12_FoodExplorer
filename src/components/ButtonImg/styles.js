import styled from 'styled-components';

export const Container = styled.button`
    background: none;
    color: ${({ theme, isActive }) => isActive ? theme.COLORS.TOMATO_100 : theme.COLORS.TOMATO_200};

    border: none;
    font-size: 16px;
`;