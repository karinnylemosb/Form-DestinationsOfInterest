import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Paises from '../../service/service-api';
import './buttons.css'

export function ButtonDark() {
  return (
    <>
{/* Botão 1 */}
      <DropdownButton
        id="dropdown-button-dark-example1"
        variant="secondary"
        menuVariant="dark"
        title="País"
        className="mt-2"
      >
        <Dropdown.Item href="#/action-1" active>{Paises}</Dropdown.Item>

        <Dropdown.Item href="#/action-2">País</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Cidade</Dropdown.Item>
        <Dropdown.Divider />
        
      </DropdownButton>

{/* Botão 2 */}
      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        menuVariant="dark"
        title="Cidade"
        className="mt-2"
      >
        <Dropdown.Item href="#/action-1" active>
          Action
        </Dropdown.Item>

        <Dropdown.Item href="#/action-2">País</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Cidade</Dropdown.Item>
        <Dropdown.Divider />
        
      </DropdownButton>
    </>
  );
}

