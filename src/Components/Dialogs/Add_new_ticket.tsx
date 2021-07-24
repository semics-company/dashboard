import React, {useEffect} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import TodosProvider, { TodosContext } from "../../Context/TodosProvider";
import { useContext } from "react";
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import MessageIcon from "@material-ui/icons/Message";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import TicketImage from "../Ticket_image";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const styles = (theme: Theme) =>
    createStyles({
        root: {
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });

export interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle style={{backgroundColor:"#13003e"}} disableTypography className={classes.root} {...other}>
            <Typography style={{color:"white"}} variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon style={{color:"white"}} />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

export default function Add_new_ticket() {
    const [open, setOpen] = React.useState(false);
    const { todos, addTodo } = useContext(TodosContext);

    const [age, setAge] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(()=>{
        setOpen(false);
    },[todos])

    return (
        <div>
            <Button onClick={handleClickOpen} startIcon={<MessageIcon/>} style={{boxShadow:"unset",width:"100%",padding:"10px 15px",color:"white"}} variant="contained" color="secondary" >
                New ticket
            </Button>

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                fullWidth={true}
                maxWidth={"sm"}
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add new Ticket
                </DialogTitle>
                <DialogContent>
                    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                        <Typography>Dep</Typography>

                        <FormControl variant="outlined">
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                style={{minWidth:"120px"}}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <Typography>Priority</Typography>
                        <FormControl variant="outlined">
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                style={{minWidth:"120px"}}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <AttachFileIcon />
                        </IconButton>

                    </div>

                    <Divider style={{marginTop:"10px",marginBottom:"10px"}} variant="middle" />

                    <div>
                        <TextField size={"small"} style={{width:"100%"}} id="outlined-basic" label="Subject" variant="outlined" />
                        <TextField
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            style={{marginTop:"10px",width:"100%"}}
                            rows={4}
                            variant="outlined"
                        />

                    </div>
                    <div>
                        <Typography style={{fontSize:"14px",marginTop:"5px",marginBottom:"5px"}}>Attachments</Typography>
                        <div style={{display:"flex"}}>
                            <TicketImage/>
                            <TicketImage/>
                            <TicketImage/>

                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <br/>
                </DialogActions>
            </Dialog>
        </div>
    );
}
