import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default function StockPriceGraph() {
  const ctxState = useSelector((state) => state);
  const dispatch = useDispatch()

  const[xyAxisData , setXyAxisData]=useState([0,0])


  console.log(1)
const options = {

    chart: {
        zoomType: 'x'
    },
    title: {
        text: 'Stock Price Graph'
    },
    subtitle: {
        text: document.ontouchstart === undefined ?
            '' : ''
    },
    xAxis: {
        type: 'datetime'
    },
    yAxis: {
        title: {
            text: 'Price rate'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        area: {
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, Highcharts.getOptions().colors[0]],
                    [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                ]
            },
            marker: {
                radius: 2
            },
            lineWidth: 1,
            states: {
                hover: {
                    lineWidth: 1
                }
            },
            threshold: null
        }
    },

    series: [{
        type: 'area',
        name: 'Stock Price',
        data:  ctxState.ctx.stockGraphData ? ctxState.ctx.stockGraphData : xyAxisData

    }]
}
  return (
    < >
      <HighchartsReact highcharts={Highcharts} options={options}  ></HighchartsReact>
    </>
  )
}
