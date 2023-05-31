import { Container, Content } from "./styles";

import { HeaderClient } from "../../components/HeaderClient";
import { Footer } from "../../components/Footer";

import { TextArea } from "../../components/TextArea";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
import { ButtonWithImage } from "../../components/ButtonWithImage";
import { InputAdmin } from "../../components/InputAdmin";
import { Section } from "../../components/Section";

export function Plate() {

  return(
    <Container>
      <HeaderClient/>
        <Content>

          <h1>Novo Prato</h1>
          <Section
          title="Nome"
          >
          <InputAdmin
          placeholder="Ex.: Salada Ceasar"
          />
          </Section>

          <Section
          title="Nome"
          >
          <InputAdmin
          placeholder="Ex.: Salada Ceasar"
          />
          </Section>
          
          <Section
          title="Nome"
          >
          <InputAdmin
          placeholder="Ex.: Salada Ceasar"
          />
          </Section>

        </Content>
      <Footer/>
    </Container>
  )
}