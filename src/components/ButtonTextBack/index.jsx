import { Container } from "./styles";

export function ButtonTextBack({ title, imgSrc, alt, isActive = false, ...rest}) {
  return(
    <Container 
    type="button"
    imgSrc={imgSrc}
    alt={alt}
    isActive={isActive} 
    {...rest}
    >
      <img src={imgSrc} alt={alt} />
      {title}
    </Container>
  );
};