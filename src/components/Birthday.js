import React, { Component } from 'react';

export default class Birthday extends Component{
 render(){
  return (
    <div>
      <header>
        <h1>Feliz aniversário</h1>
      </header>
      <section>
        <p>
          Parabéns, hoje é seu aniversário!!!
        </p>
      </section>
      <section>
        <button type="button">Mostrar mensagem</button>
      </section>
    </div>
  );
 }
}
