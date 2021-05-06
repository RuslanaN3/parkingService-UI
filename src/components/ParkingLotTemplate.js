import {makeStyles} from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';


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

    }

}));

const ParkingLotTemplate = (props) => {
    const classes = useStyles({});
    const parkingLot = props.pkLot;

    return (
        <>
            <div className={classes.mainDiv}>
                <div className={classes.layoutParking}>

                    <div className={classes.parkingPanel}>
                        {props.children}
                    </div>
                </div>
                <div className={classes.layoutInformation}>
                    <Typography className={classes.title} variant="h3">PARKING LOT #{parkingLot.id}</Typography>
                    <Divider/>
                    <Typography className={classes.subtitle}>Type: {parkingLot.lotType}</Typography>
                    <Typography className={classes.infoSubtitle}><span style={{color: "#0074E1", fontWeight: '700'}}>{parkingLot.vacantParkingSlotsCount}</span> available
                        slots</Typography>
                    <Typography className={classes.infoSubtitle}>{parkingLot.parkingSlots.length} parking slots</Typography>
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
                </div>
            </div>
        </>
    )
};

export default ParkingLotTemplate;