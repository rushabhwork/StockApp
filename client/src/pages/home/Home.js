import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import { Typography, Stack, Grid, fabClasses } from '@mui/material'
import RightBar from '../../components/rightBar/RightBar';
import MiddleBar from '../../components/middlebar/MiddleBar';
import LeftBar from '../../components/leftBar/LeftBar';
import useStyles from './HomeTheme'

export default function Home() {
    const classes = useStyles();

    let [apiData, setapiData] = useState("");
    useEffect(() => {
        // -----------------------Calling API--------------------------
        fetch('http://localhost:5000/listData/leftBar')
            .then(response => {
                let data = response.json()
                return data
            }).then(data => {
                setapiData(data)
                // console.log(data)
            }).catch(error => {
                console.log(error)
            });

    }, [])

    return (
        <div>
            {/* -----------HEADER---------- */}
            <Header></Header>

            {/* -----------MAIN---------- */}
            <h1 className={classes.direction}>ksbcjscds</h1>
            <Grid container spacing={1} className={classes.flexDire} >
                <Grid item sm={12} xs={12} md={3} className={classes.flexone}>
                    <LeftBar></LeftBar>
                </Grid>
                <Grid item sm={12} xs={12} md={6} className={classes.flextwo}>
                    <MiddleBar></MiddleBar>
                </Grid>
                <Grid item sm={12} xs={12} md={3} className={classes.flexthree}>
                    <RightBar></RightBar>
                </Grid>
            </Grid>

        </div>
    )
}
