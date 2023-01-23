import React from "react";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getModeloZapas } from "../../Actions";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




export default function SearchBar(){
    const dispatch = useDispatch();
    const [modelo, setModelo] = useState("");
    const zapas= useSelector(state => state.zapas)
    const zapaFilter = zapas.filter(pk => pk.modelo.includes(modelo))

    function handleInputChange(e){
        e.preventDefault()
        setModelo(e.target.value);
        console.log(modelo);
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getModeloZapas(modelo));
        
    }
    
    //console.log(zapaFilter, 'searchbar')
    
    
//     if(zapaFilter.length === 0){
//       alert('No existe el modelo de zapatilla ingresado!')
//   }
//   //   else if(!modelo){
//       //       alert('¡Para buscar ingrese un nombre!')
//       //   }
//       else{
//         dispatch( getModeloZapas(modelo))
//         setModelo('')
          
//       }
    
    
    

    return(
        <div >
            {/* <input
            type = 'text'
            placeholder= "Buscar Zapatilla"
            onChange={(e) => handleInputChange(e)}
            value={modelo}
            /><button type= 'submit' onClick={(e) => handleSubmit(e)}>Buscar</button> */}
        
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar Zapatilla"
              onChange={(e) => handleInputChange(e)}
              value={modelo}
              className="me-2"
              aria-label="Search"
            />
            <Button className="btnSearch" variant="light" type= 'submit' onClick={(e) => handleSubmit(e)}>Buscar</Button>
          </Form>
        </div>
        
    )
}