import { Container, Content } from "./styles";

import { HeaderClient } from "../../components/HeaderClient";
import { Footer } from "../../components/Footer";

import { TextArea } from "../../components/TextArea";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
import { ButtonWithImage } from "../../components/ButtonWithImage";
import { InputAdmin } from "../../components/InputAdmin";
import { Section } from "../../components/Section";
import { ButtonTextBack } from "../../components/ButtonTextBack";
import { Button } from "../../components/Button";
import { InputImagePlate } from "../../components/InputImagePlate";


import { SelectTypeOfFood } from "../../components/SelectTypeOfFood";

export function NewPlate() {

  return(
    <Container>
      <HeaderClient/>
        <Content>

          <ButtonTextBack
          imgSrc={"../../../src/assets/Icons/CaretLeft.png"}
          alt="Seta a esquerda"
          title="Voltar"
          />

          <h2>Novo Prato</h2>
          
              <Section
              title="Imagem do prato"
              >
              <InputImagePlate
              
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
          title="Categoria"
          >
          <SelectTypeOfFood/>
          </Section>

          <Section
          title="Ingredientes"
          >
          <InputAdmin
          placeholder="Ex.: Salada Ceasar"
          />
          </Section>

          <Section
          title="Preço"
          >
          <InputAdmin
          placeholder="R$ 00,00"
          />
          </Section>

          <Section
          title="Descrição"
          >
          <TextArea
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          />
          </Section>

          <Button 
          className="Button"
          title="Salvar alterações"
          />

        </Content>
      <Footer/>
    </Container>
  )
}