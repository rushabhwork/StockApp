import React from 'react'
import { Typography,Card ,CardContent,Button,Box,CardActions  } from '@mui/material'


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

export default function Learnings() {
  return (
    <div>

<Card sx={{  margin:"10px 0px", border:"1px solid rgba(0, 0, 0, 0.1)"}}>
      <CardContent>
        <Typography sx={{ fontSize: "0.6rem" }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h7" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1  }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          {/* well meaning and kindly. */}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
</Card>
    </div>
  )
}
