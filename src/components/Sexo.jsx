import React from 'react';

class Sexo extends React.Component {
  render() {
    const { teste } = this.props;
    return (
      <>
        <select name="sexo" onChange={teste}>
          <option>Masculino</option>
          <option>Feminino</option>
        </select>
        <br />
      </>
    );
  };
};

export default Sexo
