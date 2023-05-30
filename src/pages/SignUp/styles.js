import styled from "styled-components"



export const Container = styled.div`

  height: 100vh;
  margin: 15.8rem 0.5rem 0;

  display: flex;
  flex-direction: column;
  align-items: center; //Evita que preencha os input horinzontalmente na tela, necessário ajustar o margin
  justify-content: flex-start;

> h1 {
  display: flex;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: clamp(3.6rem, 0.5rem + 5vw, 4.2rem);
  line-height: 4.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  margin-bottom: 7.3rem;
  gap: 1.1rem;

  flex-wrap: wrap;
  justify-content: center;
}

@media (min-width: 770px){

  margin-top: 0;
  display: flex;
  align-items: center;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  > h1{
    gap: 1.9rem;
  }
}
`

export const Form = styled.form`

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

> p {
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1.6rem;
  margin-bottom: 0.8rem;
  left: 0;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};
}

> a {
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;

  display: flex;
  justify-content: center;
  margin-top: 3.2rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
}

@media (min-width: 770px){

  padding: 6.4rem;
  border-radius: 1.6rem;
  border: none;
  background: ${({ theme }) => theme.COLORS.DARK_700};
}
`