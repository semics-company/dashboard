import React from 'react';
import Paper from '@material-ui/core/Paper';
import useStyles from "../../Styles/dashboard_style";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Chip from '@material-ui/core/Chip';
import Company_visit_chart from "../../Components/charts/compant_visit_chart";
import Company_visit_locations_chart from "../../Components/charts/company_visit_locations_chart";
import FIrstpageMap from "../../Components/maps/FIrstpage_map";
import Companty_detaile_map from "../../Components/maps/company_detaile_map";
import LineChart_advert from "../../Components/charts/linechart_advert";


const DetaileCompany = () => {
    const classes=useStyles();
    return (
        <div style={{display:"flex",margin:"50px 5px 5px 5px"}}>
            <div style={{width:"75%"}}>
                <div style={{padding:"5px"}} className={classes.top4cartsmain}>
                    <Paper style={{display:"flex",borderRadius:"15px"}} elevation={1} className={classes.Fulldiv}>
                        <div className={classes.div33}>
                            <Avatar style={{width:"90px",height:"90px"}} >
                                <img className={classes.fullwitdh} src={"https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png"}/>
                            </Avatar>
                            <Typography style={{fontWeight:"bold",fontSize:"1.2rem",marginTop:"10px"}} component={"h6"}>The Facebook</Typography>
                            <Typography component={"p"}>Owner : mark zuckerberg</Typography>

                        </div>

                        <div className={classes.div66}>

                            <div style={{width:"50%"}}>
                                <Typography style={{fontWeight:"bold",fontSize:"1.2rem",marginTop:"10px"}} component={"h6"}>Telephone:</Typography>
                                <Typography component={"p"}>+989331760059</Typography>

                                <Typography style={{fontWeight:"bold",fontSize:"1.2rem",marginTop:"20px"}} component={"h6"}>Website:</Typography>
                                <Typography component={"p"}>Maxdibaxrami@gmail.com</Typography>

                            </div>

                            <div style={{width:"50%"}}>
                                <Typography style={{fontWeight:"bold",fontSize:"1.2rem",marginTop:"10px"}} component={"h6"}>Email:</Typography>
                                <Typography component={"p"}>Maxdibaxrami@gmail.com</Typography>

                                <Typography style={{fontWeight:"bold",fontSize:"1.2rem",marginTop:"20px"}} component={"h6"}>is verified:</Typography>
                                <Typography component={"p"}>Maxdibaxrami@gmail.com</Typography>

                            </div>


                            <div>
                                <Typography style={{fontWeight:"bold",fontSize:"1.2rem",marginTop:"20px"}} component={"h6"}>Address:</Typography>
                                <Typography component={"p"}>
                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without
                                </Typography>

                                <Typography style={{fontWeight:"bold",fontSize:"1.2rem",marginTop:"20px"}} component={"h6"}>Description:</Typography>
                                <Typography component={"p"}>
                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without
                                </Typography>

                                <Typography style={{fontWeight:"bold",fontSize:"1.2rem",marginTop:"20px"}} component={"h6"}>Category:</Typography>

                                <div style={{marginTop:"20px",display:"flex",flexWrap:"wrap"}}>
                                    <Chip style={{margin:"2px"}} color="primary" label={"mahdi bahrami"}/>
                                    <Chip style={{margin:"2px"}} color="primary" label={"mahdi bahrami"}/>
                                    <Chip style={{margin:"2px"}} color="primary" label={"mahdi bahrami"}/>
                                    <Chip style={{margin:"2px"}} color="primary" label={"mahdi bahrami"}/>
                                    <Chip style={{margin:"2px"}} color="primary" label={"mahdi bahrami"}/>

                                </div>


                            </div>
                        </div>
                    </Paper>
                </div>
                <div className={classes.chartandmap}>
                    <div className={classes.Fulldiv}>
                        <Paper style={{padding:"30px",borderRadius:"15px",margin:"5px"}} elevation={1}>
                            <Company_visit_chart/>
                        </Paper>
                    </div>
                </div>
                <div className={classes.chartandmap}>
                    <div className={classes.Fulldiv}>
                        <Paper style={{padding:"30px",borderRadius:"15px",margin:"5px"}} elevation={1}>
                            <Company_visit_locations_chart/>
                        </Paper>
                    </div>
                </div>
                <div className={classes.chartandmap}>
                    <div className={classes.Fulldiv}>
                        <Paper style={{padding:"30px",borderRadius:"15px",margin:"5px"}} elevation={1}>
                            <div style={{marginBottom:"20px"}}>
                                <Typography style={{fontWeight:"bolder"}}>Daily view report</Typography>
                                <Typography style={{fontSize:"14px"}}>this advert</Typography>

                            </div>

                            <Companty_detaile_map/>
                        </Paper>
                    </div>
                </div>
            </div>

            <div style={{width:"25%"}}>

            </div>



        </div>
    )
};

export default DetaileCompany;