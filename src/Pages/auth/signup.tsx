import React, {useEffect} from "react";
import {Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import useStyles from "../../Styles/auth_styles";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";


const Signup=()=>{
    const classes=useStyles();

    return <div className={classes.Inputside}>
                <Typography style={{marginBottom:"10px",fontWeight:"bold"}} variant={"h4"}>Wellcome to Semics ADS!</Typography>
                <Typography variant={"subtitle2"}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to </Typography>
                <div style={{marginTop:"30px"}}>

                    <div className="mb-3" style={{marginBottom:"20px",display:"flex",justifyContent:"space-between"}}>
                        <TextField className={classes.textboxclass_2} id="firstname" label="First name" variant="outlined" type={"text"} />
                        <TextField className={classes.textboxclass_2} id="lastname" label="Last name" variant="outlined" type={"text"} />
                    </div>

                    <div className="mb-3">
                        <TextField style={{marginBottom:"16px"}}  className={classes.textboxclass} id="Email" label="Email" variant="outlined" type={"email"} />
                    </div>
                    <div className="mb-3" style={{marginBottom:"10px",display:"flex",justifyContent:"space-between"}}>
                        <TextField className={classes.textboxclass_2} id="Password" label="Password" variant="outlined" type={"password"} />
                        <TextField className={classes.textboxclass_2} id="Password" label="Password" variant="outlined" type={"password"} />
                    </div>

                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="In publishing and graphic design, "
                    />

                    <Button style={{color:"white",fontWeight:"bold",marginTop:"10px"}} className={classes.buttonstyle}>
                        Signup <ExitToAppIcon style={{margin:"5px"}}/>
                    </Button>

                </div>
                <Typography variant={"subtitle1"} style={{textAlign:"center",marginTop:"20px"}}>already have account?? <Link className={classes.link} to={"/auth/login"}>Click here</Link> </Typography>


            </div>

}

export default Signup;