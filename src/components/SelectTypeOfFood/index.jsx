import { useState, useEffect } from "react";
import { Container } from "./styles";


export function SelectTypeOfFood() {
  const [selectedOption, setSelectedOption] = useState('option0');

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    setSelectedOption('option0'); 
  }, []);

  return(
      <Container selectedOption={selectedOption} onChange={handleOptionChange}>
        <option value="option0">Qual categoria de refeição?</option>
        <option value="option1">Café da manhã</option>
        <option value="option2">Brunch</option>
        <option value="option3">Almoço</option>
        <option value="option4">Jantar</option>
        <option value="option5">Sobremesa</option>
      </Container>
  )
}