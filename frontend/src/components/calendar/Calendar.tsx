import { BackgroundWrapper } from '../backgroundWrapper/BackgroundWrapper';
import { Navbar } from '../navbar/Navbar';
import s from './Calendar.module.css';
import { CalendarAutomation } from './calendarComponents/CalendarAutomation';
import { CalendarNavigation } from './calendarComponents/CalendarNavigation';

export const Calendar = () => {
    return (
        <>
            <Navbar />
            <BackgroundWrapper>
                <div className={s.calendarWrapper}>
                    <h1>Automation Calendar</h1>
                    <div className={s.calendarComponent}>
                        <CalendarNavigation />
                        <CalendarAutomation />
                    </div>
                </div>
            </BackgroundWrapper>
        </>
    );
};
