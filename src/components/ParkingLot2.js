import React from "react";

import {makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import ParkingSlot11 from "./ParkingSlot";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    parkArea: {
        display: 'flex',
        flex: 4,
        justifyContent: 'center',

    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    greenArea: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#e7e7e7'
    },
    road: {
        display: 'flex',
        flex: 4,
    },
    line: {
        width: '100%',
        backgroundColor: '#e3e3e3',
        height: '1px'
    },
    sectionTitle: {
        color: '#aaaaaa',
        fontWeight: '500'
    },
    dot: {
        display: 'flex',
        height: '25px',
        width: '25px',
        borderRadius: '50%',
        backgroundColor: '#e7e7e7',
        margin: '1vw'
    },
    centerDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    invisibleElem: {
        backgroundColor: '#e7e7e7',
        display: 'flex',
        flex: 1
    }

}));

const ParkingLot2 = ({lot, spSlotNumber}) => {
    const classes = useStyles();
    const slots = lot.parkingSlots.sort(((a, b) => b.slotNumber - a.slotNumber));
    console.log("here", spSlotNumber)

    return (
        <>
            <Paper elevation={0} className={classes.section}>
                <Typography className={classes.sectionTitle} variant="subtitle1">SECTION 4</Typography>
                <div className={classes.line}/>
            </Paper>
            <div className={classes.parkArea}>
                <div className={classes.invisibleElem}/>
                {slots.slice(0, 16).map(ps =>
                    <ParkingSlot11 suitable={ps.slotNumber === spSlotNumber}
                                   slotNumber={ps.slotNumber}
                                   slotStatus={ps.slotStatus}/>)
                }
                <div className={classes.invisibleElem}/>
            </div>
            <Paper elevation={0} className={classes.road}/>
            <div className={classes.parkArea}>
                <div className={classes.invisibleElem}/>
                {slots.slice(16, 29).map(ps =>
                    <ParkingSlot11 suitable={ps.slotNumber === spSlotNumber}
                                   slotNumber={ps.slotNumber}
                                   slotStatus={ps.slotStatus}/>)
                }
                <div className={classes.invisibleElem}/>
            </div>
            <Paper elevation={0} className={classes.greenArea}/>
            <div className={classes.parkArea}>
                <div className={classes.invisibleElem}/>
                <div className={classes.centerDiv}>
                    <div className={classes.dot}/>
                    <div className={classes.dot}/>
                </div>
                {slots.slice(29, 45).map(ps =>
                    <ParkingSlot11 suitable={ps.slotNumber === spSlotNumber}
                                   slotNumber={ps.slotNumber}
                                   slotStatus={ps.slotStatus}/>)
                }
                <div className={classes.centerDiv}>
                    <div className={classes.dot}/>
                    <div className={classes.dot}/>
                </div>
                <div className={classes.invisibleElem}/>

            </div>
            <Paper elevation={0} className={classes.road}/>
            <div className={classes.parkArea}>
                <div className={classes.invisibleElem}/>
                {slots.slice(39, 55).map(ps =>
                    <ParkingSlot11 suitable={ps.slotNumber === spSlotNumber}
                                   slotNumber={ps.slotNumber}
                                   slotStatus={ps.slotStatus}/>)
                }
                <div className={classes.invisibleElem}/>
            </div>
            <Paper elevation={0} className={classes.greenArea}/>
            <div className={classes.parkArea}>

                <ParkingSlot11 slotNumber={slots[45].slotNumber} horizontal slotStatus={slots[45].slotStatus}/>

            </div>
            <Paper elevation={0} className={classes.section}>
                <div className={classes.line}/>
                <Typography className={classes.sectionTitle} variant="subtitle1">SECTION 7</Typography>
            </Paper>
        </>
    )

};
export default ParkingLot2;