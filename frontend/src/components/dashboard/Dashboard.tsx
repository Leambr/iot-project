import { Tab, TabGroup, TabList, TabPanels } from '@tremor/react';
import s from './Dashboard.module.css';

import { AdminstrationPanel } from './AdminstrationPanel';
import React from 'react';

export const Dashboard = () => {
    return (
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
                </TabPanels>
            </TabGroup>
        </div>
    );
};
