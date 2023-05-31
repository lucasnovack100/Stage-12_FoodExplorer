import { Container } from "./styles";

export function ButtonWithImage({ title, imgSrc, alt, isActive = false, ...rest}) {
  return(
    <Container 
    type="button"
    imgSrc
    alt
    isActive={isActive} 
    {...rest}
    >
      <img src={imgSrc} alt={alt} />
      {title}
    </Container>
  );
};