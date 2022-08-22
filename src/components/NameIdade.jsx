import React from 'react';

class NameIdade extends React.Component {
  render() {
    const { nomeP, idadeP, teste3 } = this.props;
    
    let erro = null;
    
    if (nomeP.length < 3) erro = 'Por favor digite um nome valido!';
    // console.log(nomeP);
    // console.log(idadeP);
    return (
      <>
        Nome: <input name="nome" type="text" onChange={teste3}></input> <br />
        {erro !== null ? erro : ''} <br />
        Idade: <input name="idade" onChange={teste3} type="number"></input> <br />
      </>
    );
  };
};

export default NameIdade;
