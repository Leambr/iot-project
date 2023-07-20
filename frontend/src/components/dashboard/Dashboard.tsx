import { Tab, TabGroup, TabList, TabPanels } from '@tremor/react';
import { BackgroundWrapper } from '../backgroundWrapper/BackgroundWrapper';
import { Navbar } from '../navbar/Navbar';
import s from './Dashboard.module.css';
import { AbdosRoomPanel } from './panel/AbdosRoomPanel';
import { AdminstrationPanel } from './panel/AdminstrationPanel';
import { CoursPanel } from './panel/CoursPanel';
import { MachinesPanel } from './panel/MachinesPanel';
import { MenChangingRoom } from './panel/MenChangingRoom';
import { WomenChangingRoom } from './panel/WomenChangingRoom';

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
