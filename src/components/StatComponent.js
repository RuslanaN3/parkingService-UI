import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    statDiv: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        borderRadius: '10px',
        padding: '4vh'
    },
    statTitle: {
        fontSize: '4vh',
        color: "#626262"
    },
    statVacant: {
        fontSize: '5vh',
        color: "#0074E1",
        fontWeight: 500
    },
    statVacantSmall: {
        fontSize: '3vh',
        color: "#009fe1",
        fontWeight: 400
    },
    statSubtitle: {
        fontSize: '2vh',
        color: "#767676"
    }
}));

const StatComponent = ({parkingLot}) => {
    const classes = useStyles();

    return (
        <Paper elevation={0} className={classes.statDiv}>
            <Typography className={classes.statTitle}>
                PARKING LOT {parkingLot.id}
            </Typography>
            <Typography className={classes.statSubtitle}>
                TYPE: {parkingLot.lotType}
            </Typography>
            <Typography className={classes.statVacant}>
                {parkingLot.vacantParkingSlotsCount}
                <span className={classes.statVacantSmall}> available</span>
            </Typography>
        </Paper>
    )
};
export default StatComponent;