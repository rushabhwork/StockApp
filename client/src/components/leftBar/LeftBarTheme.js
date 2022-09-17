import { makeStyles } from '@material-ui/core/styles';

let  useStyles = makeStyles((theme) => ({

    nav: {
      
      display: "flex",
      "justify-content": "space-evenly",
      [theme.breakpoints.down('xs')]: {
        "justify-content": "space-between",
    }
    },
    cardBorder:{
        border:"1px solid rgba(0, 0, 0, 0.1)",
        padding:"10px 10px"
    }
  }));

  export default useStyles;