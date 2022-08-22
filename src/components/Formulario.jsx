import React from 'react';
import Sexo from './Sexo';
import Check from './Check';
import NameIdade from './NameIdade';

class Formulario extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: '',
      idade: 0,
      sexo: '',
      check: false,
      obs: '',
    };
    this.fileInput = React.createRef();
    this.getInfo = this.getInfo.bind(this);
  };

  getInfo ({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value ;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form>
        <h1>Primeiro formulario em React</h1>
        <label>
          <fieldset>
            <legend>Preenchimento de informações</legend>
            <NameIdade
              nomeP={this.state.nome}
              idadeP={this.state.idade}
              teste3={this.getInfo} 
            />
            <Sexo teste={this.getInfo}/>
          </fieldset>
        </label>
        <Check teste2={this.getInfo} />
        <textarea name="obs" onChange={this.getInfo}></textarea> <br />
        <input type="file" ref={this.fileInput} />
      </form>
    );
  }
}

export default Formulario;

/* Na aula o Alberto usou um atributo value dentro do campo/tag (value={this.state.name}) mencionando que ele é necessário para que aquele campo receba o valor armazenado que esta sendo digitado pelo usuario, porem no meu teste não precisou desse atributo para que o valor ficasse guardado!? */