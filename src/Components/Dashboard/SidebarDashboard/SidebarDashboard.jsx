import React from 'react';
import style from './SidebarDashboard.module.css';
import NavDashboard from '../NavDashboard/NavDashboard.jsx'
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard';

export default function SidebarDashboard (){
    return (
        <div >
            <Dashboard/>
        </div>
    )
}