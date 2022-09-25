import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { registerCtx, updateCtx, delectCtx} from '../../redux/slice/slice'


import { Typography, Stack, AppBar, Toolbar, IconButton, Badge, Divider, TextField, Autocomplete, Hidden, Container, GridListTile, ListSubheader, Input } from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
// import { makeStyles } from '@material-ui/core/styles';
import useStyles from './HeaderTheme';



let  debouncing 
export default function Header() {
    const classes = useStyles();

    const ctxState = useSelector((state) => state);
    const dispatch = useDispatch()
    
    const [list ,setList]= useState()
    const [formData, setFormData] = useState({
        stockName: ""
    })

     // -----------FillData and Debouncing-----------------
    let fillDataHandler = (e)=>{
        const newData = {...formData}
        newData[e.target.id]=e.target.value.toLowerCase() ;
        setFormData(newData)

        //  POST request using fetch()
        //  Debouncing function 
            clearTimeout(debouncing)
        
            debouncing = setTimeout (()=>{
            fetch("http://localhost:5000/listData/stockName",{
            method: "POST",
            body: JSON.stringify({
                  stockName: formData.stockName
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
            }).then(response => response.json() )
            .then((json) => {
                setList(json);
                //  console.log(json)
            });

        },400);
        
    };

    // -----------SubmitStock-----------------

    let setInputValHandler =(e,compnyCode)=>{
     setFormData({stockName : e.target.outerText})
     dispatch( registerCtx({stockKey : e.target.outerText , stockValue : "stockname"}) )
    //   --------featching data after selecting value from header dropdown and updating to Reduxctx for leftBar--------
    // @Input  : state :  new selected stock data
    // @Output : object :  new Updated lefBar stock values


     fetch("http://localhost:5000/listData/leftBar", {
            method: "POST",
            body: JSON.stringify({compnyCode}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
            })
            .then(response => response.json() )
            .then((json) => {
                 console.log(json, "header")
                 dispatch(registerCtx({'stockKey': 'stockAnalysisData','stockValue' : json}) )
            })
             ;
     setList(null);

    //    --------featching data after selecting value from header dropdown and updating to Reduxctx for Graph--------
    // @Input  : state :  new selected stock data
    // @Output : object :  new Updated lefBar stock values

     fetch("http://localhost:5000/listData/stockPriceGraph")
        .then(response => response.json() )
        .then((json) => {
            dispatch(registerCtx({'stockKey': 'stockGraphData','stockValue' : json}) )
        }).catch((err)=> console.log(err));
    }


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
                            <div className='pc-input-parentflex'>
                                <input onChange={(e) => { fillDataHandler(e) }} value={formData.stockName} id="stockName" className='pc-input' placeholder='Search stocks ...' type='text'></input>
                                <button  className='pc-input-button' type="submit">Submit</button>
                            </div>
                            <ul className='pc-input-list'>

                               {list ? list.map(( stockCode, index) =>  <li key={index} onClick={(e)=>setInputValHandler(e, stockCode.compnyCode)}> {stockCode.companyName} </li>) : "" }
                               
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

