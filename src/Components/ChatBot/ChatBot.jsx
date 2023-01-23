import React, {Component} from "react";
import { Link } from "react-router-dom";
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from "styled-components";
import Productos from "../Productos/Productos";
import ListadoOfertas from "./Apartados/ApartadoOfertas";
import Busqueda from "./Apartados/ApartadoBusqueda";
import ListadoProductos from './Apartados/ApartadosProductos';


const theme = {
    background: '#f5f8fb',
    headerBgColor: '#643cf3',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#643cf3',
    botFontColor: '#fff',
    userBubbleColor: '#0c6098',
    userFontColor: '#fff',
}

const config ={
    width: "400px",
    height: "500px",
    floating: true,
  }

export default class Contenido extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <ChatBot
                 steps={[
                    {
                        id: "1",
                        message: "Hola, en que puedo ayudarte?",
                        trigger: "2"
                    },
                    {
                        id: "1b",
                        message: "Hola, en que mas puedo ayudarte?",
                        trigger:"2"
                    },
                    {
                        id: "1c",
                        message: "Un placer! Nos vemos la proxima.",
                        trigger: "volverA"
                    },
                    {
                        id:"2",
                        options: [
                            {value: "a", label: "Ver listado de Productos", trigger:"3a"},
                            {value: "b", label: "Ver listado de Ofertas", trigger:"3b"},
                            {value: "c", label: "Buscar zapatilla:", trigger:"3c"},
                        ]
                    },                    
                    {
                        id: "3a",
                        component: <ListadoProductos />,
                        asMessage: true,
                        trigger: "preguntaVuelta"
                    },
                    {
                        id: "3b",
                        component: <ListadoOfertas />,
                        asMessage: true,
                        trigger: "preguntaVuelta"
                    }, {
                        id: "3c",
                        component: <Busqueda />,
                        // message: "Hey, fuck you!",
                        trigger: "preguntaVuelta",
                    },
                        
                    {
                        id: "preguntaVuelta",
                        message: "¿Necesita ayuda con algo mas?",
                        trigger: "respuestaVuelta",
                    }, 
                    {
                        id: "respuestaVuelta",
                        options: [
                            {value: "y", label: "Si", trigger: "1b"},
                            {value: "n", label: "No", trigger: "1c"},
                        ],
                    },
                    {
                        id: "volverA",
                        options: [
                            {value: "y", label: "Empezar de Nuevo", trigger: "2"},
                            // {value: "n", label: "No", trigger: "1c"},
                        ],
                    },
                ]}
                {...config}
                />
            </ThemeProvider>
        )
    }
}