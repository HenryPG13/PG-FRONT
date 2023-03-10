import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getZapas } from "../Actions";
import Cards from "./Card";
import Paginado from "./Paginado";
import Carrusel from "./Carrusels/Carrusel";
import NavBar from "./NavBar/NavBar";
import './CSS/Home.css'
import Footer from "./Footer/Footer";
import { Filters } from "./Filters/Filters";


// import Scroll from "./Scroll/Scroll";
import CarruselFav from "./Carrusels/CarruselFav";
import CarruselMasV from "./Carrusels/CarruselMasV";





export default function Home() {

    const dispatch = useDispatch()
    const allZapas = useSelector(state => state.zapas)
    const [currentPage, setCurrentPage] = useState(1)
    const [zapasPerPage, setZapasPerPage] = useState(5)
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
            <NavBar />
            <Filters />
            <Carrusel />

            <div className="cards">
                {
                    currentZapas && currentZapas.map((e, i) => {
                        return (
                            <div key={i}>
                                <Link to={'/zapatillas/' + e._id} className='cardLink'>
                                    <Cards
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
                allZapas={allZapas.length}
                paginado={paginado}
            />

            <CarruselFav />
            <CarruselMasV />
            <Footer />

        </div>
    )

}