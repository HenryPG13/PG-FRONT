import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFilters, getZapas } from '../../Actions';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import RangeSlider from 'react-bootstrap-range-slider'
import { Form, Col, Row } from 'react-bootstrap'
import './Filters.css'


export const Filters = () => {

    const inicialState = {
        talle: '',
        precio: '',
        actividad: '',
        order: 'default'
    };

    let dispatch = useDispatch();
    let [value, setValue] = useState(inicialState);
    let [titleDropOrd, setTitleDropOrd] = useState("Ordenar por: ")
    let [titleDropAct, setTitleDropAct] = useState("Actividad: ")
    let [titleDropTalle, setTitleDropTalle] = useState("Talle: ")

    useEffect(() => {
        dispatch(getZapas())
    }, []);

    const filterActividad = (e) => {
        switch (e.target.value) {
            case "Moda":
                setTitleDropAct("Actividad: Moda")
                break;
            case "Basquet":
                setTitleDropAct("Actividad: Basquet")
                break;
            default:
                setTitleDropAct("Actividad: Cualquiera")
                break;
        }
        setValue({ ...value, actividad: e.target.value })
    };

    const filterTalle = (e) => {
        switch (e.target.value) {
            case "34":
                setTitleDropTalle("Talle: 34")
                break;
            case "35":
                setTitleDropTalle("Talle: 35")
                break;
            case "36":
                setTitleDropTalle("Talle: 36")
                break;
            case "37":
                setTitleDropTalle("Talle: 37")
                break;
            case "37.7":
                setTitleDropTalle("Talle: 37,5")
                break;
            case "38":
                setTitleDropTalle("Talle: 38")
                break;
            case "39":
                setTitleDropTalle("Talle: 39")
                break;
            case "40":
                setTitleDropTalle("Talle: 40")
                break;
            case "41":
                setTitleDropTalle("Talle: 41")
                break;
            case "41.5":
                setTitleDropTalle("Talle: 41,5")
                break;
            case "42":
                setTitleDropTalle("Talle: 42")
                break;
            case "43":
                setTitleDropTalle("Talle: 43")
                break;
            case "44":
                setTitleDropTalle("Talle: 44")
                break;
            case "45":
                setTitleDropTalle("Talle: 45")
                break;
            case "46":
                setTitleDropTalle("Talle: 46")
                break;
            case "47":
                setTitleDropTalle("Talle: 47")
                break;
            case "48":
                setTitleDropTalle("Talle: 48")
                break;
            case "49":
                setTitleDropTalle("Talle: 49")
                break;
            
            default:
                setTitleDropTalle("Talle: Cualquiera")
                break;
        }
        setValue({ ...value, talla: e.target.value })
    };

    const filterPrecio = (e) => {
        setValue({ ...value, precio: e.target.value })
    };

    const setOrder = (e) => {
        switch (e.target.value) {
            case "modeloUp":
                setTitleDropOrd("Ordenar por: A - Z")
                break;
            case "modeloDown":
                setTitleDropOrd("Ordenar por: Z - A")
                break;
            case "precioUp":
                setTitleDropOrd("Ordenar por: Mayor a menor precio")
                break;
            case "precioDown":
                setTitleDropOrd("Ordenar por: Menor a mayor precio")
                break;
            default:
                setTitleDropOrd("Ordenar por: Cualquiera")
                break;
        }
        setValue({ ...value, order: e.target.value })
    };

    const handleOnFilters = () => {
        dispatch(getFilters(value))
    };

    const cleanFilters = (e) => {
        e.preventDefault(); //por si renderiza lento
        setValue(inicialState);
        dispatch(getZapas())
    }

    return (
        <div className='filters'>

            {/* <Form.Group as={Row}>
            <Form.Label column sm="2">
                Precio ($0 - ${value.precio}):
            </Form.Label>
            
            <RangeSlider
                value={value.precio}
                type={'range'} min={0} max={900}
                onChange={(e) => filterPrecio(e)} />
            
            </Form.Group> */}
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column sm="8">
                        Precio ($0 - ${value.precio}):
                    </Form.Label>
                    <Col sm="8">
                        <RangeSlider
                            value={value.precio}
                            type={'range'} min={0} max={900}
                            onChange={(e) => filterPrecio(e)}
                        />
                    </Col>
                </Form.Group>
            </Form>


            <DropdownButton onClick={(e) => filterActividad(e)} id="dropdown-basic-button" title={titleDropAct}>

                <Dropdown.Item><option defaultValue={'default'}> Cualquiera </option></Dropdown.Item>
                <Dropdown.Item><option value={'Moda'}> Moda </option></Dropdown.Item>
                <Dropdown.Item><option value={'Basquet'}> Basquet </option></Dropdown.Item>

            </DropdownButton>

            <DropdownButton onClick={(e) => filterTalle(e)} id="dropdown-basic-button" title={titleDropTalle}>

                <Dropdown.Item><option value={"default"}> Cualquiera </option></Dropdown.Item>
                <Dropdown.Item><option value={34}> 34 </option></Dropdown.Item>
                <Dropdown.Item><option value={35}> 35 </option></Dropdown.Item>
                <Dropdown.Item><option value={36}> 36 </option></Dropdown.Item>
                <Dropdown.Item><option value={37}> 37 </option></Dropdown.Item>
                <Dropdown.Item><option value={37.5}> 37.5 </option></Dropdown.Item>
                <Dropdown.Item><option value={38}> 38 </option></Dropdown.Item>
                <Dropdown.Item><option value={39}> 39 </option></Dropdown.Item>
                <Dropdown.Item><option value={40}> 40 </option></Dropdown.Item>
                <Dropdown.Item><option value={41}> 41 </option></Dropdown.Item>
                <Dropdown.Item><option value={41.5}> 41.5 </option></Dropdown.Item>
                <Dropdown.Item><option value={42}> 42 </option></Dropdown.Item>
                <Dropdown.Item><option value={43}> 43 </option></Dropdown.Item>
                <Dropdown.Item><option value={44}> 44 </option></Dropdown.Item>
                <Dropdown.Item><option value={45}> 45 </option></Dropdown.Item>
                <Dropdown.Item><option value={46}> 46 </option></Dropdown.Item>
                <Dropdown.Item><option value={47}> 47 </option></Dropdown.Item>
                <Dropdown.Item><option value={48}> 48 </option></Dropdown.Item>
                <Dropdown.Item><option value={49}> 49 </option></Dropdown.Item>

            </DropdownButton>

            {/* <DropdownButton onClick={(e) => setOrder(e)} id="dropdown-basic-button" title="Ordenar por precio o modelo">

                <Dropdown.Item><option value={'default'}> Cualquiera </option></Dropdown.Item>
                <Dropdown.Item><option value={'precioUp'}> Mayor a menor precio </option></Dropdown.Item>
                <Dropdown.Item><option value={'precioDown'}> Menor a mayor precio </option></Dropdown.Item>
                <Dropdown.Item><option value={'modeloUp'}> A - Z </option></Dropdown.Item>
                <Dropdown.Item><option value={'modeloDown'}> Z - A </option></Dropdown.Item>

            </DropdownButton> */}
            <DropdownButton onClick={(e) => setOrder(e)} id="dropdown-basic-button" title={titleDropOrd}>

                <Dropdown.Item><option value={'default'}> Cualquiera </option></Dropdown.Item>
                <Dropdown.Item><option value={'precioUp'}> Mayor a menor precio </option></Dropdown.Item>
                <Dropdown.Item><option value={'precioDown'}> Menor a mayor precio </option></Dropdown.Item>
                <Dropdown.Item><option value={'modeloUp'}> A - Z </option></Dropdown.Item>
                <Dropdown.Item><option value={'modeloDown'}> Z - A </option></Dropdown.Item>

            </DropdownButton>
            <div>
                <Button onClick={() => handleOnFilters()} variant="primary">Aplicar filtros</Button>
            </div>
            <div>
                <Button onClick={(e) => cleanFilters(e)} variant="primary" class="btn btn-danger">Limpiar filtros</Button>
            </div>
        </div>
    )
};
