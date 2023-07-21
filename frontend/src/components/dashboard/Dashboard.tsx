import { Tab, TabGroup, TabList, TabPanels } from '@tremor/react';
import { useEffect, useState } from 'react';
import { fetchAllRooms } from '../../api/rooms/roomsApi';
import { BackgroundWrapper } from '../backgroundWrapper/BackgroundWrapper';
import { Navbar } from '../navbar/Navbar';
import s from './Dashboard.module.css';
import { AbdosRoomPanel } from './panels/AbdosRoomPanel';
import { AdminstrationPanel } from './panels/AdminstrationPanel';
import { CoursPanel } from './panels/CoursPanel';
import { MachinesPanel } from './panels/MachinesPanel';
import { MenChangingRoom } from './panels/MenChangingRoom';
import { WomenChangingRoom } from './panels/WomenChangingRoom';
import { Room } from '../../api/rooms/types';
import { fetchSensorsByRoomId } from '../../api/sensors/sensorsApi';
import { Sensor } from '../../api/sensors/types';

export const Dashboard = () => {
    const [rooms, setRooms] = useState<Room[]>([]);
    const [sensorData, setSensorData] = useState<Sensor[]>([]);

    useEffect(() => {
        fetchAllRooms()
            .then((roomsData) => {
                setRooms(roomsData);
            })
            .catch((error) => {
                console.error("Une erreur s'est produite :", error);
            });
    }, []);

    useEffect(() => {
        let sensorDataArray = sensorData;
        rooms.map((room) => {
            console.log('room 2ème useEffect', rooms);
            fetchSensorsByRoomId(room.id)
                .then((sensorsData) => {
                    sensorDataArray.push(sensorsData);
                })
                .catch((error) => {
                    console.error("Une erreur s'est produite :", error);
                });
        });

        setSensorData(sensorDataArray);
    }, [rooms]);

    return (
        <>
            <Navbar />

            <BackgroundWrapper>
                <div className={s.dashboardWrapper}>
                    <h1>Dashboard</h1>
                    <TabGroup>
                        <TabList>
                            <Tab> Administration </Tab>
                            <Tab> Machines </Tab>
                            <Tab> Cours </Tab>
                            <Tab> Salle Abdos </Tab>
                            <Tab> Vestiaire Homme </Tab>
                            <Tab> Vestiaire Femme </Tab>
                        </TabList>

                        <TabPanels>
                            <AdminstrationPanel room="Administration" />

                            <MachinesPanel room="Machines" />
                            <CoursPanel room="Cours" />
                            <AbdosRoomPanel room="Salle Abdos" />
                            <MenChangingRoom room="Vestiaire Homme" />
                            <WomenChangingRoom room="Vestiaire Femme" />
                        </TabPanels>
                    </TabGroup>
                </div>
            </BackgroundWrapper>
        </>
    );
};
