import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content"
  "footer"
  `;

  export const Content = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 32px;

  > h2{
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 32px;
  
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .Button {
    opacity: 0.8;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};

    margin: 24px auto 53px
  }

  `;