import { makeStyles } from '@material-ui/core/styles';

let  useStyles = makeStyles((theme) => ({

    CurrentPricFlex:{
        display:"flex",
        justifyContent:"space-between",
        alignItems: "center",
        marginBottom:"10px"
    },
    align:{
       textAlign:'left',
       margin:"2px",
       fontWeight:"bolder",
       fontSize:"0.93rem"
    },
    alignCenter:{
        textAlign:'center',
        margin:"2px",
        fontSize:"0.8rem",
        fontWeight:"bold",

    },
    alignRight:{
        textAlign:'right',
        margin:"2px",
        fontSize:"0.8rem"
    }
  }));

  export default useStyles;