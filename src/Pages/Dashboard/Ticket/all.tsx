import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import WorkIcon from '@material-ui/icons/Work';
import Paper from '@material-ui/core/Paper';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ArchiveIcon from '@material-ui/icons/Archive';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            margin:"0px 20px 20px 20px",
            padding:"10px",
            backgroundColor: "#f4f6f8",
            maxHeight:550,
            overflow: 'auto',

        },
    }),
);



const All_ticket = () => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <Paper style={{borderRadius:"8px"}}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <img style={{width:"100%",height:"100%"}} src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg" alt=""/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="hey mahdi bahrami nemidonm " secondary="hey mahdi bahrami nemidonm nemidonm" />
                    <ListItemSecondaryAction style={{display:"flex",flexDirection:"column"}}>


                        <IconButton aria-label="delete" size="small">
                            <FavoriteIcon fontSize="inherit" />
                        </IconButton>
                        <IconButton aria-label="delete" size="small">
                            <ArchiveIcon fontSize="inherit" />
                        </IconButton>


                    </ListItemSecondaryAction>
                </ListItem>
            </Paper>

            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <img style={{width:"100%",height:"100%"}} src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg" alt=""/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="hey mahdi bahrami nemidonm " secondary="hey mahdi bahrami nemidonm nemidonm" />
                <ListItemSecondaryAction style={{display:"flex",flexDirection:"column"}}>


                    <IconButton aria-label="delete" size="small">
                        <FavoriteIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton aria-label="delete" size="small">
                        <ArchiveIcon fontSize="inherit" />
                    </IconButton>


                </ListItemSecondaryAction>
            </ListItem>

            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <img style={{width:"100%",height:"100%"}} src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg" alt=""/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="hey mahdi bahrami nemidonm " secondary="hey mahdi bahrami nemidonm nemidonm" />
                <ListItemSecondaryAction style={{display:"flex",flexDirection:"column"}}>


                    <IconButton aria-label="delete" size="small">
                        <FavoriteIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton aria-label="delete" size="small">
                        <ArchiveIcon fontSize="inherit" />
                    </IconButton>


                </ListItemSecondaryAction>
            </ListItem>

            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <img style={{width:"100%",height:"100%"}} src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg" alt=""/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="hey mahdi bahrami nemidonm " secondary="hey mahdi bahrami nemidonm nemidonm" />
                <ListItemSecondaryAction style={{display:"flex",flexDirection:"column"}}>


                    <IconButton aria-label="delete" size="small">
                        <FavoriteIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton aria-label="delete" size="small">
                        <ArchiveIcon fontSize="inherit" />
                    </IconButton>


                </ListItemSecondaryAction>
            </ListItem>

            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <img style={{width:"100%",height:"100%"}} src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg" alt=""/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="hey mahdi bahrami nemidonm " secondary="hey mahdi bahrami nemidonm nemidonm" />
                <ListItemSecondaryAction style={{display:"flex",flexDirection:"column"}}>


                    <IconButton aria-label="delete" size="small">
                        <FavoriteIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton aria-label="delete" size="small">
                        <ArchiveIcon fontSize="inherit" />
                    </IconButton>


                </ListItemSecondaryAction>
            </ListItem>

            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <img style={{width:"100%",height:"100%"}} src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg" alt=""/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="hey mahdi bahrami nemidonm " secondary="hey mahdi bahrami nemidonm nemidonm" />
                <ListItemSecondaryAction style={{display:"flex",flexDirection:"column"}}>


                    <IconButton aria-label="delete" size="small">
                        <FavoriteIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton aria-label="delete" size="small">
                        <ArchiveIcon fontSize="inherit" />
                    </IconButton>


                </ListItemSecondaryAction>
            </ListItem>

            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <img style={{width:"100%",height:"100%"}} src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg" alt=""/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="hey mahdi bahrami nemidonm " secondary="hey mahdi bahrami nemidonm nemidonm" />
                <ListItemSecondaryAction style={{display:"flex",flexDirection:"column"}}>


                    <IconButton aria-label="delete" size="small">
                        <FavoriteIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton aria-label="delete" size="small">
                        <ArchiveIcon fontSize="inherit" />
                    </IconButton>


                </ListItemSecondaryAction>
            </ListItem>

            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <img style={{width:"100%",height:"100%"}} src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg" alt=""/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="hey mahdi bahrami nemidonm " secondary="hey mahdi bahrami nemidonm nemidonm" />
                <ListItemSecondaryAction style={{display:"flex",flexDirection:"column"}}>


                    <IconButton aria-label="delete" size="small">
                        <FavoriteIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton aria-label="delete" size="small">
                        <ArchiveIcon fontSize="inherit" />
                    </IconButton>


                </ListItemSecondaryAction>
            </ListItem>

        </List>
    );
};

export default All_ticket;