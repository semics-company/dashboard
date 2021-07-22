import React, {useEffect} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import {Link} from "react-router-dom"
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import TodosProvider, { TodosContext } from "../../Context/TodosProvider";
import { useContext } from "react";
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Add_order_steper from "../Steper/Add_order_steper";
import Button from "@material-ui/core/Button";

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

export default function Add_Order_dialog() {
    const [open, setOpen] = React.useState(false);
    const { todos, addTodo } = useContext(TodosContext);

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
            <Button startIcon={<AddIcon/>} style={{marginLeft:"20px",marginRight:"20px"}} onClick={handleClickOpen} color="secondary">
                Add new order
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                fullWidth={true}
                maxWidth={"md"}
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add new order
                </DialogTitle>
                <DialogContent>
                    <Add_order_steper/>
                </DialogContent>
                <DialogActions>
                    <br/>
                </DialogActions>
            </Dialog>
        </div>
    );
}
