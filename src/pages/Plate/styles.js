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
  align-items:center;
  justify-content: center;

  `;