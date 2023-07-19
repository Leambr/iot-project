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
    const [sensorsData, setSensorData] = useState<Sensor[]>([]);

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
        fetchSensorsByRoomId('114')
            .then((sensorData) => {
                setSensorData(sensorData);
            })
            .catch((error) => {
                console.error("Une erreur s'est produite :", error);
            });
    }, []);

    return (
        <>
            <Navbar />

            <BackgroundWrapper>
                <div className={s.dashboardWrapper}>
                    <h1>Dashboard</h1>
                    <TabGroup>
                        <TabList>
                            {rooms.map((room) => (
                                <Tab>{room.name}</Tab>
                            ))}
                        </TabList>
                        {rooms.length > 0 ? (
                            <TabPanels>
                                {/* j'ai slice à 4 pour obtenir les données de la salle Administration qui est à l'index 4 de l'array sensorsData */}
                                {sensorsData.slice(4).map((data) => (
                                    <AdminstrationPanel room={data.room_name} />
                                ))}
                                <MachinesPanel room="Machines" />
                                <CoursPanel room="Cours" />
                                <AbdosRoomPanel room="Salle Abdos" />
                                <MenChangingRoom room="Vestiaire Homme" />
                                <WomenChangingRoom room="Vestiaire Femme" />
                            </TabPanels>
                        ) : (
                            <p>Chargement en cours...</p>
                        )}
                    </TabGroup>
                </div>
            </BackgroundWrapper>
        </>
    );
};
