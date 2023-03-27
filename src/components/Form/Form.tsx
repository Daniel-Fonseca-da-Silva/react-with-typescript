import React from "react";
import { ITarefa } from "../../types/ITarefa";
import Button from "../Button/Button";
import style from './Form.module.scss';

class Form extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
  state = {
    tarefa: "",
    tempo: "00:00"
  }

  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state}])
  }

  render () {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input type="text" value={this.state.tarefa} onChange={evento => this.setState({...this.state, tarefa: evento.target.value})} name="tarefa" id="tarefa" placeholder="O que deseja estudar hoje?" required />
          <label htmlFor="tempo">Tempo</label>
          <input type="time" step="1" value={this.state.tempo} onChange={evento => this.setState({...this.state, tempo: evento.target.value})} name="tempo" id="tempo" min="00:00:00" max="23:00:00" required />
        </div>
        <div className={style.inputContainer}>
          <Button type="submit"
          texto='Adicionar'
          />
        </div>
      </form>
    )
  }
}

export default Form;
