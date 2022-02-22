import { render } from "@testing-library/react";
import React from "react";
import styled from "styled-components";
import PerguntasForm from "./PerguntasForm";
import AlternativasForm from "./AlternativasForm";





export default class Etapa1 extends React.Component {
    
          render() {
    return (
      <div>
        <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
        <PerguntasForm pergunta={"5. Qual Curso?"} />
        <PerguntasForm pergunta={"6. Qual a Unidade de Ensino?"} />
      </div>
    );
  }
}
      