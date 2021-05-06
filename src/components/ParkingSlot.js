import {makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper/Paper";
import React from "react";


const useStyles = makeStyles(theme => ({
    slot: {
        width: '3vw',
        //height: '12vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0.5vw',
        color: props => props.slotStatus === "VACANT" ? '#e4e7e7' : '#6d7070',
        fontWeight: '500',
        backgroundColor: props => props.slotStatus === "VACANT" ? props.suitable ? "#1f9c29" : "#0074E1" : "#e7e7e7",
        fontSize: '1.5vh',
        fontStyle: 'bold',
    },
    slotHorizontal: {
        width: '6vw',
        height: '5vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0.5vw',
        color: props => props.slotStatus === "VACANT" ? '#e4e7e7' : '#6d7070',
        fontWeight: '500',
        backgroundColor: props => props.slotStatus === "VACANT" ? props.suitable ? "#1f9c29" : "#0074E1" : "#e7e7e7",
        fontSize: '1.5vh',
        fontStyle: 'bold',
    },

}));

const ParkingSlot = ({slotNumber, slotStatus, horizontal, slotSign, suitable}) => {
    const classes = useStyles({slotStatus, horizontal, suitable});

    return horizontal ?
        <Paper className={classes.slotHorizontal} elevation={0}>{slotNumber}</Paper> :
        <Paper className={classes.slot} elevation={0}>{slotNumber ? slotNumber : slotSign}</Paper>
};

export default ParkingSlot;