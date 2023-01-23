import React, { useEffect } from "react";
import { ResponsiveBar } from '@nivo/bar'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from "../../../Actions/index.js";

export function BarUsersOrders() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders())
  }, [])
  const orders = useSelector(state => state.orders)

  const array = [];
  const ordersData = [];
  orders.forEach(e => {
    if (!array.includes(e.usuario)) {
      array.push(e.usuario)
    }
  })
  array.forEach(e => {
    ordersData.push({
      usuario: e,
      gastos: 0
    })
  })
  orders.forEach(e => {
    ordersData.forEach(a => {
      if (a.usuario === e.usuario) {
        a.gastos = a.gastos + Number(e.precioTotal)
      }
    })
  })



  if (ordersData.length > 0) {
    return (
      <div style={{ height: 400, width: '100%' }}>
        <h1>Usuarios vs total de compras</h1>
        <ResponsiveBar
          data={ordersData}
          keys={["gastos"]}
          indexBy="usuario"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.4}
          valueScale={{ type: "linear" }}
          colors="#7eda55"
          animate={true}
          enableLabel={false}
          axisTop={null}
          axisRight={null}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "total",
            legendPosition: "middle",
            legendOffset: -40
          }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Id usuario",
            legendPosition: "middle",
            legendOffset: -40
          }}
        />
      </div>
    )
  }
}
export default BarUsersOrders;