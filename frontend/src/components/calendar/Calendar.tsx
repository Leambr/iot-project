import { BackgroundWrapper } from '../backgroundWrapper/BackgroundWrapper';
import { Navbar } from '../navbar/Navbar';
import s from './Calendar.module.css';

export const Calendar = () => {
    return (
        <>
            <Navbar />
            <BackgroundWrapper>
                <h1>Salut Calendar</h1>
            </BackgroundWrapper>
        </>
    );
};
