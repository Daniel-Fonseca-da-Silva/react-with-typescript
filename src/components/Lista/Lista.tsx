import style from './Lista.module.scss';
import Item from './Item/Item';

function Lista() {
  const tarefas = [{
    tarefa: 'NextJS',
    tempo: '02:00:00'
  }, {
    tarefa: 'NestJS',
    tempo: '08:00:00'
  }, {
    tarefa: 'MongoDB',
    tempo: '12:00:00'
  }]
  return(
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item 
          key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;

