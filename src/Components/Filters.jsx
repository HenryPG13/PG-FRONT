import React from "react";
import { getZapas } from "../Actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "./CSS/Filters.css";

export default function Filters() {
    const [marca, setMarca] = useState('default');
    const [color, setColor] = useState('default');
    const [talle, setTalle] = useState('default');
    const dispatch = useDispatch();
    const [filter, setFilter] = useState({
        marcaFilter: "default",
        colorFilter: "default",
        talleFilter: "default",
        order: "default"
    });

    function handleReset(e) {
        e.preventDefault(); //para evitar el renderizado lento
        setFilter({
            marcaFilter: "default",
            colorFilter: "default",
            talleFilter: "default",
            order: "default"
        });
        dispatch(getZapas());
    }

    function handleFilters(event) {
        event.preventDefault(); //para evitar el renderizado lento
        switch (event.target?.value) {
            case 'modeloUp':
                if (marca !== "default" || color !== "default" || talle !== "default") {
                    setFilter({
                        marcaFilter: marca.target.value,
                        colorFilter: color.target.value,
                        talleFilter: talle.target.value,
                        order: "modeloUp"
                    });
                    break;
                }
                setFilter({
                    marcaFilter: marca,
                    colorFilter: color,
                    talleFilter: talle,
                    order: "modeloUp"
                })
                break;
            ;
            case 'modeloDown':
                if (marca !== "default" || color !== "default" || talle !== "default") {
                    setFilter({
                        marcaFilter: marca.target.value,
                        colorFilter: color.target.value,
                        talleFilter: talle.target.value,
                        order: "modeloDown"
                    });
                    break;
                }
                setFilter({
                    marcaFilter: marca,
                    colorFilter: color,
                    talleFilter: talle,
                    order: "modeloDown"
                })
                break;
            ;
            case 'precioUp':
                if (marca !== "default" || color !== "default" || talle !== "default") {
                    setFilter({
                        marcaFilter: marca.target.value,
                        colorFilter: color.target.value,
                        talleFilter: talle.target.value,
                        order: "precioUp"
                    });
                    break;
                }
                setFilter({
                    marcaFilter: marca,
                    colorFilter: color,
                    talleFilter: talle,
                    order: "precioUp"
                })
                break;
            ;
            case 'precioDown':
                if (marca !== "default" || color !== "default" || talle !== "default") {
                    setFilter({
                        marcaFilter: marca.target.value,
                        colorFilter: color.target.value,
                        talleFilter: talle.target.value,
                        order: "precioDown"
                    });
                    break;
                }
                setFilter({
                    marcaFilter: marca,
                    colorFilter: color,
                    talleFilter: talle,
                    order: "precioDown"
                })
                break;
            ;
            default: {
                setFilter({
                    marcaFilter: marca.target.value,
                    colorFilter: color.target.value,
                    talleFilter: talle.target.value,
                });
                break;
            }
        }
    }

    useEffect(() => {
        if (Object.value(filter).find(e => e !== "default")) {
            dispatch(filterZapas(filter));
        }
    }, [filter]);

    
}