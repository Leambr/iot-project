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

export const Dashboard = () => {
    const [rooms, setRooms] = useState<Room[]>([]);

    useEffect(() => {
        fetchAllRooms()
            .then((roomsData) => {
                console.log('roomsData', roomsData);
                setRooms(roomsData);
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
