import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        margin:0,
        padding:0,
        display:"flex",
        boxSizing:"border-box",
        overflowY:"hidden"
    },
    side:{
        width:"50%",
        padding:"40px",
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        zIndex:10,
        backgroundColor:"white"
    },
    side2:{
        width:"50%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        background: "linear-gradient(90deg, rgba(103,58,183,1) 0%, rgba(127,58,183,1) 35%, rgba(140,58,183,1) 100%)"

    },
    buttonstyle:{
        background: "linear-gradient(90deg, rgba(103,58,183,1) 0%, rgba(127,58,183,1) 35%, rgba(140,58,183,1) 100%)",
        border: 0,
        fontWeight:"bolder",
        width:"100%",
        borderRadius: "5px",
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    Inputside:{
        padding:"60px 40px",
        width:"75%"
    },
    button:{
        width:"100%",
        borderRadius:8
    },
    textboxclass:{
        width:"100%",
    },
    textboxclass_2:{
        width:"49%"
    },
    textend:{
        display:"flex",
        justifyContent:"flex-end",
        marginTop:"10px"
    },
    logotext:{
        padding:"2px 12px",
        borderRadius:5,
        backgroundColor:"#673ab7",
        margin:8,
        fontWeight:600,
        color:"#FFF"
    },
    link:{
        textDecoration:"none"
    }
  });
  

  export default useStyles;