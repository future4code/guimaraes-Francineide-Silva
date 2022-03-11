import React from "react";
import axios from "axios";
import Styled from "styled-components";


const CardPri = Styled.button`
  font-size: 14px;
  border-radius: 10px;
  width: 15%;
  padding: 10px;
  margin-bottom: 4%;
  background-color: green;
  color: white;
  

`;

const cardSecu =Styled.div`
   display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;


`

const TracksContainer = Styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: left;
  margin: 2% 2%;
  line-height: 80px;
`;

const ButtonAddTracks = Styled.button`
  font-size: 14px;
  border-radius: 10px;
  width: 15%;
  padding: 10px;
  margin-bottom: 4%;
  background-color: green;
  color: white;
`;

const DataTracksField = Styled.input`
  width: 25%;
  padding: 10px;
  margin-top: 2%;
`;

const ButtonAddDataTracks = Styled.button`
  font-size: 16px;
  border-radius: 10px;
  width: 27%;
  padding: 10px;
  margin-top: 2%;
  background-color: green;
  color: white;
`;

const headers = {
  headers: {
    Authorization: "francineide-silva-guimaraes"
  }
};

class AddMusic extends React.Component {
  state = {
    playlistDetail: [],
    playlistEdition: "editButton",
    name: "",
    artist: "",
    url: ""
  };

  componentDidMount() {
    this.getPlaylistDetails();
  }

  getPlaylistDetails = (listId) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.listId}/tracks`,
        headers
      )
      .then((response) => {
        this.setState({ playlistDetail: response.data.result.tracks });
      })
      .catch((error) => {
       
      });
  };

  changePlaylistEditonFiel = () => {
    if (this.state.playlistEdition === "editButton") {
      this.setState({ playlistEdition: "playlistEditForm" });
    } else {
      this.setState({ playlistEdition: "editButton" });
    }
  };

  handleNameChange = (event) => {
    const newNameValue = event.target.value;

    this.setState({ name: newNameValue });
  };

  handleArtistChange = (event) => {
    const newArtistValue = event.target.value;

    this.setState({ artist: newArtistValue });
  };

  handleUrlChange = (event) => {
    const newUrlValue = event.target.value;

    this.setState({ url: newUrlValue });
  };

  handleCreatePlaylist = (listId) => {
    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.listId}/tracks`,
        body,
        headers
      )
      .then((response) => {
        this.setState({ name: "", artist: "", url: "" });
        this.getPlaylistDetails();
        this.changePlaylistEditonFiel();
        alert("Playlist editada com sucesso!");
        
      })
      .catch((error) => {
        alert("Erro ao editar Playlist!");
        
      });
  };

  render() {
    const renderedDetails = this.state.playlistDetail.map((playlist) => {
      return (
        <div key={playlist.id}>
          <p>
            Artista: {playlist.artist} <br /> Música: {playlist.name}
          </p>
          <audio src={playlist.url} value={playlist.url} controls></audio>
        </div>
      );
    });

    const playlistEdition =
      this.state.playlistEdition === "editButton" ? (
        <ButtonAddTracks onClick={this.changePlaylistEditonFiel}>
          Adicionar tracks
        </ButtonAddTracks>
      ) : (
        <div>
          <p>Adicionar tracks a playlist:</p>
          <DataTracksField
            placeholder="Nome da música"
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <br />

          <DataTracksField
            placeholder="Artista"
            type="text"
            value={this.state.artist}
            onChange={this.handleArtistChange}
          />
          <br />

          <DataTracksField
            placeholder="Url"
            type="url"
            value={this.state.url}
            onChange={this.handleUrlChange}
          />
          <br />

          <ButtonAddDataTracks onClick={this.handleCreatePlaylist}>
            Salvar
          </ButtonAddDataTracks>
        </div>
      );

    return (
      <cardSecu>
        <div>
          <CardPri onClick={this.props.changePage}>
            Voltar as Playlists
          </CardPri>
          <TracksContainer>{renderedDetails}</TracksContainer>
          <hr />
        </div>
        <div>{playlistEdition}</div>
      </cardSecu>
    );
  }
}

export default AddMusic;
