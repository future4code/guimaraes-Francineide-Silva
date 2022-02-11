import React from "react";
import styled from "styled-components";
import AlternativasForm from "./AlternativasForm";
import PerguntasForm from "./PerguntasForm";



export default class Etapa3 extends React.Component {
    render() {
      return (
        <div>
          <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
          <PerguntasForm
            pergunta={"5. Por Que Você Não Terminou um Curso de Graduação?"}
          />
          <AlternativasForm
            pergunta={"6. Você Fez Algum Curso Complementar?"}
            opcoes={["Nenhum","Curso de inglês","Curso técnico"]}
          />
        </div>
      );
    }
  }
  

  