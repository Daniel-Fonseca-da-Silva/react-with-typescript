import Form from '../components/Form/Form';
import Lista from '../components/Lista/Lista';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form/>
      <Lista/>
    </div>
  );
}

export default App;
