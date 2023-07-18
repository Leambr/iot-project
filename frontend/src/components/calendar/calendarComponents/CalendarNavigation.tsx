import * as React from 'react';
import s from '../Calendar.module.css';
import { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { AppointmentModel } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    MonthView,
    Toolbar,
    DateNavigator,
    Appointments,
    TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';

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
