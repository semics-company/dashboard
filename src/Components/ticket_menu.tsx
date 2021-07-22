import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';import InboxIcon from '@material-ui/icons/Inbox';
import Button from '@material-ui/core/Button';
import MessageIcon from '@material-ui/icons/Message';
import ArchiveIcon from '@material-ui/icons/Archive';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DraftsIcon from '@material-ui/icons/Drafts';
import {Paper} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: "23%",
            marginRight:"2%",

        },
    }),
);

export default function Ticket_menu() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    return (
        <div className={classes.root}>

            <Button
                variant="contained"
                color="primary"
                size="large"
                style={{width:"100%"}}
                endIcon={<MessageIcon />}
            >
                New ticket
            </Button>

            <Paper style={{padding:"10px",marginTop:"10px"}}>
                <List component="nav" aria-label="main mailbox folders">


                    <ListItem
                        button
                        style={{borderRadius:"10px",marginTop:"5px"}}
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Ticket" />
                    </ListItem>

                    <ListItem
                        button
                        selected={selectedIndex === 1}
                        style={{borderRadius:"10px",marginTop:"5px"}}
                        onClick={(event) => handleListItemClick(event, 1)}
                    >
                        <ListItemIcon>
                            <FavoriteIcon />
                        </ListItemIcon>
                        <ListItemText primary="Favorite" />
                    </ListItem>

                    <ListItem
                        button
                        style={{borderRadius:"10px",marginTop:"5px"}}
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                    >
                        <ListItemIcon>
                            <ArchiveIcon />
                        </ListItemIcon>
                        <ListItemText primary="Archive" />
                    </ListItem>

                    <ListItem
                        button
                        style={{borderRadius:"10px",marginTop:"5px"}}
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                    >
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Send" />
                    </ListItem>

                    <ListItem
                        button
                        style={{borderRadius:"10px",marginTop:"5px"}}
                        selected={selectedIndex === 4}
                        onClick={(event) => handleListItemClick(event, 4)}
                    >
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Draft" />
                    </ListItem>

                </List>
            </Paper>
        </div>
    );
}
