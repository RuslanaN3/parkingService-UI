import {makeStyles} from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import Paper from "@material-ui/core/Paper";
import AlertDialog from "./AlertDialog";


const useStyles = makeStyles(theme => ({
    mainDiv: {
        display: 'flex',
        width: '100%',
        height: '100vh',
    },
    layoutParking: {
        display: 'flex',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        width: '100%',
        flex: 4,
        margin: '3vh',
        padding: '3vh'
    },
    layoutInformation: {
        //backgroundColor: "#cdcdcd",
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        borderRadius: '10px',
        margin: '3vh 3vh 3vh 0vh',
        padding: '3vh'
    },
    parkingPanel: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    title: {
        fontSize: '4vh',
        color: "#626262"
    },
    subtitle: {
        fontSize: '3vh',
        color: "#626262",
        margin: '0.2vh 0vh'
    },
    infoSubtitle: {
        fontSize: '3vh',
        fontWeight: '400',
        color: "#7a7a7a",
        margin: '0.2vh 0vh'
    },
    text: {
        fontSize: '2vh',
        color: "#7b7b7b"
    },
    slotsInfoDiv: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: '2vh'
    },
    suitableDiv: {
        margin: '4vh 2vh',
        display: 'flex',
        flexDirection: 'column'
    },
    suitableText: {
        fontSize: '3vh',
        color: "#7b7b7b",
        fontWeight: "400",
    },
    suitablePaper: {
        padding: '2vh 1vh',
        color: '#e4e7e7',
        fontWeight: "500",
        fontSize: "4vh",
        backgroundColor: "#1f9c29",
        borderRadius: '10px',
    }
}));

const ParkingLotTemplate = ({lot, spSlotNumber, plateNotDetected, ...props}) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.mainDiv}>
                <div className={classes.layoutParking}>

                    <div className={classes.parkingPanel}>
                        {props.children}
                    </div>
                </div>
                <div className={classes.layoutInformation}>
                    <Typography className={classes.title} variant="h3">PARKING LOT #{lot.id}</Typography>
                    <Divider/>
                    <Typography className={classes.subtitle}>Type: {lot.lotType}</Typography>
                    <Typography className={classes.infoSubtitle}><span
                        style={{color: "#0074E1", fontWeight: '700'}}>{lot.vacantParkingSlotsCount}</span> available
                        slots</Typography>
                    <Typography className={classes.infoSubtitle}>{lot.parkingSlots.length} parking slots</Typography>
                    <div className={classes.slotsInfoDiv}>
                        <div style={{display: 'flex'}}>
                            <DirectionsCarIcon fontSize="large" style={{color: "#0074E1"}}/>
                            <Typography className={classes.text}>vacant</Typography>
                        </div>
                        <div style={{display: 'flex'}}>
                            <DirectionsCarIcon fontSize="large" style={{color: "#626262"}}/>
                            <Typography className={classes.text}>occupied</Typography>
                        </div>
                    </div>
                    {spSlotNumber &&

                    <div className={classes.suitableDiv}>
                        <Typography className={classes.suitableText}>Suitable slot:</Typography>
                        <Paper elevation={0} className={classes.suitablePaper}> {spSlotNumber}</Paper>
                    </div>
                    }
                </div>
                {!plateNotDetected &&
                <AlertDialog open={lot.vacantParkingSlotsCount === 0} message="Sorry, there aren't available lots"/>}
            </div>
        </>
    )
};

export default ParkingLotTemplate;