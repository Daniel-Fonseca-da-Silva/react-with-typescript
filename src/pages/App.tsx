import { useState } from 'react';
import Chronometer from '../components/Chronometer/Chronometer';
import Form from '../components/Form/Form';
import Lista from '../components/Lista/Lista';
import { ITarefa } from '../types/ITarefa';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([])
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <Lista tarefas={tarefas} />
      <Chronometer/>
    </div>
  );
}

export default App;
