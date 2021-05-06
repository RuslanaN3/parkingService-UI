import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import ParkingLot1 from "../components/ParkingLot1";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import ParkingLot11 from "../components/ParkingLot1";
import Carousel from 'react-material-ui-carousel'
import ParkingLotTemplate from "../components/ParkingLotTemplate";
import ParkingLot2 from "../components/ParkingLot2";
import StatComponent from "../components/StatComponent";

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: '100vh',
        backgroundColor: '#e7e7e7'
    },
    mainTitle: {
        fontSize: '10vh',
        color: "#626262",
        margin: '5vh'
    },
}));

const MainPage = () => {
    const classes = useStyles();

    const [parkingLot, setParkingLot] = useState([]);
    const [spLotId, setSPLotId] = useState(null);
    const [spSlotNumber, setSPSlotNumber] = useState(null);
    const [loading, setLoading] = useState(false);

    let stompClient;

    useEffect(() => {
        const socket = new SockJS('http://localhost:8080/ws');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, () => {
            stompClient.subscribe('/topic/parking-slots-update', (data) => {
                setParkingLot(JSON.parse(data.body));
                setLoading(true)
            });
            stompClient.subscribe('/topic/suitable-parking-slot', (data) => {
                const spLotDto = JSON.parse(data.body);
                setSPLotId(spLotDto.suitableParkingLotId);
                setSPSlotNumber(spLotDto.suitableParkingSlotNumber);
                setTimeout(() => {
                    setSPLotId(null);
                    setSPSlotNumber(null);
                }, 10000);
            });
        });
        return () => socket.close();
    }, [loading]);


    return (
        <div className={classes.container}>
            {loading &&

            <Carousel navButtonsAlwaysInvisible={true}
                      fullHeightHover={false}
                      indicators={false}
                      interval={5000}
                      index={spLotId ? spLotId : 0}
                      autoPlay={!spLotId}
            >
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <Typography className={classes.mainTitle} variant="h1">Parking Assistant</Typography>
                    <div style={{display: 'flex', justifyContent: "space-evenly"}}>
                        {parkingLot.map(pl => <StatComponent parkingLot={pl}/>)}
                    </div>
                </div>
                <ParkingLotTemplate spSlotNumber={spLotId && spLotId === 1 ? spSlotNumber : undefined} lot={parkingLot[0]}>
                    <ParkingLot11 spSlotNumber={spLotId && spLotId === 1 ? spSlotNumber : undefined}
                                  lot={parkingLot[0]}/>
                </ParkingLotTemplate>
                <ParkingLotTemplate spSlotNumber={spLotId && spLotId === 2 ? spSlotNumber : undefined} lot={parkingLot[1]}>
                    <ParkingLot2 spSlotNumber={spLotId && spLotId === 2 ? spSlotNumber : undefined}
                                 lot={parkingLot[1]}/>
                </ParkingLotTemplate>
            </Carousel>}
        </div>
    )
};
export default MainPage;

