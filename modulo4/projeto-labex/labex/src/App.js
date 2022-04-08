import React from 'react';
import Routes from './routes/Routes';
import styled from "styled-components"
import spaceship from './img/spaceship-3827533_1920.jpg'


const AppContainer=styled.div`
bottom: 0px;
margin:0px;
width:100vw;
height:100%;
background-image: url(${spaceship});
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
