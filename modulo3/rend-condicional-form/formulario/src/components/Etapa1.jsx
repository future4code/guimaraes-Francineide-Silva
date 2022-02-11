import React from "react";
import styled from "styled-components";
import PerguntasForm from "./PerguntasForm";
import AlternativasForm from "./AlternativasForm";



export default class Etapa1 extends React.Component{

    
        render() {
          return (
            <div>
              <h2>ETAPA 1 - DADOS GERAIS</h2>
              <PerguntasForm pergunta={"1. Qual o Seu Nome?"} />
              <PerguntasForm pergunta={"2. Qual Sua Idade?"} />
              <PerguntasForm pergunta={"3. Qual Seu E-mail?"} />
              <AlternativasForm
                pergunta={"4. Qual a Sua Escolaridade?"}
                opcoes={[
                  "Ensino Médio Incompleto",
                  "Ensino Médio Completo",
                  "Ensino Superior Incompleto",
                  "Ensino Superior Completo"
                ]}
              />
            </div>
          );
        }
      }
