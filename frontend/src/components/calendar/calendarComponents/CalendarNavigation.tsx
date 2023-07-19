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

    console.log(appointments);
    return (
        <Paper className={s.calendarScheduler}>
            <Scheduler data={appointments}>
                <ViewState />
                <MonthView />
                <Toolbar />
                <DateNavigator />
                <TodayButton />
                <Appointments />
            </Scheduler>
        </Paper>
    );
};
