import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { goToLoginPage } from '../routes/coordinator'
import { goToListTripsPage } from '../routes/coordinator'
import { goToHomePage } from '../routes/coordinator'


const HeaderContainer=styled.div`
display:flex;
justify-content: space-around;
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

const Header=() =>{

  const navigate = useNavigate()



  return (
    < HeaderContainer>
      <p>LabeX</p>
        <ButtonHeader onClick={()=> goToHomePage (navigate)}> Home </ButtonHeader>
        <ButtonHeader onClick={() => goToListTripsPage (navigate)}> viaje com a gente</ButtonHeader>
        <ButtonHeader onClick={() => goToLoginPage(navigate)}> Fazer Login</ButtonHeader>
    </ HeaderContainer>
  );
}

export default Header;