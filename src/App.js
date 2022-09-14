import React, { Component } from 'react';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: '',
      error: '',
    }

    this.handleConfirm = this.handleConfirm.bind(this)
  }

  handleConfirm(event) {
    const { nome, email, senha, error } = this.state;
    event.preventDefault()

    if(email === '' && nome === '' && senha === '') {
      return this.setState({ error: 'Ops! algo deu errado!'})
    }

    alert(`Nome: ${nome} \n Email: ${email} \n Senha: ${senha}`)
  }

  render(){
    return (
      <div>
        <h2>Preencha todos os campos</h2>

        {this.state.error !=='' && <p>{this.state.error}</p>}
        <form onSubmit={this.handleConfirm}>

          <label>Nome:</label>

          <input type={'text'} name='nome' value={this.state.nome}  
          onChange={e => this.setState({ nome: e.target.value }) }
          /> <br/> 

          <label>Email:</label>
          <input type={'email'} name='email' value={this.state.email}  
          onChange={e => this.setState({ email: e.target.value }) }
          /> <br/> 

          <label>Senha:</label>
          <input type={'password'} name='senha' value={this.state.senha}  
          onChange={e => this.setState({ senha: e.target.value }) }
          /> <br/> 

          <button type={'submit'}>
            Cadastrar
          </button>

        </form>
      </div>
    )
  }
}

export default App