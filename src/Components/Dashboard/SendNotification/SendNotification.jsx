import {io} from "socket.io-client"
import { useEffect } from "react"
import React from "react";
import { useState } from "react";
import SidebarDashboard from '../SidebarDashboard/SidebarDashboard'
import './SendNotification.css'

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
        
    }

    return (
        
       <div className='estrucSendNoti'>
          <SidebarDashboard />
        <div className='recuadroNoti'>
        <h3>Escribí tu notificacion: </h3>
        <form>
        <div className="txtNoti">

        <input onChange={handleInputChange} value={noti}></input>
        
        <label>Notificaión :</label>
        <button onClick={handleNotification} >Mandar Notificación</button>
        </div>
        </form>
        </div>
        </div>


    )

}