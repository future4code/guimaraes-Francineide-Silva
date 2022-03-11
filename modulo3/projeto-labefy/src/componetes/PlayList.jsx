import React from "react";
import axios from "axios";
import AddMusic from "./AddMusic";
import Styled from 'styled-components'






const CARD = Styled.div`
  font-family: Arial, Helvetica, sans-serif;
  padding: 5%;
`;

const BOTAOCARDPRI = Styled.button`
  font-size: 14px;
  border-radius: 10px;
  width: 10%;
  padding: 10px;
  margin-bottom: 4%;
  background-color: green;
  color: whitesmoke;
`;

const CARDINPU = Styled.input`
  width: 15%;
  padding: 5px;
  margin-bottom: 5%;
`;

const BOTAOCARDSEC = Styled.button`
  font-size: 14px;
  width: 10%;
  padding: 5.2px;
  background-color: green;
  color: whitesmoke;
`;

const CARDSEC = Styled.span`
  padding-bottom: 10%;
  line-height: 50px;
`;

const DELEBOTAO = Styled.span`
  color: red;
  margin-left: 1%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-radius: 10px;
    margin-bottom: 4%;

`;

const urlPlaylists = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const headers = {
  headers:{
    Authorization: "francineide-silva-guimaraes"
  }
}

class Playlists extends React.Component {
  state = {
    playlists: [],
    title: "Suas Playlists:",
    currentPage: "playlists",
    listId: "",
    name: ""
  };

  componentDidMount() {
    this.fetchPlaylists();
  }

  fetchPlaylists = () => {
    axios
      .get(urlPlaylists, headers)
      .then((response) => {
        this.setState({ playlists: response.data.result.list });
        
      })
      .catch((error) => {
        
      });
  };

  deletePlaylist = (listId) => {
    if (window.confirm("Você tem certeza que deseja deletar esta Playlist?")) {
      axios
        .delete(`${urlPlaylists}/${listId}`, headers)
        .then(() => {
          alert("Playlist deletada!");
          this.fetchPlaylists();
        })
        .catch((erro) => {
          alert("Erro ao deletar Playlist");
          console.log(erro.message);
        });
    }
  };

  changePage = (listId) => {
    if (this.state.currentPage === "playlists") {
      this.setState({
        currentPage: "playlistDetail",
        listId: listId
      });
    } else {
      this.setState({ currentPage: "playlists", listId: "" });
    }
  };

  handleNameChange = (event) => {
    const newNameValue = event.target.value;

    this.setState({ name: newNameValue });
  };

  handleSearchPlaylist = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${this.state.name}`,
        headers
      )
      .then((response) => {
        this.setState({ playlists: response.data.result.playlist });
      })
      .catch((error) => {
        alert("Erro ao buscar playlist");
        console.log(error);
      });
  };

  render() {
    return (
      <CARD>
        <BOTAOCARDPRI onClick={this.props.changePage}>Voltar</BOTAOCARDPRI>
        <h2>Procurar playlist:</h2>
        <CARDINPU
          placeholder="Digite"
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <BOTAOCARDSEC onClick={this.handleSearchPlaylist}>Buscar</BOTAOCARDSEC>
        {this.state.currentPage === "playlists" ? (
          <div>
            <ul>
              <h2>{this.state.title}</h2>
              {this.state.playlists.length === 0 && <div>Carregando...</div>}
              {this.state.playlists.map((list) => {
                return (
                  <li>
                    <CARDSEC
                      onClick={() => this.changePage(list.id, list.name)}
                    >
                      {list.name}
                    </CARDSEC>
                    <DELEBOTAO onClick={() => this.deletePlaylist(list.id)}>
                      Deletar
                    </DELEBOTAO>
                    <hr />
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <AddMusic listId={this.state.listId} changePage={this.changePage} />
        )}
      </CARD>
    );
  }
}
export default Playlists;