import { AppointmentModel, ViewState } from '@devexpress/dx-react-scheduler';
import {
    Appointments,
    DateNavigator,
    MonthView,
    Scheduler,
    TodayButton,
    Toolbar,
} from '@devexpress/dx-react-scheduler-material-ui';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import s from '../Calendar.module.css';

export const CalendarNavigation = () => {
    const appointments: AppointmentModel[] = [
        {
            startDate: '2023-07-20T09:45',
            endDate: '2023-07-20T11:00',
            title: 'Yoga',
            id: 0,
            humidity: '24%',
            luminosity: '30%',
            temperature: '18°C',
        },
        {
            startDate: '2023-07-18T12:00',
            endDate: '2023-07-18T13:30',
            title: 'Abdos/Fessiers',
            id: 1,
            humidity: '23.5%',
            luminosity: '20%',
            temperature: '20°C',
        },
        {
            startDate: '2023-07-22T10:00',
            endDate: '2023-07-22T11:30',
            title: 'Box',
            id: 2,
            humidity: '20.4%',
            luminosity: '10%',
            temperature: '22°C',
        },
        {
            startDate: '2023-07-13T09:00',
            endDate: '2023-07-13T10:30',
            title: 'Pilatte',
            id: 3,
            humidity: '14%',
            luminosity: '0%',
            temperature: '18°C',
        },
        {
            startDate: '2023-07-25T14:00',
            endDate: '2023-07-25T15:30',
            title: 'Boxe',
            id: 3,
            humidity: '30%',
            luminosity: '20%',
            temperature: '22.5°C',
        },
    ];

    // const automation = [
    //     {
    //         id: 0,
    //         humidity: '24%',
    //         luminosity: '30%',
    //         temperature: '18°C',
    //     },
    //     {
    //         id: 1,
    //         humidity: '23.5%',
    //         luminosity: '20%',
    //         temperature: '20°C',
    //     },
    //     {
    //         id: 2,
    //         humidity: '20.4%',
    //         luminosity: '10%',
    //         temperature: '22°C',
    //     },
    //     {
    //         id: 3,
    //         humidity: '30%',
    //         luminosity: '20%',
    //         temperature: '22.5°C',
    //     },
    //     {
    //         id: 4,
    //         humidity: '14%',
    //         luminosity: '0%',
    //         temperature: '18°C',
    //     },
    // ];

    const [selectedAppointment, setSelectedAppointment] = useState<AppointmentModel | null>(null);

    const handleAppointmentClick = (appointment: AppointmentModel) => {
        setSelectedAppointment(appointment);
    };

    console.log(appointments);
    return (
        <Paper className={s.calendarScheduler}>
            <Scheduler height={580} data={appointments}>
                <ViewState />
                <MonthView />
                <Toolbar />
                <DateNavigator />
                <TodayButton />

                <Appointments
                    appointmentComponent={(props) => (
                        <Appointments.Appointment {...props}>
                            <div
                                className={s.open}
                                onClick={() => handleAppointmentClick(props.data)}
                            >
                                {props.children}
                            </div>
                        </Appointments.Appointment>
                    )}
                />
            </Scheduler>
            {/* Modale */}
            {selectedAppointment && (
                <div className={s.modal}>
                    <div className={s.modalContent}>
                        <span className={s.close} onClick={() => setSelectedAppointment(null)}>
                            &times;
                        </span>
                        <h2>{selectedAppointment.title}</h2>
                        <div className={s.dateInformation}>
                            <p>
                                Début de l'automatisation :{' '}
                                {selectedAppointment.startDate?.toString()}
                            </p>

                            <p>
                                Fin de l'automatisation : {selectedAppointment.endDate?.toString()}
                            </p>

                            <p>Humidité prévue :{selectedAppointment.humidity?.toString()}</p>
                            <p>Luminosité :{selectedAppointment.luminosity?.toString()}</p>
                            <p>Température prévue :{selectedAppointment.temperature?.toString()}</p>
                        </div>
                    </div>
                </div>
            )}
        </Paper>
    );
};
