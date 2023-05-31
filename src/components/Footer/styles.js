import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;
  height: 7.7rem;
  width: 100%;

  background-color: ${({theme}) => theme.COLORS.DARK_700};
  color: ${({theme}) => theme.COLORS.LIGHT_700};

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: auto;
  padding: 0 clamp(2.7rem, 1rem + 4vw, 4.85rem);

> h1{
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  //font-size: clamp(1.6rem, 0.9rem + 1.3vw, 2.4rem);
  img{ 
    width: 2.2rem;
    height: 1.8rem;
    margin-right: 0.65rem;
    
  }
}

label {
  font-size: 1.2rem;
  color: ${({theme}) => theme.COLORS.LIGHT_200};
}

@media (min-width: 770px){
  padding: 0 clamp(4.85rem, 4rem + 6vw, 12.3rem);

>h1{
  font-size: 2.4rem;

  img{ 
    width: 3.0rem;
    height: 3.0rem;
    margin-right: 1.0rem;
  }
}

label{
  font-size: 1.4rem;
}
}
`


