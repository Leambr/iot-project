import { BackgroundWrapper } from '../backgroundWrapper/BackgroundWrapper';
import { Navbar } from '../navbar/Navbar';
import s from './PieChart.module.css';

export const PieChart = () => {
    return (
        <>
            <Navbar />
            <BackgroundWrapper>
                <h1>Salut PieChart</h1>
            </BackgroundWrapper>
        </>
    );
};
