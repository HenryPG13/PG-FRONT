import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../Actions";
import { updateOrder } from "../../../Actions";
import BarUsersOrders from "../Charts/BarUserOrders";
import { Link } from "react-router-dom";

export default function OrderDashboard() {

  const columns = [
    { field: "_id", headerName: "ID" },
    { field: "usuario", headerName: "Id usuario" },
    { field: "metodoDePago", headerName: "metodoDePago" },
    { field: "precioEnvio", headerName: "precioEnvio", type: 'number', editable: true },
    { field: "estadoEntrega", headerName: "estadoEntrega", type: 'boolean', editable: true },
    { field: "precioTotal", headerName: "precioTotal"},
    {
      field: "actualizar",
      renderCell: (cellValues) => {
        return (
          <>
            <button
              variant="contained"
              color="primary"
              onClick={(event) => {
                handleUpdateOrder(event, cellValues);
              }}
            >
              Actualizar
            </button>
          </>
        );
      },
    },
    {
      field: "Detalles",
      renderCell: (cellValues) => {
        return (
          <>
            <Link to={`/detalleorden/${cellValues.row._id}`}>
              <button
                variant="contained"
                color="primary"
              >
                Ver mas
              </button>
            </Link>
          </>
        );
      },
    },
  ];

  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const allorders = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const handleUpdateOrder = (event, cellValues) => {
    const _id = cellValues.row._id;
    const estadoEntrega = cellValues.row.estadoEntrega;
    const precioEnvio = cellValues.row.precioEnvio;
    dispatch(updateOrder({ _id, estadoEntrega, precioEnvio }));
  };

  const handleCellClick = (param, event) => {
    event.stopPropagation();
  };

  const handleRowClick = (param, event) => {
    event.stopPropagation();
  }
  return (
    <div >
      <div >
        {/* <SidebarDashboard /> */}
        {allorders?.length > 0 ? (
          <>
            <h1>Ordenes de compra</h1>
            <div style={{ height: 450, width: "100%" }}>
              <DataGrid
                columns={columns}
                rows={allorders}
                getRowId={(row) => row._id}
                onCellClick={handleCellClick}
                onRowClick={handleRowClick}
              />
            </div>
          </>
        ) : null}
        <div>
          <BarUsersOrders />
        </div>
      </div>
    </div>
  );
};