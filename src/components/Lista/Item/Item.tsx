import { ITarefa } from '../../../types/ITarefa'
import style from '../Lista.module.scss'

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function item({
  tarefa, 
  tempo, 
  selecionado, 
  completado, 
  id, 
  selecionaTarefa
}: Props) {
  console.log('Item atual: ', { tarefa, tempo, selecionado, completado, id });
  
  return (
    <li className={  `${ style.item } ${ selecionado ? style.itemSelecionado : '' }` } onClick={ () => selecionaTarefa({
        id, tarefa, tempo, selecionado, completado }) } 
      >
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
  )
}