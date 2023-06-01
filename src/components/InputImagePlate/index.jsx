import { Container } from "./styles";

export function InputImagePlate({icon: Icon, ...rest}) {
  return(
    <Container>
      {Icon && <Icon size={20}/>}
      <input 
      placeholder="Selecione uma imagem"
      id="avatar"
      type="file"
      {...rest}/>
    </Container>
  )
}