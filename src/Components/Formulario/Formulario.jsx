import React, { Fragment, useState} from "react";
import { postProduct } from "../../Actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate  } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';
import './Form.css'



const HookForm = (url) => {
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

        if (input.imagenes.length !== 0 && !/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(input.imagenes)) {
            error.imagenes = 'URL de imagen 1 no valida'
        }

        // if (input.imagen2.length !== 0 && !/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(input.imagen2)) {
        //     error.imagen2 = 'URL de imagen 2 no valida'
        // }

        // if (input.imagen3.length !== 0 && !/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(input.imagen3)) {
        //     error.imagen3 = 'URL de imagen 3 no valida'
        // }

        if (input.talle && input.talle < 28 || input.talle > 49) {
            error.talle = 'Debes ingresar una talla entre 28 y 49'
        }

        // if ((!whitespacesParameter.test(input.color1) || !alphabeticalPattern.test(input.color1))) {
        //     error.color1 = "El color ingresado no puede contener caracteres especiales ni números"
        // }
        if (!input.descripcion) {
            error.descripcion = 'Por favor inserta una descripcion del producto'
        }


        return error
    }

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [input, setInput] = useState({
        actividad: "",
        marca: "",
        imagenes: [].concat(url.img),
        precio: 1,
        modelo: "",
        talle: 1,
        color: "",
        descripcion: ""
        // color1: "",
        // talle1: 0

    })


    let [error, setError] = useState({})



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


    // -----------------------------------------------------------------------------
    console.log(input.imagenes, 'img')

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log ()
        dispatch(postProduct(input))
        swal({
            icon: "success",
            title: 'Producto agregado con éxito!'
          });
        
        setInput({
            actividad: "",
            marca: "",
            imagenes: [],
            precio: 1,
            modelo: "",
            talle: 1,
            color: "",
            descripcion: ""
            // color1: "",
            // talle1: 0

        })
         navigate('/home')


    }

    console.log(url)

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
            <Form className="formCont">

                <Form.Group onSubmit={handleSubmit} className="mb-3" controlId="formBasicEmail">
                    <h3>Marca</h3>
                    <Form.Control
                        required
                        className="inputs"
                        placeholder="Ingrese la marca..."
                        type="text"
                        name="marca"
                        onChange={handleInputChange}
                        value={input.marca}
                        autoComplete='off' />

                    {error.marca && (
                        <p>{error.marca}</p>
                    )}
                </Form.Group>

                <Form.Group onSubmit={handleSubmit} className="mb-3" controlId="formBasicEmail">
                    <h3>Modelo</h3>
                    <Form.Control
                        className="inputs"
                        placeholder="Ingrese el modelo..."
                        type="text"
                        name="modelo"
                        onChange={handleInputChange}
                        value={input.modelo}
                        autoComplete='off' />

                    {error.marca && (
                        <p>{error.marca}</p>
                    )}
                </Form.Group>

                <Form.Group onSubmit={handleSubmit} className="mb-3" controlId="formBasicEmail">
                    <h3>Precio</h3>
                    <Form.Control
                        className="inputs"
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
                </Form.Group>

                <Form.Group onSubmit={handleSubmit} className="mb-3" controlId="formBasicEmail">
                    <h3>Color</h3>
                    <Form.Control
                        className="inputs"
                        placeholder="Ingrese el o los colores..."
                        type="text"
                        name="color"
                        onChange={handleInputChange}
                        value={input.color}
                        autoComplete='off'
                        defaultValue='Blanco'
                    />
                    {error.color && (
                        <p>{error.color}</p>
                    )}
                </Form.Group>

                <Form.Group onSubmit={handleSubmit} className="mb-3" controlId="formBasicEmail">
                    <h3>Talle</h3>
                    <Form.Control
                        className="inputs"
                        placeholder="Ingrese los talles"
                        type="number"
                        name="talle"
                        onChange={handleInputChange}
                        value={input.talle}
                        autoComplete='off'
                    />
                    {error.talle && (
                        <p>{error.talle}</p>
                    )}
                </Form.Group>

                <Form.Group onSubmit={handleSubmit} className="mb-3" controlId="formBasicEmail">
                    <h3>Actividad</h3>
                    <Form.Control
                        className="inputs"
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
                </Form.Group>

                <Form.Group onSubmit={handleSubmit} className="mb-3" controlId="formBasicEmail">
                    <h3>Descripción</h3>
                    <Form.Control
                        className="inputs"
                        placeholder="Ingrese la descripción..."
                        type="text"
                        name="descripcion"
                        onChange={handleInputChange}
                        value={input.descripcion}
                        autoComplete='off'
                    />
                    {error.descripcion && (
                        <p>{error.descripcion}</p>
                    )}
                </Form.Group>
            </Form>
            
            <div className="btns">
            <Button className="btnBack"><Link className="text-white text-decoration-none" to="/home">Volver</Link></Button>

            <Button className='btnSub' variant='primary' type="submit" onClick={handleSubmit} disabled={Object.entries(error).length === 0 ? false : true}>Enviar</Button>
            </div>
            
            


            </form>
        </Fragment>
    );
}




export default HookForm;

