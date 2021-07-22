import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import MessageIcon from '@material-ui/icons/Message';
import Divider from '@material-ui/core/Divider';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ArchiveIcon from '@material-ui/icons/Archive';
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import {Route, Switch} from "react-router-dom";
import All_ticket from "./Ticket/all";
import Send_ticket from "./Ticket/Send_ticket";
import Archive_ticket from "./Ticket/Archive_ticket";
import Favorite_ticket from "./Ticket/Favorite_ticket";
import Draft_ticket from "./Ticket/Draft_ticket";
import {Link} from "react-router-dom";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import {Typography} from "@material-ui/core";
import useStyles from "../../Styles/dashboard_style";
const TicketPage = () => {
    const [url,seturl]=useState<string>("");
    const classes =useStyles();
    useEffect(()=>{
        let url_root=document.location.pathname.split("/");
        seturl(url_root[3])
    },[document.location.pathname])


    return (
        <div style={{display:"flex",margin:"50px 5px 5px 5px"}}>
            <div style={{width:"22%"}}>
                <Button startIcon={<MessageIcon/>} style={{boxShadow:"unset",width:"100%",padding:"10px 15px",color:"white"}} variant="contained" color="secondary" >
                    New ticket
                </Button>
                <Divider style={{marginTop:"10px",marginBottom:"10px"}} variant="middle" />


                            <List >
                                <Link to={"/dashboard/ticket"}>

                                <ListItem style={url==undefined? { color:"#fb6761"} :{ color:"#636363"}} >
                                        <ListItemAvatar>
                                            <Avatar style={{backgroundColor:"transparent"}}>
                                                <MailIcon style={url==undefined? { color:"#fb6761"} :{ color:"#636363"}} />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Ticket"
                                        />
                                        <ListItemSecondaryAction>
                                                <div style={url==undefined?{backgroundColor:"#fb6761"}:{backgroundColor:"#dee0e6"}} className={classes.ticketmenucounter}>
                                                    <Typography style={url==undefined? { color:"white",fontSize:"16px"} :{ color:"black",fontSize:"16px"}}>20</Typography>
                                                </div>
                                        </ListItemSecondaryAction>

                                    </ListItem>
                            </Link>

                                <Link to={"/dashboard/ticket/favorite"}>
                                <ListItem style={url=="favorite"? { color:"#fb6761"} :{ color:"#636363"}}>
                                    <ListItemAvatar>
                                        <Avatar style={{backgroundColor:"transparent"}}>
                                            <FavoriteIcon style={url=="favorite"? { color:"#fb6761"} :{ color:"#636363"}} />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Favorite"
                                    />
                                    <ListItemSecondaryAction>
                                        <div style={url=="favorite"?{backgroundColor:"#fb6761"}:{backgroundColor:"#dee0e6"}} className={classes.ticketmenucounter}>
                                            <Typography style={url=="favorite"? { color:"white",fontSize:"16px"} :{ color:"black",fontSize:"16px"}}>12</Typography>
                                        </div>
                                    </ListItemSecondaryAction>

                                </ListItem>
                                </Link>

                                <Link to={"/dashboard/ticket/archive"}>
                                <ListItem style={url=="archive"? { color:"#fb6761"} :{ color:"#636363"}} >
                                    <ListItemAvatar>
                                        <Avatar style={{backgroundColor:"transparent"}}>
                                            <ArchiveIcon style={url=="archive"? { color:"#fb6761"} :{ color:"#636363"}} />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Archive"
                                    />
                                    <ListItemSecondaryAction>
                                        <div style={url=="archive"?{backgroundColor:"#fb6761"}:{backgroundColor:"#dee0e6"}} className={classes.ticketmenucounter}>
                                            <Typography style={url=="archive"? { color:"white",fontSize:"16px"} :{ color:"black",fontSize:"16px"}}>2</Typography>
                                        </div>
                                    </ListItemSecondaryAction>
                                </ListItem>
                                </Link>

                                <Link to={"/dashboard/ticket/send"}>
                                <ListItem style={url=="send"? { color:"#fb6761"} :{ color:"#636363"}} >
                                    <ListItemAvatar>
                                        <Avatar style={{backgroundColor:"transparent"}}>
                                            <SendIcon style={url=="send"? { color:"#fb6761"} :{ color:"#636363"}} />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Send"
                                    />
                                    <ListItemSecondaryAction>
                                        <div style={url=="send"?{backgroundColor:"#fb6761"}:{backgroundColor:"#dee0e6"}} className={classes.ticketmenucounter}>
                                            <Typography style={url=="send"? { color:"white",fontSize:"16px"} :{ color:"black",fontSize:"16px"}}>22</Typography>
                                        </div>
                                    </ListItemSecondaryAction>
                                </ListItem>
                                </Link>

                                <Link to={"/dashboard/ticket/draft"}>
                                <ListItem style={url=="draft"? { color:"#fb6761"} :{ color:"#636363"}} >
                                    <ListItemAvatar>
                                        <Avatar style={{backgroundColor:"transparent"}}>
                                            <DraftsIcon style={url=="draft"? { color:"#fb6761"} :{ color:"#636363"}} />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Draft"
                                    />
                                    <ListItemSecondaryAction>
                                        <div style={url=="draft"?{backgroundColor:"#fb6761"}:{backgroundColor:"#dee0e6"}} className={classes.ticketmenucounter}>
                                            <Typography style={url=="draft"? { color:"white",fontSize:"16px"} :{ color:"black",fontSize:"16px"}}>14</Typography>
                                        </div>
                                    </ListItemSecondaryAction>

                                </ListItem>
                                </Link>
                            </List>



            </div>
            <div style={{width:"33%"}}>
                <Switch>
                    <Route exact path={"/dashboard/ticket"} component={All_ticket} />
                    <Route exact path={"/dashboard/ticket/send"} component={Send_ticket} />
                    <Route exact path={"/dashboard/ticket/archive"} component={Archive_ticket} />
                    <Route exact path={"/dashboard/ticket/favorite"} component={Favorite_ticket} />
                    <Route exact path={"/dashboard/ticket/draft"} component={Draft_ticket} />

                </Switch>

            </div>
            <div style={{width:"45%"}}>a</div>
        </div>
    );
};

export default TicketPage;