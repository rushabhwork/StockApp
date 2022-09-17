import { makeStyles } from '@material-ui/core/styles';

let  useStyles = makeStyles((theme) => ({

    nav: {
      
      display: "flex",
      "justify-content": "space-evenly",
      [theme.breakpoints.down('xs')]: {
        "justify-content": "space-between",
    },
      flexDirection :"row",
    //   alignItems: "center",
    },
    autocomp:{
    //    height :"20px" ,
       width: "30%",
       [theme.breakpoints.down('xs')]: {
        width: "60%",
      },
       border :"2px solid red ",
       padding: "0px",
       background:"white",
       
    },
    textfil:{
        paddingLeft: "0px",
        outline: "none",
        border:"none"
      
    }
  }));

  export default useStyles;