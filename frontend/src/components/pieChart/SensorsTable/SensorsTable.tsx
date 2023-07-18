import { StatusOnlineIcon, StatusOfflineIcon } from '@heroicons/react/outline';
import { Switch } from '@mui/material';
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

export const SensorsTable = () => {
    const data = [
        {
            id: '123432-32',
            type: '112 : Température',
            salle: 'Salle de cours',
            status: 'active',
        },
        {
            id: '123432-32',
            type: '112 : Température',
            salle: 'Salle de cours',
            status: 'active',
        },
        {
            id: '123432-32',
            type: '112 : Température',
            salle: 'Salle de cours',
            status: 'active',
        },
        {
            id: '123432-32',
            type: '112 : Température',
            salle: 'Salle de cours',
            status: 'active',
        },
        {
            id: '123432-32',
            type: '112 : Température',
            salle: 'Salle de cours',
            status: 'active',
        },
        {
            id: '123432-32',
            type: '112 : Température',
            salle: 'Salle de cours',
            status: 'active',
        },
        {
            id: '123432-32',
            type: '112 : Température',
            salle: 'Salle de cours',
            status: 'inactif',
        },
    ];
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
                            <TableCell>
                                {item.status === 'inactif' ? (
                                    <Badge color="rose" icon={StatusOfflineIcon}>
                                        {item.status}
                                    </Badge>
                                ) : (
                                    <Badge color="emerald" icon={StatusOnlineIcon}>
                                        {item.status}
                                    </Badge>
                                )}
                            </TableCell>
                            <TableCell>
                                <Switch size="medium" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    );
};
