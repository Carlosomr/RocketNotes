import { Container } from "./styles";
import { Button } from "./../../components/Button";
import{ Header } from "./../../components/Header";
import { Section } from "../../components/Section";

export function Details() {
  return (

    <Container>
     <Header/>
     <Section title="Links úteis">
          <li>
            <a href="#">https://rocketseat.com.br</a>
          </li>
          <li>
            <a href="#">https://rocketseat.com.br</a>
          </li>
      </Section>

      <Section title="Marcadores">
        
      </Section>
    <Button title= "Voltar"/>

    </Container>
   
   
    
  )
}


