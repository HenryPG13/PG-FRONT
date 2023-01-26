import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getZapas, getOfertasZapas } from "../../Actions";
// import Cards from '../Card'
import CardOferta from '../CardsZapas/CardOferta'
import Paginado from "../Paginado";
import Carrusel from "../Carrusels/Carrusel";

import '../CSS/Home.css'
// import './Productos.css'
import '../CardsZapas/CardOferta.css'

import { FiltersOfertas } from './filtrosOfertas/FiltrosOfertas'









export default function Ofertas(){ 

    const dispatch = useDispatch()
    const allZapasoferta = useSelector(state => state.ofertas)
    const [currentPage, setCurrentPage] = useState(1)
    const [zapasPerPage, setZapasPerPage] = useState(10)
    const indexOfLastZapa = currentPage * zapasPerPage
    const indexOfFirstZapa = indexOfLastZapa - zapasPerPage
    const currentZapas = allZapasoferta.slice(indexOfFirstZapa, indexOfLastZapa)


    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getOfertasZapas());
    }, [dispatch])



    return (

        <div>



<FiltersOfertas />
            <div className="cards">
                {
                    currentZapas.map((e, i) => {
                        return (
                            <div className="cartanulo" key={i}>
                                <Link to={'/zapatillas/' + e._id} className='cardLink'>
                                    <CardOferta
                                        marca={e.marca}
                                        image={e.imagenes && e.imagenes[0]}
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
                allZapas={allZapasoferta.length}
                paginado={paginado}
            />

        </div>
    )

}