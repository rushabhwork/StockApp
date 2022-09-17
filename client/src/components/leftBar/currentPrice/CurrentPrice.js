import React, { useState } from 'react';
import { Container,Grid ,Card, Typography} from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import useStyles from  './CurrentPriceTheme'
import { style } from '@mui/system';

export default function CurrentPrice() {
    const classes = useStyles();
    
    let [todaysPrice,SettodaysPrice]=useState(true)

  return (
    <>
        <div className={classes.CurrentPricFlex}>
            <p className={classes.align}>352.30</p>
             <p className={classes.alignCenter} style={ todaysPrice ? { color:'green'} : {color : 'red'} }>0.24%</p> 
            <p  className={classes.alignRight} style={ todaysPrice ? { color:'green'} : {color : 'red'} }>(+0.85)</p>  
        </div> 
    </>
  )
}
