import axios from 'axios';
import swal from 'sweetalert';

export function getZapas() {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3001/productos/zapatillas')

        return dispatch({
            type: 'GET_ZAPAS',
            payload: json.data
        })
    }
};

export function getZapasRango({ inicial, final }) {
    return async function (dispatch) {
        var json = await axios.get(`http://localhost:3001/productos/zapatillas/rango?inicial=${inicial}&&final=${final}`)
        return dispatch({
            type: 'GET_ZAPAS_RANGO',
            payload: json.data
        })
    }
}

export function getModeloZapas(modelo) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/productos/zapatillas?modelo=${modelo}`)
            return dispatch({
                type: 'GET_MODELO_ZAPAS',
                payload: json.data
            })

        } catch (error) {
            console.error(error)
        }

    }
};

export function getZapaById(id) {
    return async function (dispatch) {
        try {
            let json = await axios.get(`http://localhost:3001/productos/zapatillas/${id}`)
            return dispatch({
                type: 'GET_ZAPA_BY_ID',
                payload: json.data
            })
        } catch (error) {
            console.log(error, 'err')
        }
    }
};

export function getFilters({ talle, precio, actividad, order }) {
    return async function (dispatch) {
        var filters = await axios.get(`http://localhost:3001/productos/filtros?talle=${talle}&&precio=${precio}&&actividad=${actividad}&&order=${order}`)
        return dispatch({
            type: "GET_FILTERS",
            payload: filters.data
        })
    }
};

export function postProduct(payload) {
    return async function (dispatch) {
        const response = await axios.post('http://localhost:3001/productos/zapatillas', payload)
        return dispatch({
            type: "POST_PRODUCT",
            response
        });
    }
};

export function addToCart(id) {
    return async function (dispatch, getState)  {
        const product = await axios.get(`http://localhost:3001/productos/zapatillas/${id}`);
        dispatch({
            type: "ADD_TO_CART",
            payload: product.data,
        });
        // localStorage.setItem("cart", JSON.stringify(getState()))
    }
};

export function removeToCart(id) {
    return async function (dispatch, getState) {
        dispatch({
            type: "REMOVE_TO_CART",
            payload: id
        })
        // localStorage.setItem("cart", JSON.stringify(getState()))
    }
};

export function clearCart() {
    return async function (dispatch) {
        dispatch({
            type: "CLEAR_CART"
        })
    }
};

//--------------------Acciones de la orden------------------------//

export function AgregarOrden(orden) {
    return async function (dispatch) {
        try {
            const order = await axios.post('http://localhost:3001/pedido', orden);
            const { msg, ordenResp, estatus } = order.data;
            // crearOrden(ordenResp);
            dispatch({
                type: "ADD_ORDER",
                payload: ordenResp
            })
            // swal({
            //     icon: "success",
            //     title: 'Felicidades, orden aprobada, proceda al boton de pagar para completar la orden',
            // });

            // if (estatus === "fail") {
            //     // return { msg: msg, orderResp: ordenResp, estatus: estatus };
            //     console.log("AGREGARORDEN TRAJO ESTO ", estatus, "---", msg);
            // }

            return ordenResp.preferenceId;
            // return { msg: msg, orderResp: ordenResp.preferenceId, estatus: estatus };
        } catch (error) {
            console.log("ERROR EN AGREGAR ORDEN ", error)
        }
    }
}

export function crearOrden(orden) {
    return async function (dispatch) {
        dispatch({
            type: "ADD_ORDER",
            payload: orden
        })
    }
}

//----------------------------------------------------------------//

export function addToFav(id) {
    return async function (dispatch) {
        const product = await axios.get(`http://localhost:3001/productos/zapatillas/${id}`);
        dispatch({
            type: "ADD_TO_FAV",
            payload: product.data,


        })
    }
};

export function removeToFav(id) {
    return async function (dispatch) {
        dispatch({
            type: "REMOVE_TO_FAV",
            payload: id
        })
    }
};

export function createUser(payload) {
    return async function (dispatch) {
        const createUser = await axios.post(`http://localhost:3001/usuarios`, payload)
        dispatch({
            type: "CREATE_USER",
            payload: createUser.data
        })
    }
};

export function getUsers() {
    return async function (dispatch) {
        const users = await axios.get(`http://localhost:3001/usuarios`)
        //console.log(users.data)
        dispatch({
            type: "GET_USER",
            payload: users.data
        })
    }
};

export function singleUser(id) {
    return async function (dispatch) {
        try {
            const { data } = await axios.get(`http://localhost:3001/usuarios/${id}`)
            console.log(data)
            dispatch({
                type: "SINGLE_USER",
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
};

export function updateUser({ _id, data }) {

    return async function (dispatch) {
        try {
            const user = await axios.put(`http://localhost:3001/usuarios/${_id}`, data)

            dispatch({
                type: "UPDATE_USER",
                payload: user.data
            })
        } catch (error) {
            console.log(error)
        }
    }
};

export function logUser(email, contraseña) {
    return async function (dispatch) {
        try {
            const { data } = await axios.post(`http://localhost:3001/usuarios/login`, { email, contraseña })
            //console.log(data)
            dispatch({
                type: "LOG_USER",
                payload: data
            })
        } catch (error) {
            dispatch({
                type: "ERR_LOGEO",
                payload: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.response
            })
        }
    }
};

export function updateUserAdmin({ _id, admin1 }) {

    const payload = {
        "admin": admin1 ? false : true
    };

    return async function (dispatch) {
        try {
            const { data } = await axios.put(`http://localhost:3001/usuarios/${_id}`, payload)
            //console.log(data)
            dispatch({
                type: "UPDATE_USER",
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
};

export function updateUserEstado({ _id, estado1 }) {

    const payload = {
        "estado": estado1 ? false : true
    };
    return async function (dispatch) {
        try {
            const { data } = await axios.put(`http://localhost:3001/usuarios/${_id}`, payload)
            //console.log(data)
            dispatch({
                type: "UPDATE_USER",
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
};

export function updateProduct({ _id, actividad, color, imagenes, marca, modelo, precio, talle, descripcion, inventario, estado, oferta }) {
    const payload = {
        actividad,
        color,
        imagenes,
        marca,
        modelo,
        precio,
        talle,
        descripcion,
        inventario,
        estado,
        oferta,
    };
    return async function (dispatch) {
        try {
            const { data } = await axios.put(`http://localhost:3001/productos/zapatillas/${_id}`, payload)
            dispatch({
                type: "UPDATE_PRODUCT",
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    };
};

export function getReviews() {
    return async function (dispatch) {
        const reviews = await axios.get(`http://localhost:3001/productos/revisiones`)
        dispatch({
            type: "GET_REVIEWS",
            payload: reviews.data
        })
    }
};

export function getOrders() {
    return async function (dispatch) {
        const orders = await axios.get(`http://localhost:3001/pedido`)
        dispatch({
            type: "GET_ORDERS",
            payload: orders.data
        })
    }
};

export function updateOrder({ _id, estadoEntrega, precioEnvio }) {

    const payload = {
        estadoEntrega,
        precioEnvio,
    };

    return async function (dispatch) {
        try {
            const { data } = await axios.put(`http://localhost:3001/pedido/${_id}/enviado`, payload)
            //console.log(data)
            dispatch({
                type: "UPDATE_ORDER",
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
};

export function getSingleOrder(id) {
    return async function (dispatch) {
        try {
            let order = await axios.get(`http://localhost:3001/pedido/${id}`)
            console.log(order.data)
            return dispatch({
                type: 'GET_SINGLE_ORDER',
                payload: order.data
            })
        } catch (error) {
            console.log(error, 'err')
        }
    }
};

export function getOfertasZapas(ofertas) {
    return async function (dispatch) {
        var ofertas = await axios.get(`http://localhost:3001/productos/ofertas`)
        return dispatch({
            type: 'GET_OFERTAS_ZAPAS',
            payload: ofertas.data
        })
    }
};

export function getAllReviews() {
    return async function (dispatch) {
        try {
            let review = await axios.get(`http://localhost:3001/productos/revisiones`)
            return dispatch({
                type: 'GET_ALL_REVIEWS',
                payload: review.data
            })
        } catch (error) {
            console.log(error, 'err')
        }
    }
};

export function addReview({ id, reviewData, score, usuario, nombre }) {
    const payload = {
        comentarios: reviewData,
        calificacion: score,
        usuario,
        nombre,
    }
    return async function (dispatch) {
        try {
            const revisiones = await axios.post(`http://localhost:3001/productos/zapatillas/${id}/comentario`, payload);
            return dispatch({
                type: 'ADD_REVIEWS',
                payload: revisiones.data
            })

        } catch (error) {
            console.log(error)
        }
    }
};

export function addFavorites({ idproduct, iduser }) {
    return async function (dispatch) {
        try {
            const favorites = await axios.post(`http://localhost:3001/usuarios/${idproduct}/favorito?iduser=${iduser}`);
            return dispatch({
                type: 'ADD_FAVORITES',
                payload: favorites.data
            });
        } catch (error) {
            console.log(error)
        }
    }
};

export function removeFavorites(id) {

    return async function (dispatch) {
        try {
            const fav = await axios.delete(`http://localhost:3001/usuarios/favoritos/${id}`);
            return dispatch({
                type: 'REMOVE_FAVORITES',
                payload: fav.data
            });
        } catch (error) {
            console.log(error)
        }
    }
};

export function removeReview(id) {

    return async function (dispatch) {
        try {
            const rev = await axios.delete(`http://localhost:3001/productos/revisiones/${id}`);
            return dispatch({
                type: 'REMOVE_REVIEW',
                payload: rev.data
            });
        } catch (error) {
            console.log(error)
        }
    }
};



//---------------------------------------------------
// export function payOneZapa(zapatilla) {
//     return async function (dispatch){
//         console.log("ESTA ES MI ZAPA ", zapatilla)
//         const res = await axios.post('http://localhost:3001/payment', zapatilla)
//         // window.location.href = res.data.response.body.init_point;
//         return dispatch({
//             type: "POST_PAYMENT",
//             payload: res
//         });
//     }
// }
