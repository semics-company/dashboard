import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 240;

const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
    fabProgress: {
        color: "secondary",
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,

    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: {
        display: "flex",

    },
    content: {
        flexGrow: 1,

    },
    large: {
        width: "50px",
        height: "50px",
    },
    centerflex:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    centerflex_profile:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"90%",
        borderRadius:"8px"

    },
    profile:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"
    },
    top4carts:{
        margin:"15px",
        width:"100%",
        padding:"20px"
    },
    Rootboardering:{
        margin:"5px",
        width:"100%",
        padding:"20px"
    },
    textboxstyle:{
        width:"48%",
        margin:"1%"
    },
    option: {
        width:"48%",
        margin:"1%",
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
    textboxstylexxl:{
        margin:"1%",
        width:"98%"
    },
    halfdiv:{
        width:"100%"
    },

    top2carts:{
        margin:"5px",
        width:"50%",
        padding:"20px"
    },
    top4cartsmain:{
        display:"flex"
    },
    alignitemcenter:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between"
    },
    ticketmenucounter:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"30px",
        height:"30px",
        borderRadius:"5px",
    },
    chartandmap:{
        display:"flex"
    },
    fiftydiv:{
        width:"50%",
        padding:"5px"
    },
    Fulldiv:{
        width:"100%",
        padding:"5px"
    },
    div33:{
        width:"33.33%",
        display:"flex",
        padding:"20px",
        flexDirection:"column",
        alignItems:"center"
    },
    div66:{
        width:"66.66%",
        display:"flex",
        flexWrap:"wrap",
        padding:"20px",
    },
    fullwitdh:{
        width:"100%",
        height:"100%"
    },
    firstpagebanner:{
        display:"flex",
        justifyContent:"space-between",
        backgroundColor:"#13003e",
        borderRadius:"15px",
        height:"170px"
    },

});


export default useStyles;