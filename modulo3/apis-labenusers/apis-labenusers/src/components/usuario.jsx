import axios from 'axios';
import React  from 'react';
import Cadastro from './cadastro';

const urlCadastro = axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
    headers: {
        Authorization: "francineide-silva-guimaraes" }
        })

class Usuario extends React.Component {
 state = {
    usuarios: []
  }

  componentDidMount() {
    urlCadastro.then(response => {
      this.setState({
        usuarios: response.data
      })
      .catch(error => {
        console.log (error.message)
    })
  })
  }

  createCadastro() {
    const body = {
      name: this.state.nameInput,
      email: this.state.emailInput,
  }
  axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers: {
          Authorization: 'francineide-silva-guimaraes'
      }
  })
  .then(response => {
      console.log(response.data)
      alert('Usuário cadastrado com sucesso')
      this.setState({ nameInput: '', emailInput: '' })
      this.getUserByld()
  })
  .catch(error => {
      console.log(error.message)
  })
  }

onChangeinputUsuario(event) {
    this.setState({ nameInput: event.target.value })
  }
  onChangeinputEmail(event) {
    this.setState({ emailInput: event.target.value })
  }
  nextPage() {
    this.props.history.push(<Usuario />)
  }
  render() {
    const cadastroComponent = this.state.usuarios.map(usuario => {
      return <li key ={usuario.id}> {usuario.name}
      {usuario.email}
      </li>
    })

    return (
      <div className="App">
          <h1>Cadastro de Usuários</h1>
        <div>
          <input
            type="text"
            placeholder="Nome"
            value={this.state.nameInput}
            onChange={(event) => this.onChangeinputUsuario(event)}
          />
          <input
            type="email"
            placeholder="Email"
            value={this.state.emailInput}
            onChange={(event) => this.onChangeinputEmail(event)}
          />
          <button onClick={() => this.createCadastro()}>Cadastrar</button>
        </div>
        <div>
          <button onClick={() => this.nextPage()}>Próxima página</button>
        </div>
      </div>
    );
  }
}
export default Usuario;