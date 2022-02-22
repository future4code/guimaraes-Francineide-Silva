import React from "react";
import styled from "styled-components";


export default function AlternativasForm (props){

    return (

        <div>
            <p> {props.perguntas}</p>
            <select>
            {props.opcoes.map(opcao => (
          <option value={opcao}>{opcao}</option>
        ))}
            </select>
        </div>
    )
}