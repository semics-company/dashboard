import React from "react"
import useStyles from "../../Styles/auth_styles";
import Logo from "../../assets/images/logo/logo";
import {Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

interface State {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
  }

const Login=()=>{
    const classes=useStyles();

    const [values, setValues] = React.useState<State>({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
      };

      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };

      const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };



    return <div className={classes.Inputside}>
                <Typography style={{marginBottom:"10px",fontWeight:"bold"}} variant={"h4"}>Wellcome to Semics ADS!</Typography>
                <Typography variant={"subtitle2"}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to </Typography>
                <div style={{marginTop:"30px"}}>
                    <div className="mb-3">
                        <TextField style={{marginBottom:"16px"}}  className={classes.textboxclass} id="Email" label="Email" variant="outlined" type={"email"} />

                    </div>
                    <div className="mb-3" style={{marginBottom:"20px"}}>
                        <TextField className={classes.textboxclass} id="Password" label="Password" variant="outlined" type={"password"} />
                        <div className={classes.textend}>
                            <Typography variant={"subtitle2"}>Forget password? <Link className={classes.link} to={"/auth/Resetpassword"}>Click here</Link> </Typography>
                        </div>
                    </div>



                    <Button style={{color:"white",fontWeight:"bold"}} className={classes.buttonstyle}>
                        Login <ExitToAppIcon style={{margin:"5px"}}/>
                    </Button>

                </div>
                <Typography variant={"subtitle1"} style={{textAlign:"center",marginTop:"20px"}}>Create new account? <Link className={classes.link} to={"/auth/signup"}>Click here</Link> </Typography>


            </div>

}


export default Login;