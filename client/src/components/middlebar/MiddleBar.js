import React from 'react';
import Tabmiddle from './Tabmiddle';
import {  Container } from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';


export default function MiddleBar() {
  // fetch('http://localhost:5000/stockData  ')
  //   .then(response => {
  //     let data = response.json()
  //       return data
  //   }).then( data=>{
  //     console.log(data)
  //   }).catch(error => {
  //     console.log(error)
  //   });

  
  return (
    <div>
        <Container >
            <Tabmiddle> </Tabmiddle>
        </Container >
    </div>
  )
}

