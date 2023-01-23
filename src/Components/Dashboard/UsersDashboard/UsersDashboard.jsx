import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
//import SidebarDashboard from "../SidebarDashboard/SidebarDashboard";
import { getUsers, updateUserAdmin, updateUserEstado } from '../../../Actions';
import PieChart from '../Charts/PieActiveUsers';
import BarUsersOrders from '../Charts/BarUserOrders';

import style from "./UsersDashboard.module.css";

export default function UserDashboard() {

  const columns = [
    { field: '_id', headerName: 'ID' },
    { field: 'email', headerName: 'Email' },
    { field: 'nombre', headerName: 'Nombre' },
    { field: 'estado', headerName: 'Activo' },
    { field: 'admin', headerName: 'Es administrador' },
    {
      field: "Usuario Activo",
      renderCell: (cellValues) => {
        if (cellValues.row.estado == true) {
          return (
            <button
              variant="contained"
              color="primary"
              onClick={(event) => {
                handleClick(event, cellValues);
              }}
            >
              Desactivar
            </button>
          )
        } else {
          return (
            <button
              variant="contained"
              color="primary"
              onClick={(event) => {
                handleClick(event, cellValues);
              }}
            >
              Activar
            </button>
          )
        }
      }
    },
    {
      field: "Admin",
      renderCell: (cellValues) => {
        if (cellValues.row.admin == true) {
          return (
            <button
              variant="contained"
              color="primary"
              onClick={(event) => {
                handleClickAdmin(event, cellValues);
              }}
            >
              Desactivar
            </button>
          )
        } else {
          return (
            <button
              variant="contained"
              color="primary"
              onClick={(event) => {
                handleClickAdmin(event, cellValues);
              }}
            >
              Activar
            </button>
          )
        }
      }
    },
  ];

  const dispatch = useDispatch();

  const handleClick = (event, cellValues) => {
    //console.log(cellValues.row)
    const _id = cellValues.row._id
    const estado1 = cellValues.row.estado
    dispatch(updateUserEstado({_id, estado1}))

  }
  const handleClickAdmin = (event, cellValues) => {
    //console.log(cellValues.row)
    const _id = cellValues.row._id
    const admin1 = cellValues.row.admin
    dispatch(updateUserAdmin({_id, admin1}))
    // navigate("/dashboard/users")
  }
  const handleCellClick = (param, event) => {
    event.stopPropagation();
  };

  const handleRowClick = (param, event) => {
    event.stopPropagation();
  };

  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers())
  }, []);


  return (
    <div >
      <div >
        {/* <SidebarDashboard /> */}
        {users?.length > 0 ? (
          <>
            <h1>USUARIOS REGISTRADOS</h1>
            <div style={{ height: 450, width: '100%' }}>
              <DataGrid
                onCellClick={handleCellClick}
                onRowClick={handleRowClick}
                checkboxSelection
                getRowId={(row) => row._id}
                rows={users}
                columns={columns}
              />
            </div>
          </>
        ) : null}
        <div>
          <PieChart/>
        </div>
        <div>
          <BarUsersOrders/>
        </div>
      </div>
    </div>
  );
}
