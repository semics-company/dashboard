import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListIcon from '@material-ui/icons/List';
import compant_image from "../../assets/images/png/company.png"
import {Link} from 'react-router-dom'
import Add_comapny_dialog from "../../Components/Dialogs/Add_comapny";
import Advertimage from "../../assets/images/png/advert.png";
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




const Company = () => {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);


    return (
        <div style={{margin:"50px 5px 5px 5px"}}>
            <div style={{display:"flex"}}>

                <div style={{width:"75%"}}>
                    <Paper elevation={1} style={{borderRadius:"15px"}} className={classes.top4carts}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                                <div style={{display:"flex",justifyContent:"space-between"}}>
                                    <Typography variant="h6" className={classes.title}>
                                        Company list
                                    </Typography>


                                </div>
                                <div className={classes.demo}>
                                    <List dense={dense}>

                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <img style={{width:"100%",height:"100%"}} src={"https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png"}/>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary="Facebook"
                                                secondary="this is description of company Facebook"
                                            />
                                            <ListItemSecondaryAction>
                                                <Link to={"/dashboard/company/10"}>
                                                    <IconButton edge="end" aria-label="delete">
                                                        <ListIcon />
                                                    </IconButton>
                                                </Link>
                                            </ListItemSecondaryAction>
                                        </ListItem>

                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <img style={{width:"100%",height:"100%"}} src={"data:image/png;base64,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"}/>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary="Google"
                                                secondary="this is description of company Google"
                                            />
                                            <ListItemSecondaryAction>
                                                <Link to={"/dashboard/company/10"}>
                                                    <IconButton edge="end" aria-label="delete">
                                                        <ListIcon />
                                                    </IconButton>
                                                </Link>
                                            </ListItemSecondaryAction>
                                        </ListItem>

                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <img style={{width:"100%",height:"100%"}} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1024px-Telegram_logo.svg.png"}/>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary="Telegram"
                                                secondary="this is description of company Telegram"
                                            />
                                            <ListItemSecondaryAction>
                                                <Link to={"/dashboard/company/10"}>
                                                    <IconButton edge="end" aria-label="delete">
                                                        <ListIcon />
                                                    </IconButton>
                                                </Link>
                                            </ListItemSecondaryAction>
                                        </ListItem>

                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <img style={{width:"100%",height:"100%"}} src={"data:image/png;base64,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"}/>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary="Whatsapp"
                                                secondary="this is description of company Whatsapp"
                                            />
                                            <ListItemSecondaryAction>
                                                <Link to={"/dashboard/company/10"}>
                                                    <IconButton edge="end" aria-label="delete">
                                                        <ListIcon />
                                                    </IconButton>
                                                </Link>
                                            </ListItemSecondaryAction>
                                        </ListItem>

                                    </List>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>

                <div style={{width:"25%",backgroundColor:"#13003e",borderRadius:"15px",margin:"1% 15px 15px 15px",height:"fit-content"}}>
                    <img style={{width:"100%",marginTop:"-40px"}} src={compant_image} alt=""/>

                    <Typography style={{color:"#fffeff",fontWeight:"bolder",fontSize:"20px",marginRight:"16px",marginLeft:"16px",marginTop:"20px"}}>What is advert? </Typography>
                    <Typography style={{color:"#fffeff",fontSize:"14px",marginRight:"16px",marginLeft:"16px",marginBottom:"16px"}}>
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
                    </Typography>
                </div>

            </div>


        </div>
    );
};

export default Company;