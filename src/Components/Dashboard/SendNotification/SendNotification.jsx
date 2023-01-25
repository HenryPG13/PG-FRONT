import {io} from "socket.io-client"
import { useEffect } from "react"
import React from "react";
import { useState } from "react";


export default function SendNotification () {

    const [noti, setNoti] = useState("")
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        setSocket(io("http://localhost:5000"))
    },[])


    const handleInputChange = function(e){
        e.preventDefault()
        setNoti(e.target.value);
    } 

    const handleNotification = () => {

        socket.emit("notificacion", noti)
        setNoti("")
        alert("notificación enviada con exito ;)");
    }

    return (
        <>
        <span>Escribí tu notificacion: </span>
        <input onChange={handleInputChange} value={noti}></input>
        <button onClick={handleNotification} >Mandar Notificación</button>
        </>
    )

}