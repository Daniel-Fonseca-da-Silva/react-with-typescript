import Chronometer from '../components/Chronometer/Chronometer';
import Form from '../components/Form/Form';
import Lista from '../components/Lista/Lista';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form/>
      <Lista/>
      <Chronometer/>
    </div>
  );
}

export default App;
