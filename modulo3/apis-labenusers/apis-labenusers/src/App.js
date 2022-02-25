import React from 'react';
import axios from 'axios';
import Cadastro from './components/cadastro';
import Usuario from './components/usuario';

export default class App extends React.Component {

  

  componentDidMount() {
    this.getAllUsers();
  };

  
 
  render() {

    const cadastroComponents = this.state.usuarios.map((usuario) => {
      
      return <li key={usuario.id}> {usuario.name} {usuario.email}</li>;
    });

    return (

      <Router>
      <div className="App">
        <link to ={'/cadastro'}>Cadastro</link>
        <link to={'/usuario'}>Usuario</link>
        <Route path = '/cadastro' render ={()=> {
          <Cadastro
          onChangeInputUsuario = { this.onChangeInputUsuario.bind(this)}
          onChangeInputEmail = {this.onChangeInputEmail.bind(this)}
          createCadastro ={this.createCadastro.bind(this)}
          />

        }}
        />
        <Route path= '/Usuario' render ={()=>(
        <Usuario
        cadastroComponent = {cadastroComponents}
        />
        
        )} />
        


        
      </div>
      </Router >
    );

  }
  
}


