import React from 'react';
import Playlists from './componetes/PlayList';
import AddMusic from './componetes/AddMusic';
import Facebook from './componetes/Imagem/face.svg';
import Instagram from './componetes/Imagem/insta.svg';
import Twitter from './componetes/Imagem/twittwr.svg';
import Styled from 'styled-components';
import Img from './componetes/Imagem/images.svg'
import CriarPlaylists from './componetes/CriarPlaylists';


const CardPrincipal = Styled.div`
  background-color: lightgreen;
  color: black;
  margin: 0;
  width: 100%

`;

const Headers = Styled.header`
  background-image: linear-gradient(to right, pink,  lightgreen, yellow);
  color: black;
  font-size: 30px;
  padding-bottom: 1%;
  padding-left: 5%;
  margin: 0;
`;

const ImgCard = Styled.img`
  width: 5%;
  padding-top: 1%;
  margin: 0;
   
  
`;

const CardFooters = Styled.footer`
  background-image: linear-gradient(to right, pink,  lightgreen, yellow);
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 50%;
  padding-bottom: 0;
  margin: 0;
  

`;
const footSecundario = Styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;

`

const CardRedeSocial = Styled.img`
  width: 10%;
  padding-top: 1%;
  padding-right: 2%;
  padding-left: 5%;
  margin: 0;
  
`;

const TextoFoot= Styled.h2 `
  color: black;

`

class App extends React.Component {
  state = {
    currentPage: "AddMusic"
  };

  changePage = () => {
    if (this.state.currentPage === "AddMusic") {
      this.setState({ currentPage: "playlists" });
    } else {
      this.setState({ currentPage: "AddMusic" });
    }
  };

  render() {
    return (
      <CardPrincipal>
        <Headers>
          <ImgCard src={Img} alt="logo" />
          <strong>Labefy</strong>
        </Headers>
        {this.state.currentPage === "AddMusic" ? (
          <CriarPlaylists changePage={this.changePage} />
        ) : (
          <Playlists changePage={this.changePage} />
        )}
        <CardFooters>
          <br/>
         <TextoFoot>© 2021 Labefy - Seu App de Música <br/> Rua dos Bobos, 0 - Esmero, PB - 00000-000</TextoFoot>
        <br/>
          <a href="https://www.facebook.com" target="_blank"><CardRedeSocial src={Facebook}  alt="facebook" /></a>
          <a href="https://www.instagram.com" target="_blank"><CardRedeSocial src={Instagram} alt="instagram" /></a>
          <a href="https://www.twitter.com" target="_blank"><CardRedeSocial src={Twitter} alt="twitter" /></a>
          <footSecundario>
          <a class="nav-link" target="_blank" href="./index.html">quem somos</a>
          <br/>
          <a class="nav-link" target="_blank" href="./index.html">nossos produtos/serviços</a>
          <br/>
          <a class="nav-link" target="_blank" href="./index.html">contato</a>
          <br/>
          <a class="nav-link" target="_blank" href="./index.html">trabalhe conosco</a>
          <br/>
          <a class="nav-link" target="_blank" href="./index.html">FAQ/perguntas frequentes</a>
          </footSecundario>
          
        </CardFooters>
      </CardPrincipal>
    );
  }
}

export default App;
