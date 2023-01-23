import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getZapas } from "../../Actions";
import Cards from '../Card'
import Paginado from "../Paginado";
import Carrusel from "../Carrusels/Carrusel";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import '../CSS/Home.css'
import './Productos.css'
import { Filters } from "../Filters/Filters";


import { Navbar } from "react-bootstrap";

//imports para pruebas de scroll infinito
import { useRef, useCallback } from "react";
import useProductos from "../../Hooks/useProductos";



export default function Home(){ 

    const dispatch = useDispatch()
    const allZapas = useSelector(state => state.zapas)
    const [currentPage, setCurrentPage] = useState(1)
    const {
        isLoading,
        isError,
        error,
        resultados,
        hasNextPage
    } = useProductos(currentPage);

    const intObserver = useRef();
    const lastPostRef = useCallback(prod => {
        if (isLoading) return

        if (intObserver.current) intObserver.current.disconnect();

        intObserver.current = new IntersectionObserver(productos => {
            if (productos[0].isIntersecting && hasNextPage) {
                console.log("ESTAMOS CERCA DEL ULTIMO PRODUCTO Y CURRENT PAGE ES ", currentPage);
                setCurrentPage(prev => prev + 1);
            }
        })

        if (prod) intObserver.current.observe(prod);
    }, [isLoading, hasNextPage]);

    if (isError) return <p className='center'>Error: {error.message}</p>

    console.log("ESTOS SI SON RESULTADOS ", resultados);
    const contenido = resultados.map((prod, i) => {
        if (resultados.length === i + 1) {
          
          return (
            <div className="cartas" key={i}>
                                 <Link to={'/zapatillas/' + prod._id} className='cardLink'>
            <Cards
              marca={prod.marca}
              image={prod.imagen1}
              modelo={prod.modelo}
              precio={prod.precio}
              ref={lastPostRef}
            />
            </Link>
                             </div>
          );
        }
        return (
          <div className="cartas" key={i}>
            <Link to={"/zapatillas/" + prod._id} className="cardLink">
              <Cards
                marca={prod.marca}
                image={prod.imagen1}
                modelo={prod.modelo}
                precio={prod.precio}
              />
            </Link>
          </div>
        );
    })

    return (

        <div>


            <NavBar/>
            <Filters/>

<Filters />
            <div className="cards">
                {contenido}
                
                </div>
          </div>
          
          )}







// export default function Home(){ 

//     const dispatch = useDispatch()
//     const allZapas = useSelector(state => state.zapas)
//     const [currentPage, setCurrentPage] = useState(1)
//     const [zapasPerPage, setZapasPerPage] = useState(10)
//     const indexOfLastZapa = currentPage * zapasPerPage
//     const indexOfFirstZapa = indexOfLastZapa - zapasPerPage
//     const currentZapas = allZapas.slice(indexOfFirstZapa, indexOfLastZapa)


//     const paginado = (pageNumber) => {
//         setCurrentPage(pageNumber)
//     }

//     useEffect(() => {
//         dispatch(getZapas());
//     }, [dispatch])

//     console.log("Esto esta en current zapas ", allZapas);
//     return (

//         <div>

// <NavBar/>


//             <div className="cards">
//                 {
//                     currentZapas.map((e, i) => {
//                         return (
//                             <div className="cartas" key={i}>
//                                 <Link to={'/zapatillas/' + e._id} className='cardLink'>
//                                     <Cards
//                                         marca={e.marca}
//                                         image={e.imagen1}
//                                         modelo={e.modelo}
//                                         precio={e.precio}
//                                         />
//                                 </Link>
//                             </div>
//                         )
//                     })
//                 }
//             </div>

            


//             <Paginado
//                 zapasPerPage={zapasPerPage}
//                 allZapas={allZapas.length}
//                 paginado={paginado}
//             />

//         </div>
//     )

        

// }