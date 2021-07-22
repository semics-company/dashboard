import React from 'react';
import Transaction_table from "../../Components/peyment_table";
import Paper from '@material-ui/core/Paper';
import useStyles from "../../Styles/dashboard_style";
import Typography from "@material-ui/core/Typography";
import Advertimage from "../../assets/images/png/advert.png";
import transaction from "../../assets/images/png/transaction.png"

const TransactionList = () => {
    const classes =useStyles();
    return (
        <div style={{display:"flex",margin:"50px 5px 5px 5px"}}>
            <div style={{width:"75%"}}>
                <Paper style={{padding:"25px",borderRadius:"15px"}} elevation={1} className={classes.Fulldiv}>
                    <Typography style={{paddingBottom:"10px",fontSize:"1.25rem"}}>Payment list</Typography>
                    <Transaction_table/>
                </Paper>
            </div>

            <div style={{width:"25%",backgroundColor:"#13003e",borderRadius:"15px",margin:"1% 15px 15px 15px",height:"fit-content"}}>
                <img style={{width:"100%",marginTop:"-70px"}} src={transaction} alt=""/>

                <Typography style={{color:"#fffeff",fontWeight:"bolder",fontSize:"20px",marginRight:"16px",marginLeft:"16px",marginTop:"20px"}}>What is advert? </Typography>
                <Typography style={{color:"#fffeff",fontSize:"14px",marginRight:"16px",marginLeft:"16px",marginBottom:"16px"}}>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
                </Typography>
            </div>


        </div>
    );
};

export default TransactionList;