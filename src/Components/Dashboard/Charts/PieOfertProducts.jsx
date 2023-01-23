import React, { useEffect } from "react";
import { ResponsivePie } from '@nivo/pie'
import { useDispatch, useSelector } from 'react-redux';
import { getZapas } from "../../../Actions";


export function PieOfertProducts() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getZapas())
  }, [])
  const allZapas = useSelector(state => state.allZapas)

  const zapasData = []
  zapasData.push({
    id: true,
    value: 0,
  })
  zapasData.push({
    id: false,
    value: 0,
  })
  allZapas.forEach(e => {
    zapasData.forEach(a => {
      if (a.id === e.oferta) {
        a.value = a.value + 1
      }
    })
  })

  if (zapasData.length > 0) {
    return (
      <div style={{ height: 400, width: '100%' }}>
        <h1>Productos en oferta</h1>
        <ResponsivePie
          data={zapasData}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#7eda55"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
          legends={[
            {
              anchor: 'bottom',
              direction: 'row',
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: '#7eda55',
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: 'circle',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#7eda55'
                  }
                }
              ]
            }
          ]}
        />
      </div>
    )
  }
}
export default PieOfertProducts;