import React from "react";

class Button extends React.Component {
  render() {
    const backgroundColor = 'green';
    const styles = {
      backgroundColor
    }
    return (
      <button style={
        styles
      }>
        Botao
      </button>
    )
  }
}

export default Button;
