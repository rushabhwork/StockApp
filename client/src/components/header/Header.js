import React, { useState } from 'react'
import { Typography, Stack, AppBar, Toolbar, IconButton, Badge, Divider, TextField, Autocomplete, Hidden, Container, GridListTile, ListSubheader } from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
// import { makeStyles } from '@material-ui/core/styles';
import useStyles from './HeaderTheme';


export default function Header() {
    const classes = useStyles();
    
    const [list ,setList]= useState()
    const [formData, setFormData] = useState({
        stockName: ""
    })

     // -----------fillData-----------------

    let fillData = (e)=>{
        const newData = {...formData}
        newData[e.target.id]=e.target.value.toLowerCase() ;
        setFormData(newData)

         // POST request using fetch()
        fetch("http://localhost:5000/listData/stockName", {

            method: "POST",
            body: JSON.stringify({
                stockName: formData.stockName
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json())
        .then((json) => {
            setList(json)
            console.log(json)
        });
    }

    // -----------SubmitStock-----------------


    return (
        <div>
            <AppBar sx={{ background: "black" }} position='static'>
                <Toolbar className={classes.nav}>
                    {/* ---------------SITE NAME--------------  */}
                    <Hidden only='xs'>
                        <Typography> Stock App </Typography>
                    </Hidden>

                    {/* ------------------AUTOCOMPLETE--------------- */}

                    <div className='pc-input-main'>
                        <form >
                            <input onChange={(e) => { fillData(e) }} value={formData.stockName} id="stockName" className='pc-input' placeholder='Search stocks ...' type='text'></input>
                            <button  className='pc-input-button' type="submit">Submit</button>
                            <ul className='pc-input-list'>

                                
                                <li>bbdbm nb bn</li>
                               
                            </ul>
                        </form>
                    </div>

                    {/* ----------------ICONS----------------- */}
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                    >
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <AccountBalanceIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error" fontSize="small">
                                <NotificationsIcon fontSize="small" />
                            </Badge>
                        </IconButton>

                    </Stack>
                </Toolbar>
            </AppBar>
        </div>
    )
}

