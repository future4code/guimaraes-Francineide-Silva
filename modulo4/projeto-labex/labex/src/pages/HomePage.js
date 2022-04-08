import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTripsPage } from "../routes/coordinator";
import { goToAdminHomePage } from "../routes/coordinator";
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
  background-color: rgba(0,0,0,0.5);
  p{
    color:white;
  }
`



const HomePage =() => {

        
    return (

        

        <div >
            <Header/>
            <HomeContainer>
                <tesxtContainer>
                    <p> lua</p>
                    <p>sol </p>
                </tesxtContainer>
            </HomeContainer>
           
       </div>
    )

}

export default HomePage;