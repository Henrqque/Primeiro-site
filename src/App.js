import React, { Component } from 'react';
import './estilo.css'

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      frase: ''
    }
    
    this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'];

    this.handleOpenBiscoit = this.handleOpenBiscoit.bind(this)
  }

  handleOpenBiscoit() {
    const random = Math.floor(Math.random() * this.frases.length)
    this.setState({ frase: this.frases[random]})
  }

  render(){
    return (
      <div className='container'>
        <img src={require('./assets/biscoito.png')} className='img' />
        <Botao nome='Abrir biscoito' onClick={this.handleOpenBiscoit} />
        <h2 className='textoFrase'>{this.state.frase}</h2>
      </div>
    )
  }
}

class Botao extends Component{
  render(){
    return(
      <button onClick={this.props.onClick}>
       {this.props.nome}
      </button>
    )
  }
}

export default App