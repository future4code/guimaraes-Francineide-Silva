import './App.css';
import React from 'react';
import styled from 'styled-components';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import PerguntasForm from './components/PerguntasForm';
import AlternativasForm from './components/AlternativasForm';





export default class App extends React.Component {

  state ={
    etapa : 1

  }

  renderizarEtapa =() =>{

    switch(this.state.etapa){
      case 1:
        return <Etapa1/>
        
      case 2:
          return <Etapa2/>
          
      case 3:
        return <Etapa3/>
        
      case 4:
        return <Final/>

      default:
        return <Final/>    

    }

  }

  proximaEtapa =() =>{
    this.setState({etapa : this.state.etapa + 1})
  }
   
  render(){
    
    return (

      <div className="App">

        
        {this.renderizarEtapa()}
        <hr/>
        {this.state.etapa !== 4 && (<button onClick={this.proximaEtapa}>Proxima Etapa</button>)}
      
        
      </div>
    );

  }
  
}

