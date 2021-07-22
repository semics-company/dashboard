import React from "react"
import useStyles from "../../Styles/auth_styles";
import Logo from "../../assets/images/logo/logo";
import {Typography} from "@material-ui/core";
import Login from "./Login";
import Signup from "./signup";
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";

import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    Redirect,
    useLocation,
    useParams
} from "react-router-dom";
import Reset_password from "./Reset_password";
interface State {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
}

const Auth_main=()=>{
    const classes=useStyles();
    let location = useLocation();

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

    return <div className={classes.root}>
        <div className={classes.side}>
            <Logo/>

            <Switch >
                <Route exact path="/auth/">
                    <Redirect to="/auth/login" />

                </Route>
                <Route exact path="/auth/login" component={Login}/>
                <Route exact path="/auth/signup" component={Signup}/>
                <Route exact path="/auth/Resetpassword" component={Reset_password}/>


            </Switch>

        </div>

        <div className={classes.side2}>
            <div style={{transform:"rotate(315deg)",marginTop:"-150px"}}>
                <Typography className="flex -mx-4 img-ticker" variant={"h1"} style={{fontWeight:"bolder",whiteSpace:"nowrap",transform:"rotate(315deg)",color:"#FFF"}}>overflow-hidden Create new account? Create new account? overflow-hidden Create new account? Create new account? overflow-hidden Create new account? Create new account? </Typography>
                <Typography className="flex -mx-4 img-ticker1" variant={"h1"} style={{fontWeight:"bolder",whiteSpace:"nowrap",transform:"rotate(315deg)",color:"#FFF"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua incididunt ut labore et dolore magna aliqua </Typography>
                <Typography className="flex -mx-4 img-ticker2" variant={"h1"} style={{fontWeight:"bolder",whiteSpace:"nowrap",transform:"rotate(315deg)",color:"#FFF"}}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit  </Typography>
                <Typography className="flex -mx-4 img-ticker" variant={"h1"} style={{fontWeight:"bolder",whiteSpace:"nowrap",transform:"rotate(315deg)",color:"#FFF"}}>overflow-hidden Create new account? Create new account? overflow-hidden Create new account? Create new account? overflow-hidden Create new account? Create new account? </Typography>
                <Typography className="flex -mx-4 img-ticker1" variant={"h1"} style={{fontWeight:"bolder",whiteSpace:"nowrap",transform:"rotate(315deg)",color:"#FFF"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua incididunt ut labore et dolore magna aliqua </Typography>
                <Typography className="flex -mx-4 img-ticker2" variant={"h1"} style={{fontWeight:"bolder",whiteSpace:"nowrap",transform:"rotate(315deg)",color:"#FFF"}}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit  </Typography>
                <Typography className="flex -mx-4 img-ticker" variant={"h1"} style={{fontWeight:"bolder",whiteSpace:"nowrap",transform:"rotate(315deg)",color:"#FFF"}}>overflow-hidden Create new account? Create new account? overflow-hidden Create new account? Create new account? overflow-hidden Create new account? Create new account? </Typography>
                <Typography className="flex -mx-4 img-ticker1" variant={"h1"} style={{fontWeight:"bolder",whiteSpace:"nowrap",transform:"rotate(315deg)",color:"#FFF"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua incididunt ut labore et dolore magna aliqua </Typography>
                <Typography className="flex -mx-4 img-ticker2" variant={"h1"} style={{fontWeight:"bolder",whiteSpace:"nowrap",transform:"rotate(315deg)",color:"#FFF"}}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit  </Typography>

            </div>
        </div>

    </div>
}


export default Auth_main;