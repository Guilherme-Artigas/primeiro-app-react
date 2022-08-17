import React, { Component } from "react";

class Person extends Component {
  render() { 
    const nome = 'Guilherme Artigas';
    const descricao = 'Estudante desenvolvimento web';
    const habilidades = 'Minhas Habilidades: ';
    const skills = ['HTML', 'CSS', 'JS'] // adicione mais habilidades aqui
    const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>
    return <div>
      <h1>{nome}</h1>
      <p>{descricao}</p>
      <h2>{habilidades}</h2>
      <ol>{jsxSkills}</ol>
    </div>
  };
};

export default Person;
