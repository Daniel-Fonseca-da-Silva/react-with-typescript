import React from "react";
import Button from "../button";

class Form extends React.Component {
  render () {
    return (
      <form>
        <div>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input type="text" name="tarefa" id="tarefa" placeholder="O que deseja estudar hoje?" required />
          <label htmlFor="tempo">Tempo</label>
          <input type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00" required />
        </div>
        <div>

          <Button/>
        </div>
      </form>
    )
  }
}

export default Form;
