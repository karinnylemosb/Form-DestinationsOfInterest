import Form from 'react-bootstrap/Form';
import {ButtonDark} from '../buttons-dropdown/buttons'
import './page-form.css'

export function PersonalData() {
  return (

 
      <Form className="personal-data" >
        <h1> Dados pessoais </h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-label">Nome</Form.Label>
          <Form.Control className="text-input"type="text" placeholder= "Digite seu nome" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-label">E-mail</Form.Label>
          <Form.Control className="text-input"type="text" placeholder="Digite seu e-mail" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-label">Telefone</Form.Label>
          <Form.Control className="text-input" type="text" placeholder="Digite seu telefone" />
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
      </Form>
 
)

}



