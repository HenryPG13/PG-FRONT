import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getZapas } from "../../../Actions";
import { updateProduct } from "../../../Actions";
import { Link } from "react-router-dom";
import PieOfertProducts from "../Charts/PieOfertProducts";
import PieActiveProducts from "../Charts/PieActiveProducts";
import BarProductsRaiting from "../Charts/BarProductsRaiting";


import SidebarDashboard from "../SidebarDashboard/SidebarDashboard";

export default function ProductDashboard() {
  const columns = [
    { field: "_id", headerName: "ID" },
    { field: "actividad", headerName: "actividad" },
    { field: "color", headerName: "color" },
    { field: "marca", headerName: "marca" },
    { field: "modelo", headerName: "modelo" },
    { field: "precio", headerName: "precio", type: 'number', editable: true },
    { field: "talle", headerName: "talle" },
    { field: "descripcion", headerName: "descripcion", type: 'string', editable: true },
    { field: "inventario", headerName: "inventario", type: 'number', editable: true },
    { field: "estado", headerName: "estado", type: 'boolean', editable: true },
    { field: "oferta", headerName: "oferta", type: 'boolean', editable: true },

    {
      field: "actualizar",
      renderCell: (cellValues) => {
        return (
          <>
            <input
              type="actualizar"
              variant="contained"
              color="primary"
              onClick={(event) => {
                handleUpdateProduct(event, cellValues);
              }}
              value='Actualizar'
            >

            </input>
          </>
        );
      },
    },
  ];

  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const allzapas = useSelector((state) => state.allZapas);

  useEffect(() => {
    dispatch(getZapas());
  }, []);

  const handleUpdateProduct = (event, cellValues) => {
    const _id = cellValues.row._id;
    const precio = cellValues.row.precio;
    const descripcion = cellValues.row.descripcion;
    const inventario = cellValues.row.inventario;
    const estado = cellValues.row.estado;
    const oferta = cellValues.row.oferta;

    dispatch(updateProduct({ _id, precio, descripcion, inventario, estado, oferta }));
    window.location.reload();
  };

  const handleCellClick = (param, event) => {
    event.stopPropagation();
  };

  const handleRowClick = (param, event) => {
    event.stopPropagation();
  }
  return (

    <div className='estrucUserDash'>
      <SidebarDashboard />
      <div className='listadoUsers'>
        <Link to='/crear'>
          <input type="cargarZapa" value="Cargar Zapas" />
        </Link>


        {allzapas?.length > 0 ? (
          <>
            <h1>Productos</h1>
            <div style={{ height: 450, width: "100%" }}>
              <DataGrid
                columns={columns}
                rows={allzapas}
                getRowId={(row) => row._id}
                onCellClick={handleCellClick}
                onRowClick={handleRowClick}
              />
            </div>
          </>
        ) : null}

        <div>
          <PieOfertProducts />
          <PieActiveProducts />
          <BarProductsRaiting />
        </div>
      </div>
    </div>
  );
};