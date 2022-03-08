import React from 'react';
import styled from 'styled-components';


const ContainerPrincipal = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;


`

const CardImagem = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;


`
const TextoCard = styled.h4 `
   margin-bottom: 15px;

`

const ContainerSecundario = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start


`


function CardGrande(props) {
    return (
        <ContainerPrincipal className="bigcard-container">
            <CardImagem src={ props.imagem } />
            <ContainerSecundario>
                <TextoCard>{ props.nome }</TextoCard>
                <TextoCard>{ props.descricao }</TextoCard>
            </ContainerSecundario>
        </ContainerPrincipal>
    )
}

export default CardGrande;