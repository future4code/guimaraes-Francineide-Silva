import React from "react";
import styled from "styled-components";



const CardPrincipal = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 30px 20px;
    margin-bottom: 10px;
    height: 100px;



`

const ImagemPrincipal = styled.img `
    width: 70px;
    margin-right: 20px;
    border-radius: 50%;


`

const CardSecundario = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;


`

const CardTexto = styled.h4 `
    margin-bottom: 20px;

`




function CardPequeno(props) {
    return (
        <CardPrincipal className="principal">
            <ImagemPrincipal src={ props.imagem } />
            <CardSecundario>
                <CardTexto>{ props.nome }</CardTexto>
                <CardTexto>{ props.telefone }</CardTexto>
            </CardSecundario>
        </CardPrincipal>
    )
}

export default CardPequeno;