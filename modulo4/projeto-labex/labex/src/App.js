import React from 'react';
import Routes from './routes/Routes';
import styled from "styled-components";
import galaxia from './img/galaxia-roxa.jpg';


const AppContainer=styled.div`
bottom: 0px;
margin:0px;
width:100vw;
height:100%;
background-image: url(${galaxia});
background-repeat: no-repeat;
background-size:cover;
`

function App() {


  return (

    <AppContainer>

      <Routes/>

    </AppContainer>
   
    
  );
}

export default App;
