import React, {useEffect, useState} from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import {Typography} from "@material-ui/core";
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import BusinessIcon from '@material-ui/icons/Business';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ViewListIcon from '@material-ui/icons/ViewList';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { fade, makeStyles,withStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import SettingsIcon from '@material-ui/icons/Settings';
import TodayIcon from '@material-ui/icons/Today';
import ForumIcon from '@material-ui/icons/Forum';
import Badge from '@material-ui/core/Badge';
import Add_advert_dialog from "./Dialogs/Add_advert_dialog";
import Add_Order_dialog from "./Dialogs/Add_order";
import Add_comapny_dialog from "./Dialogs/Add_comapny";


const StyledBadge = withStyles((theme: Theme) =>
    createStyles({
        badge: {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: '$ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }),
)(Badge);

const SmallAvatar = withStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 22,
            height: 22,
            border: `2px solid ${theme.palette.background.paper}`,
        },
    }),
)(Avatar);


interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            fontWeight:"bold",
            color: "#262626",
            textTransform:"capitalize",
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        menuitems_active:{
            width:"50px",
            height:"50px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:"8px",
            marginTop:"15px",
            backgroundColor:"#fb6761",
            transitionDuration:"300ms",
            transitionProperty:"all",
            "&:hover": {
                backgroundColor:"#fb6761",
            }
        },
        menuitems:{
            width:"50px",
            height:"50px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:"8px",
            marginTop:"15px",
            transitionDuration:"300ms",
            transitionProperty:"all",
            "&:hover": {
                backgroundColor:"#fb6761",
            }
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
        sidebar:{
            position: "fixed",
            top: "0",
            left: "0",
            height: "100%",
            width: "100px",
            backgroundColor: "#13003e",
            padding: "14px 14px",
            zIndex: 99,
            transition: "all 0.5s ease",
            display:"flex",
            flexDirection:"column",
            alignItems: "center"
        }
    }),
);

function HideOnScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function MenuSideBar(props:any) {
    const [titlevalue,settitlevalue]=useState("");
    const [opensidebar,setopensidebar]=useState(true);
    let sidebar = document.querySelector(".sidebar");
    const [pagename,setpagename]=useState("");
    const [datatimenow,setdatatimenow]=useState<string>("");


    useEffect(()=>{

        setdatatimenow(new Date().toDateString());
    },[])
    const sidebartoggle=()=>{
        if(opensidebar==true){
            setopensidebar(false);
        }else{
            setopensidebar(true);
        }
    }

    useEffect(()=>{
        let path=document.location.pathname;
        let splite_path=path.split("/");
        if(splite_path[2]=="")
        {
            settitlevalue("dashboard")
        }else{
            settitlevalue(splite_path[2])
        }

    },[document.location.pathname])

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );



    return (
        <div style={{backgroundColor:"#13003e"}}>
           <div className={classes.sidebar}>
                    <div>
                        <StyledBadge
                            overlap="circle"
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            variant="dot"
                        >
                            <Avatar style={{width:"50px",height:"50px"}} alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg" />
                        </StyledBadge>

                    </div>

                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%"}}>

                        <Link to={"/dashboard/"}>
                            <Tooltip arrow title="Home" placement="right">
                                <div className={titlevalue=="dashboard"? classes.menuitems_active :classes.menuitems}>
                                    <HomeIcon style={{color:"white"}}/>
                                </div>
                            </Tooltip>
                        </Link>

                        <Link to={"/dashboard/advert"}>
                            <Tooltip arrow title="Advert" placement="right">
                                <div className={titlevalue=="advert"? classes.menuitems_active :classes.menuitems}>
                                    <ArtTrackIcon style={{color:"white"}}/>
                                </div>
                            </Tooltip>
                        </Link>

                        <Link to={"/dashboard/orders"}>
                            <Tooltip arrow title="Order" placement="right">
                                <div className={titlevalue=="orders"? classes.menuitems_active :classes.menuitems}>
                                    <ViewListIcon style={{color:"white"}}/>
                                </div>
                            </Tooltip>
                        </Link>

                        <Link to={"/dashboard/company"}>
                            <Tooltip arrow title="Company" placement="right">
                                <div className={titlevalue=="company"? classes.menuitems_active :classes.menuitems}>
                                    <BusinessIcon style={{color:"white"}}/>
                                </div>
                            </Tooltip>
                        </Link>

                        <Link to={"/dashboard/transaction"}>
                            <Tooltip arrow title="Transactions list" placement="right">
                                <div className={titlevalue=="transaction"? classes.menuitems_active :classes.menuitems}>
                                    <ReceiptIcon style={{color:"white"}}/>
                                </div>
                            </Tooltip>
                        </Link>

                        <Link to={"/dashboard/ticket"}>

                            <Tooltip arrow title="Ticket" placement="right">
                                    <div className={titlevalue=="ticket"? classes.menuitems_active :classes.menuitems}>
                                        <ForumIcon style={{color:"white"}}/>
                                    </div>
                            </Tooltip>
                        </Link>

                    </div>

                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                        <Link to={"/dashboard/setting"}>
                            <Tooltip arrow title="Setting" placement="right">
                                <div className={titlevalue=="setting"? classes.menuitems_active :classes.menuitems}>
                                    <SettingsIcon style={{color:"white"}}/>
                                </div>
                            </Tooltip>
                        </Link>
                    </div>



                </div>

            <div className={"home_content"}>
                <div style={{display:"flex"}}>

                    <div style={{width:"50%",display:"flex",alignItems:"center"}}>
                        <Typography style={{fontSize:"27px",fontWeight:"bolder",textTransform:"capitalize"}}>{titlevalue}</Typography>
                        {titlevalue=="advert" && <Add_advert_dialog/>}
                        {titlevalue=="orders" && <Add_Order_dialog/>}
                        {titlevalue=="company" && <Add_comapny_dialog/>}

                    </div>


                    <div style={{width:"50%",display:"flex",justifyContent:"flex-end"}}>
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Typography>{datatimenow}</Typography>
                            <TodayIcon color={"primary"} style={{margin:"7px"}}/>
                        </div>

                        <Badge style={{margin:"7px"}} badgeContent={4} color="secondary">
                            <NotificationsIcon color={"primary"}/>
                        </Badge>
                        <Badge style={{margin:"7px"}} badgeContent={4} color="secondary">
                            <MailIcon color={"primary"} />
                        </Badge>
                    </div>

                </div>

                <div style={{marginTop:"10px"}}>
                    {props.children}
                </div>
            </div>


        </div>
    );
}
