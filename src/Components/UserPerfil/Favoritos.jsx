import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { singleUser } from '../../Actions'

import'./CSS/UserFavoritos.css'
export const Favoritos = () => {

    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(singleUser(id))
    },[]);

    const user = useSelector(state => state.user)

  return (
    <div>
        <h1 className='FavPtitulo'>Productos favoritos:</h1>
       <div className='ordenProductos'>

        {user.favoritos?.length > 0? user.favoritos.map(e => {
            return (
                <div className='favZapasDisplay'>
                    <p>Marca: {e.marca}</p>
                    <p>Modelo: {e.modelo}</p>
                    <img src={e.imagenes[0]} alt="imagen de zapato"/>
                    <p>Precio: ${e.precio}</p>
                    <p>Talle: {e.talle}</p>
                    <p>Color: {e.color}</p>
                    <p>Actividad: {e.actividad}</p>
                </div>
            )
        }): <p className='detalleFav'>No has agregado favoritos</p>}
        </div>
    </div>

  )
}
