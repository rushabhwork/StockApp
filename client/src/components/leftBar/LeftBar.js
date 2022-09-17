import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, Typography, Divider } from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import useStyles from './LeftBarTheme';

import CurrentPrice from './currentPrice/CurrentPrice'
import Parameter from './parameter/Parameter'


export default function LeftBar(props) {
  const classes = useStyles();
  let [cmpData, setcmpData] = useState([])

  useEffect(() => {
    // -----------------------Calling API and sending to parementer comp --------------------------
    fetch('http://localhost:5000/listData/leftBar')
      .then(response => {
        let data = response.json()
        return data
      }).then(data => {
        setcmpData(data)
        // console.log(data)
      }).catch(error => {
        console.log(error)
      });

  }, [])

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
              cmpData.map((currVal, index) => {
                { console.log(currVal, "secound") }
                return <Parameter val={currVal} key={index}></Parameter>
              })

            }
            <Grid item xs>
            </Grid>
          </Grid>
        </Card>
      </Container>

    </div>
  )
}
