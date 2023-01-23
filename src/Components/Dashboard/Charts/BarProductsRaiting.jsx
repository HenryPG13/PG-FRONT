import React, { useEffect } from "react";
import { ResponsiveBar } from '@nivo/bar'
import { useDispatch, useSelector } from 'react-redux';
import { getZapas } from "../../../Actions/index.js";

export function BarProductsRaiting() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getZapas())
  }, [])
  const allzapas = useSelector(state => state.allZapas)



   const array = [];
   allzapas.forEach(e => {
    if(e.calificacion !== 0) {
      array.push(e)
    }
   })
  // const betsData = []
  // bets.forEach(e => {
  //   if (!array.includes(e.userId)) {
  //     array.push(e.userId)
  //   }
  // })
  // array.forEach(e => {
  //   betsData.push({
  //     userId: e,
  //     amount: 0
  //   })
  // })
  // bets.forEach(e => {
  //   betsData.forEach(a => {
  //     if (a.userId === e.userId) {
  //       a.amount = a.amount + Number(e.amount)
  //     }
  //   })
  // })



  if (array.length > 0) {
    return (
      <div style={{ height: 400, width: '100%' }}>
        <h1>Raiting productos</h1>
        <ResponsiveBar
          data={array}
          keys={["calificacion"]}
          indexBy="_id"
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
            legend: "calificacion media",
            legendPosition: "middle",
            legendOffset: -40
          }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Id productos",
            legendPosition: "middle",
            legendOffset: -40
          }}
        />
      </div>
    )
  }
}
export default BarProductsRaiting;