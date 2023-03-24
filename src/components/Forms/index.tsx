import React from "react";
import Button from "../Button";
import './style.scss';

class Form extends React.Component {
  render () {
    return (
      <form className="novaTarefa">
        <div className="inputContainer">
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input type="text" name="tarefa" id="tarefa" placeholder="O que deseja estudar hoje?" required />
          <label htmlFor="tempo">Tempo</label>
          <input type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00" required />
        </div>
        <div className="inputContainer">
          <Button/>
        </div>
      </form>
    )
  }
}

export default Form;
