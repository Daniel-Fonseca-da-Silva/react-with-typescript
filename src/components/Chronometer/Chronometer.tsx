
import Button from '../Button/Button';
import Clock from './Clock/Clock';
import style from './Chronometer.module.scss';
import { tempoParaSegundos } from '../../common/utils/Date';

export default function Chronometer () {
  console.log('Conversao: ', tempoParaSegundos('01:01:01'));
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
    <div className={style.relogioWrapper}>
        <Clock/>
      </div>
      <Button type='button'
      texto='Começar'
      />
    </div>
  )
}