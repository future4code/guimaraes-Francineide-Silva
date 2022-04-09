import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { goToCreateTripPage } from "../routes/coordinator";
import { goToHomePage } from "../routes/coordinator";

const HeaderContainer=styled.div`
display:flex;
justify-content: center;
p{
  color:white;
  font-size: 100px;
  font-family: 'Audiowide', cursive;
  }
`
const ButtonHeader=styled.button`
background-color: black;
height:70px;
margin-top:1.5em;
color:white;
padding:0.5em;
font-family: 'Audiowide', cursive;
border-radius:30px;   
font-size: 20px;
`




const AdmHeader =() => {

    const navigate = useNavigate()

    const logout = () => {
        window.localStorage.clear();
        navigate("/")

        
      }

    return (

        < HeaderContainer>
      <p>LabeX</p>
        <ButtonHeader onClick={() => goToHomePage (navigate)}> Home </ButtonHeader>
        <ButtonHeader onClick={() => goToCreateTripPage(navigate)}> Criar Viagens</ButtonHeader>
        <ButtonHeader onClick={logout}> Fazer Logout</ButtonHeader>
    </ HeaderContainer>
    )

}

export default AdmHeader;