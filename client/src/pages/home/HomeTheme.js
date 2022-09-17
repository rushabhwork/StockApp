// import { makeStyles } from '@material-ui/core/styles';

// let  useHomeStyles = makeStyles((theme) => ({

//    direction :{
//     dierction :"red",
//     fontSize:"100px"
//    }
      
      
//   }));

//   export default useHomeStyles;

import { makeStyles } from '@material-ui/core/styles';

let  useStyles = makeStyles((theme) => ({

     direction :{
             dierction :"red",
           fontSize:"10px"
            },
    flexDire: {
        display:"grid",
        [theme.breakpoints.up('sm')]: {
                      
          },
    },
    flexone:{
      [theme.breakpoints.between('xs', 'sm')]: {
        order: "1"
      },
    },
    flextwo:{
        [theme.breakpoints.down('md')]: {
            order: "2"
          }
    },
    flexthree:{
        [theme.breakpoints.down('md')]: {
            order: "3"
          }
    }

    
  }));

  export default useStyles;