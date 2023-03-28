
import Button from '../Button/Button';
import Clock from './Clock/Clock';
import style from './Chronometer.module.scss';
import { ITarefa } from '../../types/ITarefa';
import { useState } from 'react';
import { tempoParaSegundos } from '../../common/utils/Time';

interface Props {
  selecionado: ITarefa | undefined
}

export default function Chronometer ({ selecionado }: Props ) {
  const [tempo, setTempo] = useState<number>();
  if(selecionado?.tempo) {
    setTempo(tempoParaSegundos(selecionado.tempo));
  }
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      Tempo: { tempo }
    <div className={style.relogioWrapper}>
        <Clock/>
      </div>
      <Button type='button'
      texto='Começar'
      />
    </div>
  )
}