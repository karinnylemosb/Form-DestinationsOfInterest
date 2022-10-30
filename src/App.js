import { PersonalData } from './components/forms/page-form.jsx';
import './App.css';
import '../src/service/service-api-city';
import { Paises } from '../src/service/service-api-country';

function App() {
  return (
    <section className="box">
      <PersonalData></PersonalData>
    </section>
  );
}

export default App;
