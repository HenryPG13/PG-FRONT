import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListadoProductos extends Component {
 
    // constructor(props) {
    //     super(props);
    //     const { steps } = this.props;
    //     const { seleccion, seleccionFront, seleccionBack } = steps;
    //     this.state = {
    //         seleccion,
    //         seleccionFront,
    //         seleccionBack,
    //         busqueda: "",
    //         nombreCurado: ""
    //     }
    // }

    // componentDidMount() {
    //     if (this.state.seleccion.value === "f") {
    //         this.setState({
    //             busqueda: this.state.seleccionFront.value,
    //         });
    //         if (this.state.seleccionFront.value.includes("_")) {
    //             var texto = this.state.seleccionFront.value;
    //             texto = texto.substring(0, texto.indexOf("_"));
    //             this.setState({
    //                 nombreCurado: texto,
    //             });
    //         } else {
    //             this.setState({
    //                 nombreCurado: this.state.seleccionFront.value,
    //             });
    //         }
    //     } else if (this.state.seleccion.value === "b") {
    //         this.setState({
    //             busqueda: this.state.seleccionBack.value,
    //         });
    //         if (this.state.seleccionBack.value.includes("_")) {
    //             var texto = this.state.seleccionBack.value;
    //             texto = texto.substring(0, texto.indexOf("_"));
    //             this.setState({
    //                 nombreCurado: texto,
    //             });
    //         } else {
    //             this.setState({
    //                 nombreCurado: this.state.seleccionBack.value,
    //             });
    //         }
    //     }
    // }

    render() {
        return (
            <div>
                <p>Aca tenes el Listado de Productos: </p>
                <Link to={'/zapatillas/'} target="_blank">Listado de Productos</Link>
            </div>
        )
    }

    

}
export default ListadoProductos;