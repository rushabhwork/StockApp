import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, Typography, Divider } from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import useStyles from './LeftBarTheme';

import CurrentPrice from './currentPrice/CurrentPrice'
import Parameter from './parameter/Parameter'

import { useSelector, useDispatch } from 'react-redux'
import { registerCtx, updateCtx, delectCtx} from '../../redux/slice/slice'

export default function LeftBar(props) {
  const classes = useStyles();

  const ctxState = useSelector((state) => state);
  const dispatch = useDispatch()

  let [cmpData, setcmpData] = useState([])

console.log( ctxState.ctx.stockAnalysisData, "leftbar")

  useEffect(() => {
      setcmpData(ctxState.ctx.stockAnalysisData )

  }, [ctxState.ctx.stockAnalysisData , cmpData])
  return (
    <div>

      <Container >
        <Card className={classes.cardBorder}>
          <Grid container direction="column" justifyContent="center" spacing={1} >
            <Grid item >
              {/* -------------Stock Name--------- */}

              <Typography variant="subtitle1" align="left">
                LIC Housing Finance Ltd
                {/* {cmpName} */}
              </Typography>
            </Grid>
            <Grid item >

              {/* ---------CurrentPrice----------- */}

              <CurrentPrice></CurrentPrice>
              <Divider light />
            </Grid>
            {/* --------------StockParameter----------- */}

            {
             cmpData ? cmpData.map((currVal, index) => {
                return <Parameter val={currVal} key={index}></Parameter>
              }) : ''

            }
            <Grid item xs>
            </Grid>
          </Grid>
        </Card>
      </Container>

    </div>
  )
}
