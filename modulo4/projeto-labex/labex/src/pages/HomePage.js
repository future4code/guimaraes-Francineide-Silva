import React from "react";
import styled from "styled-components";
import Header from "./Header";

const HomeContainer=styled.div`
 display:flex;
 justify-content:center;
 height:100vh; 
`
const TextContainer=styled.div`
  width: 900px;
  height: 30%;
  margin: 2em;
  padding: 2em;
  text-align:justify;
  border:solid 2px;
  background-color: rgba(0,0,0,0.2);
  p{
    color:white;
  }
`
const TextPrincipal =styled.p `
  display:flex;
 justify-content:center;
 font-family: 'Audiowide', cursive;
 color: black;
 font-size: 40px

`



const HomePage =() => {

        
    return (

        

        <div >
            <Header/>
            <HomeContainer>
                <TextContainer>
                    <TextPrincipal> Venha conhecer a Labex sua primeira agencia espacial </TextPrincipal>
                    
                </TextContainer>
            </HomeContainer>
           
       </div>
    )

}

export default HomePage;