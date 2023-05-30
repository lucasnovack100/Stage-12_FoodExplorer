import { Container, Form } from "./styles";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { FiMail, FiLock, FiUser } from "react-icons/fi";


export function SignUp() {

  return(
    <Container>
      
      <h1><img src="../../../src/assets/Polygon 1.png" alt="" /> Food Explorer</h1>

      <Form>
      <p>Nome Completo</p>
        <Input 
        type="text" 
        placeholder="Maria da Silva" 
        icon={FiUser}
        />

      <p>Email</p>
        <Input 
        type="email" 
        placeholder="exemplo@exemplo.com.br" 
        icon={FiMail}
        />
        
        <p>Senha</p>
        <Input 
        type="password" 
        placeholder="No mínimo 6 caracteres" 
        icon={FiLock}
        />

        <Button
        title="Criar conta"
        />

        <a href="/#">já tenho uma conta</a>

      </Form>
    </Container>
  );
}