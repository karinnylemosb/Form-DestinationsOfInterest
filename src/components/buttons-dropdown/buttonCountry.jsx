import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './buttons.css';
import { useEffect, useState } from 'react';
import {getPaises} from '../../service/service-api-country';

export function ButtonDark() {

  const [selectedOption, setSelectedOption] = useState({});
  useEffect(()=>{}, [selectedOption]);

  const [listaPaises, setlistaPaises] = useState([]);
  useEffect(()=>{
    getPaises().then(res => {
      setlistaPaises(res);
    })
  }, []);

  useEffect(()=>{
    
  }, [listaPaises])

    return (
    <>

    
        <DropdownButton 
        id="dropdown-button-dark-example1"
        variant="secondary"
        menuVariant="dark"
        title="País"
        className="mt-2" multiple>
          {listaPaises && listaPaises.map((p,i) => {
          return <Dropdown.Item key={i} className="drop"> { p }</Dropdown.Item> })}

      </DropdownButton>

    </>
  );

 
}

