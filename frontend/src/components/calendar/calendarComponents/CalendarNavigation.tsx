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
            endDate: '2023-07-22T11:00',
            title: 'Yoga',
        },
        {
            startDate: '2023-07-18T12:00',
            endDate: '2023-07-18T13:30',
            title: 'Abdos/Fessiers',
        },
    ];

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
                        </div>
                    </div>
                </div>
            )}
        </Paper>
    );
};
