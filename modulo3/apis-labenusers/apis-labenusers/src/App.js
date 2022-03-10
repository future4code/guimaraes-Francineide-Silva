import React from 'react';
import Cadastro from './components/cadastro';
import Usuario from './components/usuario';
import Styled from 'styled-components';


const cardPrincipal =Styled.div`



`


 class App extends React.Component {


  state = {
    tela: "cadastro"
  }

  selecioneTela = () => {
    switch(this.state.tela){
       case "cadastro":
         return <Cadastro irParaLista={this.irParaLista} />
        case "lista":
          return <Usuario irParaCadastro={this.irParaCadastro}/>
        default:
          return <p>ERROR -TENTE NOVAMENTE</p>
    }
  }

  irParaCadastro = () => {
    this.setState({tela: "cadastro"})
  }

  irParaLista = () => {
    this.setState({tela: "lista"})
  }


  render(){
  return (
    <div >
      {this.selecioneTela()}
    </div>
  );
  }
}

export default App;


