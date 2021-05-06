import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import ParkingLot1 from "../components/ParkingLot1";
import SockJS from "sockjs-client";
import Stomp from "stompjs";


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        width: '100%',
        height: '100vh',
        backgroundColor: '#575c60'
    },
    layout: {
        display: 'flex',
        backgroundColor: '#eeeeee',
        borderRadius: '10px',
        width: '100%',
        margin: '3vh',
        padding: '3vh'
    },
    slot: {
        width: '4vw',
        height: '15vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0.5vw',
        color: '#6d7070',
        fontWeight: '500',
        backgroundColor: "lightgreen",
        fontSize: '2.5vh',
        fontStyle: 'bold'
    },
    slotRed: {
        width: '5vw',
        height: '15vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0.5vw',
        color: '#ffffff',
        fontWeight: '500',
        backgroundColor: "#f77d7d",
        fontSize: '2.5vh',
        fontStyle: 'bold'
    },
    parkingPanel: {
        display: 'flex',
        flexDirection: 'column',
        flex: 3,

    },
    informationPanel: {
        backgroundColor: "#cdcdcd",
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        borderRadius: '10px'
    }

}));


const MainPage2 = () => {
    const classes = useStyles();

    const [parkingLot, setParkingLot] = useState([]);
    const [loading, setLoading] = useState(false);

    let stompClient;

    useEffect(() => {
        const socket = new SockJS('http://localhost:8080/ws');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, () => stompClient.subscribe('/topic/parking-slots-update', (data) => {setParkingLot(JSON.parse(data.body)); setLoading(true)}));

        return () => socket.close();
    }, [loading]);

    return (
        <div className={classes.container}>
            {console.log(parkingLot)}
            <div className={classes.layout}>
                {loading &&
                <div className={classes.parkingPanel}>

                    <ParkingLot1 pkLot={parkingLot[0]}/>

                </div>}
                <div className={classes.informationPanel}>
                    <Typography variant="h2">Parking lot №1</Typography>
                    <Typography variant="h3">10 available slots</Typography>
                </div>
            </div>
        </div>
    )
};
export default MainPage2;