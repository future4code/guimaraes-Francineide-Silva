import React from "react";
import axios from "axios";
import Styled from "styled-components"





const PrinCard = Styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  text-align: center;
  padding: 5%;
  margin: 0;
`;

const TextoPrincipal = Styled.h2`
  font-size: 40px;
`;

const PrinInp = Styled.input`
  width: 30%;
  padding: 1%;
  margin-bottom: 5%;
`;

const PrinButao = Styled.button`
  font-size: 16px;
  width: 10%;
  padding: 1%;
  background-color: green;
  color: white;
`;

const SecunButao = Styled.button`
  font-size: 14px;
  border-radius: 10px;
  width: 10%;
  padding: 1%;
  background-color: green;
  color: white;
`;

class CriarPlaylists extends React.Component {
  state = {
    name: ""
  };

  createNewPlaylist = () => {
    const body = {
      name: this.state.name
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "francineide-silva-guimaraes"
          }
        }
      )
      .then((response) => {
        alert(`Playlist ${this.state.name} CRIADA COM SUCESSO!`);
        this.setState({ name: "" });
      })
      .catch((error) => {
        
        alert("NÃO FOI POSSÍVEL CRIA PLAYLIST!");
      });
  };

  onChangeNameValue = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <PrinCard>
        <TextoPrincipal>Bem vindo ao melhor App de Música!</TextoPrincipal>

        <p>Criar sua Playlist:</p>
        <PrinInp
          value={this.state.name}
          onChange={this.onChangeNameValue}
          placeholder={"Nome da Playlist"}
        ></PrinInp>
        <PrinButao onClick={this.createNewPlaylist}>Salvar</PrinButao>

        <p>Suas Playlists:</p>
        <SecunButao onClick={this.props.changePage}>
          Suas Playlists
        </SecunButao>
      </PrinCard>
    );
  }
}

export default CriarPlaylists;




