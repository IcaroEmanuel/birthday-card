import React, { Component } from 'react';

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
      <header>
        <h1>Feliz aniversário</h1>
      </header>
      { showMessage &&
        <section>
          <p>
            Parabéns, hoje é seu aniversário!!!
          </p>
        </section>

      }
      {
        !showMessage &&
        <section>
          <button type="button" onClick={this.handleClick}>Mostrar mensagem</button>
        </section>
      }
    </div>
  );
 }
}
