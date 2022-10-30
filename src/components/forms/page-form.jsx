import Form from 'react-bootstrap/Form';
import './page-form.css';
import {ButtonDark} from '../buttons-dropdown/buttons';
import { useState, useEffect } from 'react';
import {getPaises} from '../../service/service-api-country';
import { getCidades } from '../../service/service-api-city';


export function PersonalData() {

  const [nome, setNome] = useState([]);
  const [email, setEmail] = useState([]);
  const [tel, setTel] = useState([]);
  const [cpf, setCpf] = useState([]);

  const [listaCidades, setlistaCidades] = useState([]);
  
  const [selectedCountryOption, setSelectedCountryOption] = useState([]);
  const [selectedCityOption, setSelectedCityOption] = useState([]);

  const [listaSelectedCity, setListaSelectedCity] = useState([]);

  useEffect(()=>{}, [selectedCountryOption]);

  const [listaPaises, setlistaPaises] = useState([]);
  useEffect(()=>{
    async function fetchCidades() {
     await getPaises().then(res => {
        setlistaPaises(res);
      })
      await  getCidades().then(res =>{
        setlistaCidades(res);
      })
   } fetchCidades();
    
 
  }, []);

  
  useEffect(()=>{
    setListaSelectedCity ([]);
  async function fetchCidades() {
     for (const country of selectedCountryOption) {
       const filtro = listaCidades.filter(c => c.country_code === country.value).map(f => ({label : f.name, value: f.name}))
        setListaSelectedCity([...listaSelectedCity, ...filtro])
     }
  }
 fetchCidades()    
}, [selectedCountryOption, listaCidades])



  return (

 <>
  
      <Form className="personal-data" >
        <h1> Dados pessoais </h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-label">Nome</Form.Label>
            <Form.Control value={nome} onChange={(e => setNome(e.target.value))}className="text-input"type="name" placeholder= "Digite seu nome" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-label">E-mail</Form.Label>
            <Form.Control value={email} onChange={(e => setEmail(e.target.value))} className="text-input"type="email" placeholder="Digite seu e-mail" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-label">Telefone</Form.Label>
          <Form.Control value={tel} onChange={(e => setTel(e.target.value))} className="text-input" type="tel" placeholder="Digite seu telefone" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-label">CPF</Form.Label>
          <Form.Control value={cpf} onChange={(e => setCpf(e.target.value))} className="text-input" type="text" placeholder="Digite seu CPF" />
        </Form.Group>
        

      </Form>
 
      <Form className="destinations" >
      <h1> Destinos de interesse </h1>
          
      <>
          {listaCidades.length > 0 && listaPaises.length > 0 ? 
            <>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-label">Países</Form.Label>
                    <ButtonDark value={selectedCountryOption} onChange={e =>  setSelectedCountryOption([...e ])} options={listaPaises}/>
              </Form.Group>
            
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-label">Cidades</Form.Label>
                  <ButtonDark value={selectedCityOption} onChange={e =>  setSelectedCityOption([...e ])} options={listaSelectedCity}/>
              </Form.Group>
            </> : <p> Por favor, aguarde... </p>}

            <button style={{width:"100%", marginTop:"2em"}} type='button' onClick={() => alert(`Segue seus dados: \n Nome: ${nome}\n E-mail:${email}\n Telefone: ${tel}\n CPF: ${cpf}\n Pais de destino: ${selectedCountryOption.map(s => s.label).join(',')} \n Cidade de destino: ${selectedCityOption.map(s=> s.label).join(',')}`)} class="btn btn-secondary btn-lg btn-block"> Enviar </button>

            
   </>
  
    </Form>
        
</>
);
}






