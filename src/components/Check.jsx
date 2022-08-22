import React from 'react';

class Check extends React.Component {
  render () {
    const { teste2 } = this.props
    return (
      <>
        <input name="check" onChange={teste2} type="checkbox" /> <br />
      </>
    );
  };
};

export default Check;
