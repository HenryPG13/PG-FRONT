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
        talla: '',
        precio: '',
        actividad: 'moda',
        order: 'default'
    };

    let dispatch = useDispatch();
    let [value, setValue] = useState(inicialState);

    useEffect(() => {
        dispatch(getZapas())
    }, []);

    const filterActividad = (e) => {
        setValue({ ...value, actividad: e.target.value })
    };

    const filterTalla = (e) => {
        setValue({ ...value, talla: e.target.value })
    };

    const filterPrecio = (e) => {
        setValue({ ...value, precio: e.target.value })
    };

    const setOrder = (e) => {
        setValue({ ...value, order: e.target.value })
    };

    const handleOnFilters = () => {
        dispatch(getFilters(value))
    };

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


            <DropdownButton onClick={(e) => filterActividad(e)} id="dropdown-basic-button" title="Selecciona una actividad">

                <Dropdown.Item><option value={'sin-actividad'}> Cualquiera </option></Dropdown.Item>
                <Dropdown.Item><option value={'Moda'}> Moda </option></Dropdown.Item>
                <Dropdown.Item><option value={'Basquet'}> Basquet </option></Dropdown.Item>

            </DropdownButton>

            <DropdownButton onClick={(e) => filterTalla(e)} id="dropdown-basic-button" title="Selecciona una talla">

                <Dropdown.Item><option value={"sin-talla"}> Cualquiera </option></Dropdown.Item>
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

            <DropdownButton onClick={(e) => setOrder(e)} id="dropdown-basic-button" title="Ordenar por precio o modelo">

                <Dropdown.Item><option value={'default'}> Cualquiera </option></Dropdown.Item>
                <Dropdown.Item><option value={'precioUp'}> Mayor a menor precio </option></Dropdown.Item>
                <Dropdown.Item><option value={'precioDown'}> Menor a mayor precio </option></Dropdown.Item>
                <Dropdown.Item><option value={'modeloUp'}> A - Z </option></Dropdown.Item>
                <Dropdown.Item><option value={'modeloDown'}> Z - A </option></Dropdown.Item>

            </DropdownButton>
            <div>
                <Button onClick={() => handleOnFilters()} variant="primary">Aplicar filtros</Button>
            </div>
        </div>
    )
};
