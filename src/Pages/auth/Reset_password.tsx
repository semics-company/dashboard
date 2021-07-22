import React, {useEffect} from "react";
import {Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import useStyles from "../../Styles/auth_styles";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EmailIcon from '@material-ui/icons/Email';


const Reset_password=()=>{
    const classes=useStyles();

    return <div className={classes.Inputside}>
        <Typography style={{marginBottom:"10px",fontWeight:"bold"}} variant={"h4"}>Wellcome to Semics ADS!</Typography>
        <Typography variant={"subtitle2"}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to </Typography>
        <div style={{marginTop:"30px"}}>


            <div className="mb-3">
                <TextField style={{marginBottom:"16px"}}  className={classes.textboxclass} id="Email" label="Email" variant="outlined" type={"email"} />
            </div>



            <Button style={{color:"white",fontWeight:"bold",marginTop:"10px"}} className={classes.buttonstyle}>
                Reset password <EmailIcon style={{margin:"5px"}}/>
            </Button>

        </div>
        <Typography variant={"subtitle1"} style={{textAlign:"center",marginTop:"20px"}}>Create new account? <Link className={classes.link} to={"/auth/signup"}>Click here</Link> </Typography>


    </div>

}

export default Reset_password;