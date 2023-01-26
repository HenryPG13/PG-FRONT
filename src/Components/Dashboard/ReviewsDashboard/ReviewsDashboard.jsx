import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import SidebarDashboard from "../SidebarDashboard/SidebarDashboard.jsx";
import { getReviews } from '../../../Actions/index.js';
import { removeReview } from '../../../Actions/index.js';


export default function ReviewsDashboard() {

  const columns = [
    { field: '_id', headerName: 'ID' },
    { field: 'estado', headerName: 'estado', type: 'boolean', editable: true },
    { field: 'nombre', headerName: 'nombre' },
    { field: 'calificacion', headerName: 'calificacion' },
    { field: 'comentarios', headerName: 'comentarios' },
    { field: 'usuario', headerName: 'id usuario' },
    { field: 'producto', headerName: 'id producto' },

    {
      field: "Cambiar Estado",
      renderCell: (cellValues) => {
        if (cellValues.row.estado === true) {
          return (
            <button
              variant="contained"
              color="primary"
              onClick={(event) => {
              handleClick(event, cellValues);
              }}
            >
              Eliminar
            </button>
          )
        }
      }
    },
  ];

  const dispatch = useDispatch()
  const { reviews } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getReviews())
  }, []);

  const handleClick = (event, cellValues) => {
    const id = cellValues.row._id;
    dispatch(removeReview(id));
    window.location.reload();
  }

  const handleCellClick = (param, event) => {
    event.stopPropagation();
  };

  const handleRowClick = (param, event) => {
    event.stopPropagation();
  };

  return (
    <div className='estrucUserDash'>
        <SidebarDashboard />
      <div className='listadoUsers'>
        {reviews?.length > 0 ? (
          <>
            <h1>TODAS LAS RESEÑAS</h1>
            <div style={{ height: 750, width: '100%' }}>
              <DataGrid
                checkboxSelection
                onCellClick={handleCellClick}
                onRowClick={handleRowClick}
                getRowId={(row) => row._id}
                rows={reviews}
                columns={columns}
              />
            </div>
          </>
        ) : null}

      </div>
    </div>
  );
}
