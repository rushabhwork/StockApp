import React from 'react'
import { Typography, ListItem, List, Divider, ListItemAvatar, Avatar, ListItemText } from '@mui/material'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

import useStyles from './ParemeterTheme';

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../../redux/slice/slice'



export default function Parameter(props) {
  const count = useSelector((state) => state)
  console.log(count)
  const classes = useStyles();
  let keyValPair = Object.entries(props.val)
  return (
    <>
    {/* ---------------list parameter---------------------- */}
      <div className={classes.outer}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar sx={{ width: '35px' }}>
              <Avatar sx={{ height: '30px', width: '30px' }} className={classes.avatarBack}>
                <ArrowDropUpIcon></ArrowDropUpIcon>
              </Avatar>
            </ListItemAvatar>
            <ListItemText className={classes.size}>
              <p className={classes.title}>{keyValPair[0][0]}</p>
              <p className={classes.subtitle}>{keyValPair[0][1]}</p>
            </ListItemText>
          </ListItem>

          <Divider variant="inset" component="li" />
        </List>
      </div>
    </>
  )
}
