import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFav, removeToFav } from "../../Actions";
import NavBar from "../NavBar/NavBar";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



export default function Favorito({history}){
    const dispatch = useDispatch();
    const favorito = useSelector(state => state.favorite);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [itemsTotal, setItemsTotal] = useState(0);

    useEffect(() => {
        let items = 0;
        let precio = 0;

        favorito.forEach((item) => {
            items += item.qty;
            precio += item.qty * item.precio;
        });

        setItemsTotal(items);
        setPrecioTotal(precio);
    }, [favorito, precioTotal, itemsTotal, setPrecioTotal, setItemsTotal])

    const handleInputChange = (event, id) => {
        dispatch(addToFav(id, event.target.value));
    }

    const borrarDefavorito = (id) => {
        console.log("ESTOY REMOVIENDO ", id);
        
        dispatch(removeToFav(id));
    }

    console.log("ESTE ES EL favorito ", favorito);

    return (
        <>
            <NavBar />
            <div className="b-example-divider"></div>

            <div className="container my-5">
                <div className="row">
                    {favorito.length === 0 ? 
                        (
                            <>
                                <div>
                                    <span> No hay articulos guardados...</span>
                                </div>
                            </>
                        ) :
                        (
                            <>
                                <ul>
                                    {(favorito.map((item, index) => (
                                        <li key={index}>
                                            <div className="row">
                                                {/* <div>
                                                    <img src={item.imagenes[0]} alt=".." />
                                                </div> */}

                                                <div>
                                                    <h3>{item.marca}</h3>
                                                    <h3>{item.modelo}</h3>
                                                    <img src={item.imagenes }/>
                                 
                                
                               
                              
                                                    <br />
                                                    <span>
                                                       <h1>${item.qty && (item.precio * item.qty)}</h1> 
                                                    </span>
                                                    <hr />
                                                </div>

                                                                                              
                                                        <div className="col">
                                                            <button className="btn btn-danger" onClick={() => borrarDefavorito(item._id)}>
                                                                Quitar item
                                                            </button>
                                                        </div>
                                                   
                                                
                                            </div>
                                        </li>
                                    ))
                                    )
                                    }
                                </ul>
                            </>)
                    }

                    <div className="col-5">
                        <div>
                            <div className="row mb-3">
                                <div className="col-6">
                                    <span>
                                        Cantidad de articulos:
                                    </span> {itemsTotal}
                                </div>
                                <div className="col-6">
                                    <span>
                                        Total:
                                    </span> $ {precioTotal}
                                </div>
                            </div>
                        </div>
      
                                                <div class="action">
               {/* <Button variant="primary" > */}
                <Link to={"/home"}>Regresar</Link>
                {/* </Button> */}

                                             
                                            
                                          </div>
                        {/* Aqui iria la Orden */}
                    </div>
                   
    
                </div>
            </div>
        </>
    )
}