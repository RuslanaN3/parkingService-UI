import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Town from "../assets/img/illustr_town.svg"
import Notify from "../assets/img/notify.svg"
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme => ({

    contentText: {
        textAlign: 'center'
    },
    root: {
        textAlign: 'center',
        fontSize: '3vh',
        color: '#e7545a',
        fontWeight: "500"
    },
    town: {
        alignSelf: 'center',
        maxHeight: '20vh',
        width: '100%'
    }

}));

const AlertDialog = ({open, message, notify}) => {
    const classes = useStyles();

    return(
        <Dialog
            open={open}
            fullWidth
            maxWidth="md"
            className={classes.dialog}
        >
            <DialogTitle disableTypography className={classes.root}>Alert</DialogTitle>
            <DialogContent className={classes.content}>
                <DialogContentText className={classes.contentText} variant="h4">
                    {message}
                </DialogContentText>
                <img alt="warning" className={classes.town} src={notify ? Notify : Town} />
            </DialogContent>
        </Dialog>
    )

};
export default AlertDialog;

