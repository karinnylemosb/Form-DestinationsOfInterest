import Form from 'react-bootstrap/Form';
import './page-form.css';
import {ButtonDark} from '../buttons-dropdown/buttonCountry'
import {ButtonCity}  from '../buttons-dropdown/buttonCity.jsx'

export function PersonalData() {
  return (

 
      <Form className="personal-data" >
        <h1> Dados pessoais </h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-label">Nome</Form.Label>
          <Form.Control className="text-input"type="name" placeholder= "Digite seu nome" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-label">E-mail</Form.Label>
          <Form.Control className="text-input"type="email" placeholder="Digite seu e-mail" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-label">Telefone</Form.Label>
          <Form.Control className="text-input" type="tel" placeholder="Digite seu telefone" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-label">CPF</Form.Label>
          <Form.Control className="text-input" type="text" placeholder="Digite seu CPF" />
        </Form.Group>
        

      </Form>

 
  );
}


export function DestinationList() {
  return (
   
      <Form className="destinations" >
        <h1> Destinos de interesse </h1>
        <ButtonDark></ButtonDark>
        <ButtonCity></ButtonCity>
      </Form>
 
)

}



