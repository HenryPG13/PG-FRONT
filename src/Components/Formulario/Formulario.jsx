import React, { Fragment, useState } from "react";

import { postProduct } from "../../Actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";



const HookForm = () => {
    // if (!whitespacesParameter.test(newrecipe.name) || !alphabeticalPattern.test(newrecipe.name)){
    //     errors.name= "El nombre ingresado no puede contener caracteres especiales ni números"
    //   }
    
    function validation(input) {
        let whitespacesParameter = /(?!^\s+$)^.*$/m;  //controla caracteres especiales
        let alphabeticalPattern = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/; //controla que solo sean letras
        let error = {}

        if (!whitespacesParameter.test(input.actividad) || !alphabeticalPattern.test(input.actividad)) {
            error.actividad = "La actividad ingresada no puede contener caracteres especiales ni números"
        }

        if (!input.actividad) {
            error.actividad = 'Por favor inserta una actividad para tu producto'
        }

        if (!input.marca) {
            error.marca = 'Por favor inserta una marca para tu producto'
        }

        if (!input.modelo) {
            error.modelo = 'Por favor inserta un modelo para tu producto'
        }

        if (alphabeticalPattern.test(input.precio)) {
            error.precio = "El precio solo puede contener numeros"
        }

        if (input.imagen1.length !== 0 && !/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(input.imagen1)) {
            error.imagen1 = 'URL de imagen 1 no valida'
        }

        if (input.imagen2.length !== 0 && !/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(input.imagen2)) {
            error.imagen2 = 'URL de imagen 2 no valida'
        }

        if (input.imagen3.length !== 0 && !/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(input.imagen3)) {
            error.imagen3 = 'URL de imagen 3 no valida'
        }

        if(input.talle1 && input.talle1 < 28 || input.talle1 > 49) {
            error.talle1 = 'Debes ingresar una talla entre 28 y 49'
        }

        // if ((!whitespacesParameter.test(input.color1) || !alphabeticalPattern.test(input.color1))) {
        //     error.color1 = "El color ingresado no puede contener caracteres especiales ni números"
        // }

       
        return error
    }

    const dispatch = useDispatch();

    //const history = useHistory();

    const [input, setInput] = useState({
        actividad: "",
        marca: "",
        imagen1: "",
        imagen2: "",
        imagen3: "",
        precio: 1,
        modelo: "",
        talles: [],
        color: [],
        color1: "",
        talle1: 0
    })


    let [error, setError] = useState({})

    //console.log(input)

    const handleInputChange = (event) => {
        // console.log('event.target.value')
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
        setError(validation({
            ...input,
            [event.target.name]: event.target.value
        }))
    };
    // const {register, errors, handleSubmit} = useForm();

    // const onSubmit = (data) => {
    //     console.log(data)
    // }


    // -----------------------------------------------------------------------------
    const handleAddTalle = (e) => {

        setInput({
            ...input,
            talles: [
                ...input.talles,
                input.talle1
            ],
            talle1: 0
        });
        setError(validation({
            ...input,
            talles: [
                ...input.talles,
                input.talle1
            ],
            talle1: 0
        }))
    }

    const handleAddColor = (e) => {

        setInput({
            ...input,
            color: [
                ...input.color,
                input.color1
            ],
            color1: ""
        });
        setError(validation({
            ...input,
            color: [
                ...input.color,
                input.color1
            ],
            color1: ""
        }))
        
    }
    // -----------------------------------------------------------------------------

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log ()
        dispatch(postProduct(input))
        alert('¡Producto cargado con exito!')
        setInput({
            actividad: "",
            marca: "",
            imagen1: "",
            imagen2: "",
            imagen3: "",
            precio: 1,
            modelo: "",
            talles: [],
            color: [],
            color1: "",
            talle1: 0

        })
        // history.push('/home')
        
        console.log(input, 'input')
    }

    return (
        <Fragment>
            <h2>Carga de productos</h2>
            <form onSubmit={handleSubmit}>
                {/* <form> */}
                <input
                    placeholder="Ingrese la marca..."
                    type="text"
                    name="marca"
                    onChange={handleInputChange}
                    value={input.marca}
                    autoComplete='off'
                />
                {error.marca && (
                    <p>{error.marca}</p>
                )}
                <input
                    placeholder="Ingrese el modelo..."
                    type="text"
                    name="modelo"
                    onChange={handleInputChange}
                    value={input.modelo}
                    autoComplete='off'
                />
                {error.modelo && (
                    <p>{error.modelo}</p>
                )}
                <input
                    placeholder="Ingrese el precio..."
                    type="number"
                    name="precio"
                    onChange={handleInputChange}
                    value={input.precio}
                    autoComplete='off'
                />
                {error.precio && (
                    <p>{error.precio}</p>
                )}

                <input
                    placeholder="Link de la imagen1..."
                    type="text"
                    name="imagen1"
                    onChange={handleInputChange}
                    value={input.imagen1}
                    autoComplete='off'
                />
                {error.imagen1 && (
                    <p>{error.imagen1}</p>
                )}
                <input
                    placeholder="Ingrese la imagen2..."
                    type="text"
                    name="imagen2"
                    onChange={handleInputChange}
                    value={input.imagen2}
                    autoComplete='off'
                />
                {error.imagen2 && (
                    <p>{error.imagen2}</p>
                )}
                <input
                    placeholder="Ingrese la imagen3..."
                    type="text"
                    name="imagen3"
                    onChange={handleInputChange}
                    value={input.imagen3}
                    autoComplete='off'
                />
                {error.imagen3 && (
                    <p>{error.imagen3}</p>
                )}

                <input
                    placeholder="Ingrese el o los colores..."
                    type="text"
                    name="color1"
                    onChange={handleInputChange}
                    value={input.color1}
                    autoComplete='off'
                    defaultValue='Blanco'
                />
                {/* {error.color1 && (
                    <p>{error.color1}</p>
                )} */}

                <button type="button" onClick={handleAddColor} >
                    Agregar nuevo color
                </button>

                <input
                    placeholder="Ingrese los talles"
                    type="number"
                    name="talle1"
                    onChange={handleInputChange}
                    value={input.talle1}
                    autoComplete='off'
                />
                {error.talle1 && (
                    <p>{error.talle1}</p>
                )}
                <button type="button" onClick={handleAddTalle} disabled={error.talle1? true: false}>
                    Agregar nuevo talle
                </button>


                <input
                    placeholder="Actividad"
                    type="text"
                    name="actividad"
                    onChange={handleInputChange}
                    value={input.actividad}
                    autoComplete='off'
                />
                {error.actividad && (
                    <p>{error.actividad}</p>
                )}


                <button type="submit" onClick={handleSubmit} disabled={Object.entries(error).length === 0 ? false : true}>Enviar</button>


            </form>

            <button><Link to="/home">Volver</Link></button>
        </Fragment>
    );
}




export default HookForm;

