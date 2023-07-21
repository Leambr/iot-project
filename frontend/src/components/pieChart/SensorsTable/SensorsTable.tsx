import { StatusOnlineIcon, StatusOfflineIcon } from '@heroicons/react/outline';
import { Switch } from '@mui/material';
import s from '../PieChart.module.css';
import {
    Badge,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    Title,
    Text,
} from '@tremor/react';
import { useState } from 'react';

export const SensorsTable = () => {
    const [switchState, setSwitchState] = useState(true);
    const data = [
        {
            id: '9fa47c36-e52f-4698-b655-f7d5a8ce80a1',
            type: 'Température',
            salle: 'Administration',
            status: switchState,
        },
        {
            id: '82710134-af42-4601-a129-0975b48a0e5c',
            type: 'Température',
            salle: 'Machines',
            status: 'active',
        },
        {
            id: '09fc90fc-4d2c-4bc8-bfcb-6b44bfb92302',
            type: 'Température',
            salle: 'Vestiaire Homme',
            status: 'active',
        },
        {
            id: 'dd943e23-4e89-4333-860e-c66483d3e624',
            type: 'Température',
            salle: 'Vestiaires Femme',
            status: 'active',
        },
        {
            id: '93c76f4b-ab2b-422e-81fb-afac6eff8af8',
            type: 'Température',
            salle: 'Salle de cours',
            status: 'active',
        },
        {
            id: '44ef0e92-74ac-42f8-b2a6-ac37dbc149eb',
            type: 'Température',
            salle: 'Salle Abdo',
            status: 'active',
        },
        {
            id: '9fa47c36-e52f-4698-b655-f7d5a8ce80a1',
            type: 'Luminosité',
            salle: 'Administration',
            status: 'active',
        },
        {
            id: '82710134-af42-4601-a129-0975b48a0e5c',
            type: 'Luminosité',
            salle: 'Machines',
            status: 'active',
        },
        {
            id: '09fc90fc-4d2c-4bc8-bfcb-6b44bfb92302',
            type: 'Luminosité',
            salle: 'Vestiaire Homme',
            status: 'active',
        },
        {
            id: 'dd943e23-4e89-4333-860e-c66483d3e624',
            type: 'Luminosité',
            salle: 'Vestiaires Femme',
            status: 'active',
        },
        {
            id: '93c76f4b-ab2b-422e-81fb-afac6eff8af8',
            type: 'Luminosité',
            salle: 'Salle de cours',
            status: 'active',
        },
        {
            id: '44ef0e92-74ac-42f8-b2a6-ac37dbc149eb',
            type: 'Luminosité',
            salle: 'Salle Abdo',
            status: 'active',
        },
    ];

    const handleSwitchButton = (e: any) => {
        setSwitchState(e.target.checked);
    };
    return (
        <Card>
            <Title>Liste des capteurs et dispositifs</Title>
            <Table className="mt-5">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>ID Capteur/Dispositif</TableHeaderCell>
                        <TableHeaderCell>Type</TableHeaderCell>
                        <TableHeaderCell>Salle</TableHeaderCell>
                        <TableHeaderCell>Etat</TableHeaderCell>
                        <TableHeaderCell>Action</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>
                                <Text>{item.type}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{item.salle}</Text>
                            </TableCell>
                            <TableCell className={s.widthColumn}>
                                {item.status === false || item.status === 'inactive' ? (
                                    <Badge color="rose" icon={StatusOfflineIcon}>
                                        {'inactive'}
                                    </Badge>
                                ) : (
                                    <Badge color="emerald" icon={StatusOnlineIcon}>
                                        {'active'}
                                    </Badge>
                                )}
                            </TableCell>
                            <TableCell>
                                <Switch
                                    defaultChecked
                                    onChange={handleSwitchButton}
                                    size="medium"
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    );
};
