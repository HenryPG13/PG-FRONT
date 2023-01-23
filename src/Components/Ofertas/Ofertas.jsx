import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getZapas } from "../../Actions";
import Cards from '../Card'
import Paginado from "../Paginado";
import Carrusel from "../Carrusels/Carrusel";
import NavBar from "../NavBar/NavBar";
import '../CSS/Home.css'
// import './Productos.css'
import { Filters } from "../Filters/Filters";


import { Navbar } from "react-bootstrap";





export default function Ofertas(){ 

    const dispatch = useDispatch()
    const allZapas = useSelector(state => state.zapas)
    const [currentPage, setCurrentPage] = useState(1)
    const [zapasPerPage, setZapasPerPage] = useState(10)
    const indexOfLastZapa = currentPage * zapasPerPage
    const indexOfFirstZapa = indexOfLastZapa - zapasPerPage
    const currentZapas = allZapas.slice(indexOfFirstZapa, indexOfLastZapa)


    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getZapas());
    }, [dispatch])

    return (

        <div>

<NavBar/>

<Filters />
            <div className="cards">
                {
                    currentZapas.map((e, i) => {
                        return (
                            <div className="cartas" key={i}>
                                <Link to={'/zapatillas/' + e._id} className='cardLink'>
                                    <Cards
                                        marca={e.marca}
                                        image={e.imagen1}
                                        modelo={e.modelo}
                                        precio={e.precio}
                                        />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>

            

            <Paginado
                zapasPerPage={zapasPerPage}
                allZapas={allZapas.length}
                paginado={paginado}
            />

        </div>
    )

}