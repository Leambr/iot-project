import * as React from 'react';
import { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    MonthView,
    Toolbar,
    DateNavigator,
    Appointments,
    TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';

export const CalendarNavigation = () => {
    const appointments = [
        {
            title: 'Website Re-Design Plan',
            startDate: new Date(2023, 7, 23, 9, 30),
            endDate: new Date(2023, 7, 23, 11, 30),
            id: 0,
            location: 'Room 1',
        },
        {
            title: 'Book Flights to San Fran for Sales Trip',
            startDate: new Date(2023, 7, 24, 9, 30),
            endDate: new Date(2023, 7, 24, 11, 30),
            id: 1,
            location: 'Room 2',
        },
    ];
    return (
        <Paper>
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
