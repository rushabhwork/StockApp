import React from 'react'
import { Container,Grid ,Card, Typography,Divider,Button} from '@mui/material'
import useStyles from './RighBarTheme';
import Learnings from './learnings/Learnings'



export default function RightBar() {
  const classes = useStyles();

  return (
    <div>

       
<Container >
    <Card className={classes.cardBorder}>
      <Grid   container  direction="column"  justifyContent="center" spacing={1} >
          <Grid item >
            {/* -------------Stock Order--------- */}
            <Button  sx={{background:"#151e28", width:"80%" , margin:"5px 20px", fontSize:"0.65rem"}}>Watch List</Button>
          </Grid>
          <Divider light />

          <Grid item >
            {/* ---------CurrentPrice----------- */}
           <Learnings></Learnings>
          </Grid>
          
          <Grid item xs>
          </Grid>
      </Grid>
    </Card>
</Container>

    
    </div>
  )
}
