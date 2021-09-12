import React, { Component } from 'react';
import '../App.css';

export default class Birthday extends Component{
  constructor() {
    super()

    this.state = {
      showMessage: false,
    };
  }

  handleClick = () => {
    this.setState({ showMessage: true });
  }
  
 render(){
  const { showMessage } = this.state;
  return (
    <div>
      <header className="App-header">
        <h1>Feliz aniversário</h1>
      </header>
      { showMessage &&
        <section className="Sections">
          <p>
            Parabéns, hoje é seu aniversário!!!
          </p>
        </section>

      }
      {
        !showMessage &&
        <section className="Sections">
          <button type="button" onClick={this.handleClick} className="Message-btn">Mostrar mensagem</button>
        </section>
      }
    </div>
  );
 }
}
