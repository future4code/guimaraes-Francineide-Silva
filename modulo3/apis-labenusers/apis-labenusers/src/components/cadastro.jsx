import React from "react";
import axios from "axios";



 class Cadastro extends React.Component {
    state = {
      nome: "",
      email: "",
    };
  
    novoNome = (event) => {
      this.setState({ nome: event.target.value });
    };
  
    novoEmail = (event) => {
      this.setState({ email: event.target.value });
    };
  
    criaUsuario = async () => {
      try {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
        const headers = {
            headers: {
                Authorization: "francineide-silva-guimaraes"
            }
        }
    
        const response = await axios.post(url, body,headers)
          alert("usuario criado com sucesso")
          
      } catch(error) {
        console.log(error.response.data.message)
      }
  
    };
  
    render() {
      return (
        <div>
          
          <p>Adicionar Usuario</p>
          <button onClick={this.props.irParaLista}>Ir para Lista</button>
          <br/>
          <br/>
          <input
            placeholder="nome"
            value={this.state.nome}
            onChange={this.novoNome}
          />
          <input
            placeholder="email"
            value={this.state.email}
            onChange={this.novoEmail}
          />
          <button onClick={this.criaUsuario}>Cadatro usuário</button>

         
        </div>
      );
    }
  }
  export default Cadastro;
