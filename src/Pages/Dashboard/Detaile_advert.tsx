import React from 'react';
import Paper from "@material-ui/core/Paper";
import {Typography} from "@material-ui/core";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import useStyles from "../../Styles/dashboard_style";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import LineChart_firstpage from "../../Components/charts/Line_chart_firstpage";
import DoneAllIcon from '@material-ui/icons/DoneAll';
import LineChart_advert from "../../Components/charts/linechart_advert";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import PaymentIcon from "@material-ui/icons/Payment";

const DetaileAdvert = () => {
    const classes=useStyles();

    return (
        <div style={{display:"flex",marginTop:"50px"}}>
            <div style={{width:"75%"}}>
                <div style={{display:"flex",justifyContent:"space-between"}} className={classes.top4cartsmain}>
                    <Paper style={{backgroundColor:"#13003e",borderRadius:"15px"}} elevation={0} className={classes.top2carts}>
                        <div className={classes.alignitemcenter}>
                            <Typography style={{fontWeight:"bold",color:"white"}} variant={"h6"}>
                                539.524 M
                            </Typography>

                            <div style={{backgroundColor:"#fb6761",padding:"5px",borderRadius:"7px"}}>
                                <PlaylistAddCheckIcon style={{fontSize:"40px",color:"#FFF"}}/>
                            </div>

                        </div>

                        <div>
                            <Typography style={{color:"white"}} component={"p"}>
                                total visit count
                            </Typography>
                        </div>

                    </Paper>
                    <Paper style={{backgroundColor:"#13003e",borderRadius:"15px"}} elevation={0} className={classes.top2carts}>
                        <div className={classes.alignitemcenter}>
                            <Typography style={{fontWeight:"bold",color:"white"}} variant={"h6"}>
                                539.524 H
                            </Typography>
                            <div style={{backgroundColor:"#fb6761",padding:"5px",borderRadius:"7px"}}>
                                <AccessTimeIcon style={{fontSize:"40px",color:"#FFF"}}/>
                            </div>

                        </div>

                        <div>
                            <Typography style={{color:"white"}} component={"p"}>
                                remaining watch count
                            </Typography>
                        </div>
                    </Paper>
                </div>

                <div style={{padding:"5px",}} className={classes.top4cartsmain}>

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
                                <Typography style={{fontWeight:"bold",fontSize:"1.2rem",marginTop:"10px"}} component={"h6"}>Company:</Typography>
                                <Typography component={"p"}>Instagram</Typography>

                                <Typography style={{fontWeight:"bold",fontSize:"1.2rem",marginTop:"20px"}} component={"h6"}>Type:</Typography>
                                <Typography component={"p"}>Image</Typography>

                            </div>

                            <div style={{width:"50%"}}>
                                <Typography style={{fontWeight:"bold",fontSize:"1.2rem",marginTop:"10px"}} component={"h6"}>Is active:</Typography>
                                <Typography component={"p"}>Maxdibaxrami@gmail.com</Typography>

                                <Typography style={{fontWeight:"bold",fontSize:"1.2rem",marginTop:"20px"}} component={"h6"}>is verified:</Typography>
                                <Typography component={"p"}>Maxdibaxrami@gmail.com</Typography>

                            </div>


                            <div>
                                <Typography style={{fontWeight:"bold",fontSize:"1.2rem",marginTop:"20px"}} component={"h6"}>Title:</Typography>
                                <Typography component={"p"}>
                                    In publishing and graphic design, Lorem ipsum is a placeholder
                                </Typography>

                                <Typography style={{fontWeight:"bold",fontSize:"1.2rem",marginTop:"20px"}} component={"h6"}>Description:</Typography>
                                <Typography component={"p"}>
                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without
                                </Typography>

                                <Typography style={{fontWeight:"bold",fontSize:"1.2rem",marginTop:"20px"}} component={"h6"}>Create time:</Typography>
                                <Typography component={"p"}>
                                    2020/10/24
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

                <div style={{marginTop:"20px"}} className={classes.chartandmap}>
                    <div style={{width:"100%"}}>
                        <Paper style={{padding:"30px",borderRadius:"15px",margin:"5px"}} elevation={1}>
                            <LineChart_advert/>
                        </Paper>
                    </div>
                </div>


            </div>

            <div style={{width:"25%"}}>
                <div>
                    <div style={{padding:"20px"}}>
                        <Typography style={{fontWeight:"bolder"}}>Last views </Typography>
                    </div>

                    <Paper style={{padding:"20px",borderRadius:"15px",margin:"5px 15px 15px 15px",backgroundColor:"#13003e"}} elevation={1}>
                        <List aria-label="contacts">
                            <ListItem style={{color:"white"}} >
                                <ListItemIcon>
                                    <DoneAllIcon style={{color:"#FFF"}} />
                                </ListItemIcon>
                                <ListItemText primary="Chelsea Otakan" />
                            </ListItem>

                            <ListItem style={{color:"white"}} >
                                <ListItemIcon>
                                    <DoneAllIcon style={{color:"#FFF"}} />
                                </ListItemIcon>
                                <ListItemText primary="Chelsea Otakan" />
                            </ListItem>

                            <ListItem style={{color:"white"}} >
                                <ListItemIcon>
                                    <DoneAllIcon style={{color:"#FFF"}} />
                                </ListItemIcon>
                                <ListItemText primary="Chelsea Otakan" />
                            </ListItem>

                            <ListItem style={{color:"white"}} >
                                <ListItemIcon>
                                    <DoneAllIcon style={{color:"#FFF"}} />
                                </ListItemIcon>
                                <ListItemText primary="Chelsea Otakan" />
                            </ListItem>

                            <ListItem style={{color:"white"}} >
                                <ListItemIcon>
                                    <DoneAllIcon style={{color:"#FFF"}} />
                                </ListItemIcon>
                                <ListItemText primary="Chelsea Otakan" />
                            </ListItem>

                            <ListItem style={{color:"white"}} >
                                <ListItemIcon>
                                    <DoneAllIcon style={{color:"#FFF"}} />
                                </ListItemIcon>
                                <ListItemText primary="Chelsea Otakan" />
                            </ListItem>

                            <ListItem style={{color:"white"}} >
                                <ListItemIcon>
                                    <DoneAllIcon style={{color:"#FFF"}} />
                                </ListItemIcon>
                                <ListItemText primary="Chelsea Otakan" />
                            </ListItem>

                            <ListItem style={{color:"white"}} >
                                <ListItemIcon>
                                    <DoneAllIcon style={{color:"#FFF"}} />
                                </ListItemIcon>
                                <ListItemText primary="Chelsea Otakan" />
                            </ListItem>

                            <ListItem style={{color:"white"}} >
                                <ListItemIcon>
                                    <DoneAllIcon style={{color:"#FFF"}} />
                                </ListItemIcon>
                                <ListItemText primary="Chelsea Otakan" />
                            </ListItem>

                            <ListItem style={{color:"white"}} >
                                <ListItemIcon>
                                    <DoneAllIcon style={{color:"#FFF"}} />
                                </ListItemIcon>
                                <ListItemText primary="Chelsea Otakan" />
                            </ListItem>



                        </List>
                    </Paper>
                </div>
            </div>
            {/*
            <div className={classes.top4cartsmain}>

                <Paper style={{backgroundColor:"#13003e",borderRadius:"15px"}} elevation={0} className={classes.top2carts}>
                    <div className={classes.alignitemcenter}>
                        <Typography style={{fontWeight:"bold",color:"white"}} variant={"h6"}>
                            539.524 M
                        </Typography>

                        <div style={{backgroundColor:"#fb6761",padding:"5px",borderRadius:"7px"}}>
                            <PlaylistAddCheckIcon style={{fontSize:"40px",color:"#FFF"}}/>
                        </div>

                    </div>

                    <div>
                        <Typography style={{color:"white"}} component={"p"}>
                            total visit count
                        </Typography>
                    </div>

                </Paper>

                <Paper style={{backgroundColor:"#13003e",borderRadius:"15px"}} elevation={0} className={classes.top2carts}>
                    <div className={classes.alignitemcenter}>
                        <Typography style={{fontWeight:"bold",color:"white"}} variant={"h6"}>
                            539.524 H
                        </Typography>
                        <div style={{backgroundColor:"#fb6761",padding:"5px",borderRadius:"7px"}}>
                            <AccessTimeIcon style={{fontSize:"40px",color:"#FFF"}}/>
                        </div>

                    </div>

                    <div>
                        <Typography style={{color:"white"}} component={"p"}>
                            remaining watch count
                        </Typography>
                    </div>
                </Paper>


            </div>
            <div style={{padding:"5px"}} className={classes.top4cartsmain}>

                <Paper style={{display:"flex"}} elevation={0} className={classes.Fulldiv}>
                    <div className={classes.div33}>
                        <Avatar style={{width:"90px",height:"90px"}} >
                            <img className={classes.fullwitdh} src={"https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png"}/>
                        </Avatar>
                        <Typography style={{fontWeight:"bold",fontSize:"1.2rem",marginTop:"10px"}} component={"h6"}>The Facebook</Typography>
                        <Typography component={"p"}>Owner : mark zuckerberg</Typography>

                    </div>

                    <div className={classes.div66}>

                        <div style={{width:"50%"}}>
                            <Typography style={{fontWeight:"bold",fontSize:"1.2rem",marginTop:"10px"}} component={"h6"}>Company:</Typography>
                            <Typography component={"p"}>Instagram</Typography>

                            <Typography style={{fontWeight:"bold",fontSize:"1.2rem",marginTop:"20px"}} component={"h6"}>Type:</Typography>
                            <Typography component={"p"}>Image</Typography>

                        </div>

                        <div style={{width:"50%"}}>
                            <Typography style={{fontWeight:"bold",fontSize:"1.2rem",marginTop:"10px"}} component={"h6"}>Is active:</Typography>
                            <Typography component={"p"}>Maxdibaxrami@gmail.com</Typography>

                            <Typography style={{fontWeight:"bold",fontSize:"1.2rem",marginTop:"20px"}} component={"h6"}>is verified:</Typography>
                            <Typography component={"p"}>Maxdibaxrami@gmail.com</Typography>

                        </div>


                        <div>
                            <Typography style={{fontWeight:"bold",fontSize:"1.2rem",marginTop:"20px"}} component={"h6"}>Title:</Typography>
                            <Typography component={"p"}>
                                In publishing and graphic design, Lorem ipsum is a placeholder
                            </Typography>

                            <Typography style={{fontWeight:"bold",fontSize:"1.2rem",marginTop:"20px"}} component={"h6"}>Description:</Typography>
                            <Typography component={"p"}>
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without
                            </Typography>

                            <Typography style={{fontWeight:"bold",fontSize:"1.2rem",marginTop:"20px"}} component={"h6"}>Create time:</Typography>
                            <Typography component={"p"}>
                                2020/10/24
                            </Typography>

                            <Typography style={{fontWeight:"bold",fontSize:"1.2rem",marginTop:"20px"}} component={"h6"}>Category:</Typography>

                            <div style={{marginTop:"20px",display:"flex"}}>
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
                <div className={classes.fiftydiv}>
                    <Paper style={{padding:"20px"}} elevation={0}>
                        <List component="nav" aria-label="contacts">
                            <ListItem button>
                                <ListItemIcon>
                                    <DoneAllIcon />
                                </ListItemIcon>
                                <ListItemText primary="Chelsea Otakan" />
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon>
                                    <DoneAllIcon />
                                </ListItemIcon>
                                <ListItemText primary="Chelsea Otakan" />
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon>
                                    <DoneAllIcon />
                                </ListItemIcon>
                                <ListItemText primary="Chelsea Otakan" />
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon>
                                    <DoneAllIcon />
                                </ListItemIcon>
                                <ListItemText primary="Chelsea Otakan" />
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon>
                                    <DoneAllIcon />
                                </ListItemIcon>
                                <ListItemText primary="Chelsea Otakan" />
                            </ListItem>


                        </List>
                    </Paper>
                </div>

                <div className={classes.fiftydiv}>
                    <Paper style={{padding:"20px"}} elevation={0}>
                        <LineChart_advert/>
                    </Paper>
                </div>

            </div>*/}
        </div>
    );
};

export default DetaileAdvert;