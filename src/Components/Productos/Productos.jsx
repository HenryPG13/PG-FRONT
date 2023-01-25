import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getZapas } from "../../Actions";
import Cards from '../Card'
import Paginado from "../Paginado";
import Carrusel from "../Carrusels/Carrusel";
import Footer from "../Footer/Footer";
import '../CSS/Home.css'
import './Productos.css'
import { Filters } from "../Filters/Filters";




//imports para pruebas de scroll infinito
import { useRef, useCallback } from "react";
import useProductos from "../../Hooks/useProductos";



export default function Productos() {
  const dispatch = useDispatch();
  const allZapas = useSelector((state) => state.zapas);
  const [currentPage, setCurrentPage] = useState(1);
  const [zapasPerPage, setZapasPerPage] = useState(5);
  const indexOfLastZapa = currentPage * zapasPerPage;
  const indexOfFirstZapa = indexOfLastZapa - zapasPerPage;
  const currentZapas = allZapas.slice(indexOfFirstZapa, indexOfLastZapa);


  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  

  useEffect(() => {
    dispatch(getZapas());
  }, [dispatch]);



  

  // console.log("Esto esta en current zapas ", allZapas);
  return (
    <div>
      
      <div className="cards">
        {currentZapas.map((e, i) => {
          return (
            <div className="cartas" key={i}>
              <Link to={"/zapatillas/" + e._id} className="cardLink">
                <Cards
                  marca={e.marca}
                  image={e.imagenes && e.imagenes[0]}
                  modelo={e.modelo}
                  precio={e.precio}
                  oferta={e.oferta}
                />
              </Link>
            </div>
          );
        })}
      </div>

      <Paginado
        zapasPerPage={zapasPerPage}
        allZapas={allZapas.length}
        paginado={paginado}
      />
    </div>
  );
}


// export default function Productos(){ 
//     const [currentPage, setCurrentPage] = useState(1)
//     const dispatch = useDispatch()
//     const allZapas = useSelector(state => state.zapas)
    

//     //-----------------------------------LOGICA DEL HOOK DE SCROLL INFINITO-------------------------------------------------
//     const [resultados, setResultados] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [isError, setIsError] = useState(false);
//     const [error, setError] = useState({});
//     const [hasNextPage, setHasNextPage] = useState(false);
//     const [pages, setPages] = useState(10);

//     //cantPages toma todos los productos y los divide entre 10 para saber cuantos "scrolls" se haran
//     const cantPages = Math.ceil(allZapas.length / 10);
//     console.log("ESTo esta filtrado ", allZapas);

//     useEffect(() => {
      
//       const controller = new AbortController();
//       const { signal } = controller;
      
//       try {
//           setIsLoading(true);
//           setIsError(false);
//           setError({});

//           //currentZapas trae los primeros 10 productos
//           let currentZapas = allZapas.slice(currentPage, pages);

//           //si el valor de currentPage es mayor a 1, es decir, ya cargo los primeros 10 resultados, 
//           //cargara los 10 siguientes a los actuales de currentZapas
//           if (currentPage !== 1) {
//               currentZapas = allZapas.slice(pages, pages + 10)
//           }

//           //se avanzan las pages a los 10 siguientes para la proxima carga
//           setPages(pages + 10);
          
//           //se toman los resultados previos (si los hubiera) y se les agregan los siguientes (si los hubiera)
//           setResultados(previos => [...previos, ...currentZapas]);
          
//           //si la pagina actual es igual a la cantidad de paginas (cantidad de scrolls maxima) es xq ya no hay mas productos para cargar
//           if (currentPage === cantPages) {
//             setHasNextPage(true);
//           } else {
//             //si la pagina actual es diferente a la cantidad de paginas (cantidad de scrolls maxima) es xq aun hay mas productos para cargar
//               setHasNextPage(Boolean(allZapas.length));
//           }
//           setIsLoading(false);
//       } catch (e) {
//           setIsLoading(false);
//           if (signal.aborted) return
//           setIsError(true);
//           setError({ message: e.message });
//       } 
          
//       return () => controller.abort();
//   }, [currentPage])
//   //----------------------------------------------------------------------------------------------------------------------

//     // useEffect(() => {
//     //   dispatch(getZapas());
//     // }, [dispatch]);

//     const intObserver = useRef();
//     const lastPostRef = useCallback(prod => {
//         if (isLoading) return

//         if (intObserver.current) intObserver.current.disconnect();

//         intObserver.current = new IntersectionObserver(productos => {
//             if (productos[0].isIntersecting && hasNextPage) {
//                 console.log("ESTAMOS CERCA DEL ULTIMO PRODUCTO Y CURRENT PAGE ES ", currentPage);
//                 setCurrentPage(prev => prev + 1);
//             }
//         })

//         if (prod) intObserver.current.observe(prod);
//     }, [isLoading, hasNextPage]);

//     if (isError) return <p className='center'>Error: {error.message}</p>

//     console.log("ESTOS SI SON RESULTADOS ", resultados);
    
//     const contenido = resultados.map((prod, i) => {
//         if (resultados.length === i + 1) {
//           return (
//             <div className="cartas" key={i}>
//               <Link to={"/zapatillas/" + prod._id} className="cardLink">
//                 <Cards
//                   marca={prod.marca}
//                   image={prod.imagen1}
//                   modelo={prod.modelo}
//                   precio={prod.precio}
//                   ref={lastPostRef}
//                 />
//               </Link>
//             </div>
//           );
//         }
//         return (
//           <div className="cartas" key={i}>
//             <Link to={"/zapatillas/" + prod._id} className="cardLink">
//               <Cards
//                 marca={prod.marca}
//                 image={prod.imagen1}
//                 modelo={prod.modelo}
//                 precio={prod.precio}
//               />
//             </Link>
//           </div>
//         );
//     })

//     return (

//         <div>
//             <div className="cards">
//                 {contenido}
//             </div>
//         </div>
//     )

// }

