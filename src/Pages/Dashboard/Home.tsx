import React from 'react';
import Paper from '@material-ui/core/Paper';
import useStyles from "../../Styles/dashboard_style";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import PaymentIcon from '@material-ui/icons/Payment';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {Typography} from "@material-ui/core";
import FirstpageMap from "../../Components/maps/FIrstpage_map";
import LineChart_firstpage from "../../Components/charts/Line_chart_firstpage";
import ColChartFirstpage from "../../Components/charts/col_chart_firstpage";
import dataanalizeimage from "../../assets/images/png/Data.png"

const Home = () => {
    const classes=useStyles();

    return (
        <main style={{display:"flex",marginTop:"50px"}}>

            <div style={{width:"70%"}}>
                <div className={classes.firstpagebanner}>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",paddingLeft:"30px"}}>
                        <Typography style={{color:"#fffeff",fontSize:"18px"}}>Wellcome mahdi </Typography>
                        <Typography style={{color:"#fffeff",fontWeight:"bolder",fontSize:"24px"}}>Check your data analyze in chart and map</Typography>
                    </div>

                    <div>
                        <img style={{width:"240px",height:"240px",marginTop:"-33px"}} src={dataanalizeimage} alt=""/>
                    </div>

                </div>


                <div style={{marginTop:"40px"}} className={classes.chartandmap}>
                    <div style={{width:"100%"}}>
                        <Paper style={{padding:"30px",borderRadius:"15px"}} elevation={1}>
                            <ColChartFirstpage/>
                        </Paper>
                    </div>
                </div>

                <div style={{marginTop:"20px"}} className={classes.chartandmap}>
                    <div style={{width:"100%"}}>
                        <Paper style={{padding:"30px",borderRadius:"15px"}} elevation={1}>
                            <LineChart_firstpage/>
                        </Paper>
                    </div>
                </div>
                <div style={{marginTop:"20px"}} className={classes.chartandmap}>
                    <div style={{width:"100%"}}>
                        <Paper style={{padding:"30px",borderRadius:"15px"}} elevation={1}>
                            <div>
                                <Typography style={{fontWeight:"bolder"}}>Daily view report in map</Typography>
                                <Typography style={{fontSize:"14px"}}>Click on area </Typography>
                            </div>
                            <FirstpageMap/>
                        </Paper>
                    </div>
                </div>


            </div>

            <div style={{width:"30%"}}>
                <div style={{padding:"20px"}}>
                    <Typography style={{fontWeight:"bolder"}}>Daily view report in map</Typography>
                    <Typography style={{fontSize:"14px"}}>Click on area </Typography>
                </div>
                <Paper style={{borderRadius:"15px",backgroundColor:"#13003e"}} elevation={1} className={classes.top4carts}>
                    <div className={classes.alignitemcenter}>
                        <Typography style={{fontWeight:"bold",color:"white"}} variant={"h6"}>
                            539.524 M
                        </Typography>

                        <div style={{backgroundColor:"#fb6761",padding:"5px",borderRadius:"7px"}}>
                            <ArtTrackIcon style={{fontSize:"40px",color:"#FFF"}}/>
                        </div>

                    </div>

                    <div>
                        <Typography style={{color:"white"}} component={"p"}>
                            Total orders
                        </Typography>
                    </div>

                </Paper>
                <Paper style={{borderRadius:"15px",backgroundColor:"#13003e"}} elevation={1} className={classes.top4carts}>
                    <div className={classes.alignitemcenter}>
                        <Typography style={{fontWeight:"bold",color:"white"}} variant={"h6"}>
                            539.524 M
                        </Typography>

                        <div style={{backgroundColor:"#fb6761",padding:"5px",borderRadius:"7px"}}>
                            <PaymentIcon style={{fontSize:"40px",color:"#FFF"}}/>

                        </div>

                    </div>

                    <div>
                        <Typography style={{color:"white"}} component={"p"}>
                            Total payment
                        </Typography>
                    </div>

                </Paper>
                <Paper style={{borderRadius:"15px",backgroundColor:"#13003e"}} elevation={1} className={classes.top4carts}>
                    <div className={classes.alignitemcenter}>
                        <Typography style={{fontWeight:"bold",color:"white"}} variant={"h6"}>
                            539.524 M
                        </Typography>

                        <div style={{backgroundColor:"#fb6761",padding:"5px",borderRadius:"7px"}}>
                            <PermMediaIcon style={{fontSize:"40px",color:"#FFF"}}/>


                        </div>

                    </div>

                    <div>
                        <Typography style={{color:"white"}} component={"p"}>
                            Total ads
                        </Typography>
                    </div>

                </Paper>
                <Paper style={{borderRadius:"15px",backgroundColor:"#13003e"}} elevation={1} className={classes.top4carts}>
                    <div className={classes.alignitemcenter}>
                        <Typography style={{fontWeight:"bold",color:"white"}} variant={"h6"}>
                            539.524 M
                        </Typography>

                        <div style={{backgroundColor:"#fb6761",padding:"5px",borderRadius:"7px"}}>
                        <VisibilityIcon style={{fontSize:"40px",color:"#FFF"}}/>


                        </div>

                    </div>

                    <div>
                        <Typography style={{color:"white"}} component={"p"}>
                            Total Visit
                        </Typography>
                    </div>

                </Paper>



            </div>






            {/*
            <div className={classes.top4cartsmain}>

                <Paper elevation={0} className={classes.top4carts}>
                    <div className={classes.alignitemcenter}>
                        <Typography style={{fontWeight:"bold"}} variant={"h6"}>
                            539.524 M
                        </Typography>

                        <ArtTrackIcon style={{fontSize:"45px"}}/>

                    </div>

                    <div>
                        <Typography component={"p"}>
                            Total orders
                        </Typography>
                    </div>

                </Paper>

                <Paper elevation={0} className={classes.top4carts}>
                    <div className={classes.alignitemcenter}>
                        <Typography style={{fontWeight:"bold"}} variant={"h6"}>
                            539.524 M
                        </Typography>

                        <PaymentIcon style={{fontSize:"40px"}}/>

                    </div>

                    <div>
                        <Typography component={"p"}>
                            Total payment
                        </Typography>
                    </div>
                </Paper>

                <Paper elevation={0} className={classes.top4carts}>
                    <div className={classes.alignitemcenter}>
                        <Typography style={{fontWeight:"bold"}} variant={"h6"}>
                            539.524 M
                        </Typography>
                        <PermMediaIcon style={{fontSize:"40px"}}/>
                    </div>

                    <div>
                        <Typography component={"p"}>
                            Total ads
                        </Typography>
                    </div>
                </Paper>

                <Paper elevation={0} className={classes.top4carts}>

                    <div className={classes.alignitemcenter}>
                        <Typography style={{fontWeight:"bold"}} variant={"h6"}>
                            539.524 M
                        </Typography>
                        <VisibilityIcon style={{fontSize:"40px"}}/>

                    </div>

                    <div>
                        <Typography component={"p"}>
                            Total Visit
                        </Typography>
                    </div>

                </Paper>

            </div>

            <div className={classes.chartandmap}>
                <div className={classes.fiftydiv}>
                    <Paper style={{padding:"20px"}} elevation={0}>
                        <ColChartFirstpage/>
                    </Paper>
                </div>

                <div className={classes.fiftydiv}>
                    <Paper style={{padding:"20px"}} elevation={0}>
                        <LineChart_firstpage/>
                    </Paper>
                </div>

            </div>

            <div className={classes.chartandmap}>
                <div className={classes.Fulldiv}>
                    <Paper style={{padding:"20px"}} elevation={0}>
                        <FirstpageMap/>
                    </Paper>
                </div>
            </div>

            */}
        </main>
    );
};

export default Home;