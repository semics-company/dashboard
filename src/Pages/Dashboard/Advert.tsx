import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Advert_carts from "../../Components/Advert_carts";
import Advertimage from "../../assets/images/png/advert.png";
import {Typography} from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            maxWidth: "100%",
        },
        demo: {
            backgroundColor: theme.palette.background.paper,
        },
        title: {
            marginBottom:"10px"
        },
        top4carts:{
            margin:"5px",
            width:"100%",
            padding:"20px"
        },
    }),
);




const Advert = () => {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);


    return (
        <div style={{margin:"50px 5px 5px 5px"}}>

            <div style={{display:"flex"}}>
                <div style={{display:"flex",flexWrap:"wrap",width:"75%"}}>
                    <Advert_carts/>
                    <Advert_carts/>
                    <Advert_carts/>
                    <Advert_carts/>
                    <Advert_carts/>
                    <Advert_carts/>
                    <Advert_carts/>
                </div>

                <div style={{width:"25%",backgroundColor:"#13003e",borderRadius:"15px",margin:"1% 15px 15px 15px",height:"fit-content"}}>
                    <img style={{width:"100%",marginTop:"-40px"}} src={Advertimage} alt=""/>

                    <Typography style={{color:"#fffeff",fontWeight:"bolder",fontSize:"20px",marginRight:"16px",marginLeft:"16px",marginTop:"20px"}}>What is advert? </Typography>
                    <Typography style={{color:"#fffeff",fontSize:"14px",marginRight:"16px",marginLeft:"16px",marginBottom:"16px"}}>
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
                    </Typography>
                </div>

            </div>



        </div>
    );
};

export default Advert;