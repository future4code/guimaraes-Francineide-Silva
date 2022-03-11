import axios from 'axios';
import React  from 'react';
import Styled from 'styled-components';


const CardUsuario = Styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

 class Usuario extends React.Component {
  state = {
    lista: [],
  };

  componentDidMount() {
    this.pegaUsuarios();
  }

  pegaUsuarios = async () => {
      try {
        const url =
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
      const headers = {
        headers: {
          Authorization: "francineide-silva-guimaraes",
        },
      };

      const response = await axios.get(url, headers)
      this.setState({lista: response.data})
      } catch(error){
        console.log(error.response.data.message)

      }
  

    
  };

  deleteUsuario = async (id) => {
      try {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id} `;
        const headers = {
          headers: {
            Authorization: "francineide-silva-guimaraes",
          },
        };
        await axios.delete(url, headers)
        alert("usuário deletado")
        this.pegaUsuarios()
      } catch (err) {
        alert(err.response.data.message)
      }
  
    
  };

  render() {
    const listaUsuarios = this.state.lista.map((user) => {
      return (
        <CardUsuario key={user.id}>
          <p>{user.name}</p>
          <button onClick={() => this.deleteUsuario(user.id)}>X</button>
        </CardUsuario>
      );
    });

    return (
      <div>
        <p>Lista Usuario</p>
        <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
        {listaUsuarios}
      </div>
    );
  }
}

export default Usuario;