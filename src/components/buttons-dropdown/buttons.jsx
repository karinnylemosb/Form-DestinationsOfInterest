import './buttons.css';
import Select from 'react-select';


export function ButtonDark(props) {

    return (
      <Select isMulti isSearchable value={props.value} onChange={props.onChange} options={props.options}/>
  );

 
}
