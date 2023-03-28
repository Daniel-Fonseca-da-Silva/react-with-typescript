import { useState } from 'react';
import Chronometer from '../components/Chronometer/Chronometer';
import Form from '../components/Form/Form';
import Lista from '../components/Lista/Lista';
import { ITarefa } from '../types/ITarefa';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id? true : false
    })));
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <Lista 
      tarefas={tarefas} 
      selecionaTarefa={selecionaTarefa}
      />
      <Chronometer/>
    </div>
  );
}

export default App;
