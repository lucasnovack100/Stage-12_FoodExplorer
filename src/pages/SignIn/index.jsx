import { Container, Form } from "./styles";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

import { FiMail, FiLock } from "react-icons/fi";




export function SignIn() {

  return(
    <Container>
      
    <Form>

    <img src="../../assets/Mask group-10.png" alt="" />
    <h1>Food Explorerrrrrr</h1>

    <label>Email</label>
      <Input 
      type="text" 
      placeholder="exemplo@exemplo.com.br" 
      icon={FiMail}
      />
      <label>Senha</label>
      <Input 
      type="text" 
      placeholder="No mínimo 6 caracteres" 
      icon={FiLock}
      />

      
      <Button
      title="Entrar"
      
      />

    <h2>Criar uma conta</h2>


    </Form>
    </Container>
  );
}