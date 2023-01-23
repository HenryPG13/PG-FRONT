import axios from 'axios';

export function getZapas() {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3001/productos/zapatillas')

        return dispatch({
            type: 'GET_ZAPAS',
            payload: json.data
        })
    }
};

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

export function getFilters({ talla, precio, actividad, order }) {
    return async function (dispatch) {
        var filters = await axios.get(`http://localhost:3001/productos/filtros?talla=${talla}&&precio=${precio}&&actividad=${actividad}&&order=${order}`)
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
    return async function (dispatch) {
        const product = await axios.get(`http://localhost:3001/productos/zapatillas/${id}`);
        dispatch({
            type: "ADD_TO_CART",
            payload: product.data,


        })
    }
};

export function removeToCart(id) {
    return async function (dispatch) {
        dispatch({
            type: "REMOVE_TO_CART",
            payload: id
        })
    }
};

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
            createUser
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
