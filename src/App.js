import { PersonalData } from './components/forms/page-form.jsx';
import { DestinationList } from './components/forms/page-form.jsx';
import './App.css';
import '../src/service/service-api-city';
import { Paises } from '../src/service/service-api-country';

function App() {
  return (
    <section className="box">
      <PersonalData></PersonalData>
      <DestinationList></DestinationList>
      <Paises></Paises>
    </section>
  );
}

export default App;
