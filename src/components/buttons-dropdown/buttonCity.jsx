import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './buttons.css';
import { useEffect, useState } from 'react';
import {getCidades} from '../../service/service-api-city';

export function ButtonCity() {

  const [selectedOption, setSelectedOption] = useState({});
  useEffect(()=>{}, [selectedOption]);

  const [listaCidades, setlistaCidades] = useState([]);
  useEffect(()=>{
    getCidades().then(res => {
      setlistaCidades(res);
    })
  }, []);

  useEffect(()=>{
    
  }, [listaCidades])

  return (
    <>
        <DropdownButton
        id="dropdown-button-dark-example1"
        variant="primary"
        menuVariant="dark"
        title="Cidades"
        className="mt-2"
        name="Cidades"
        >
          {listaCidades && listaCidades.map((p,i) => {
          return <Dropdown.Item key={i} className="drop"> { p }</Dropdown.Item> })}

      </DropdownButton>

    </>
  )
}

      