import { ITarefa } from '../../../types/ITarefa'
import style from './Item.module.scss'

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
  return (
    <li className={  `${ style.item } ${ selecionado ? style.itemSelecionado : '' }` } onClick={ () => selecionaTarefa({
        id, tarefa, tempo, selecionado, completado }) } 
      >
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
  )
}