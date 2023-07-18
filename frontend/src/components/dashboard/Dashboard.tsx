import { Tab, TabGroup, TabList, TabPanels, Grid, Col } from '@tremor/react';
import { BackgroundWrapper } from '../backgroundWrapper/BackgroundWrapper';
import { Navbar } from '../navbar/Navbar';
import s from './Dashboard.module.css';
import { AbdosRoomPanel } from './panels/AbdosRoomPanel';
import { AdminstrationPanel } from './panels/AdminstrationPanel';
import { CoursPanel } from './panels/CoursPanel';
import { MachinesPanel } from './panels/MachinesPanel';
import { MenChangingRoom } from './panels/MenChangingRoom';
import { WomenChangingRoom } from './panels/WomenChangingRoom';

export const Dashboard = () => {
    return (
        <>
            <Navbar />

            <BackgroundWrapper>
                <div className={s.dashboardWrapper}>
                    <h1>Dashboard</h1>
                    <TabGroup>
                        <TabList>
                            <Tab>Administration</Tab>
                            <Tab>Machines</Tab>
                            <Tab>Cours</Tab>
                            <Tab>Salle abdos</Tab>
                            <Tab>Vestiaire homme</Tab>
                            <Tab>Vestiaire femme</Tab>
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
