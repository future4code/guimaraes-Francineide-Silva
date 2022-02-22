import React from 'react';
import styled from 'styled-components';
import AlternativasForm from './AlternativasForm';



export default function PerguntasForm(props) {

    return (
      <div>
        <p>{props.pergunta}</p>
        <input onChange={props.onChange} value={props.value} />
      </div>
    );
  }