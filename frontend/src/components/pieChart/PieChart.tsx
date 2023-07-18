import { BackgroundWrapper } from '../backgroundWrapper/BackgroundWrapper';
import { Navbar } from '../navbar/Navbar';
import s from './PieChart.module.css';
import { SensorsTable } from './SensorsTable/SensorsTable';

export const PieChart = () => {
    return (
        <>
            <Navbar />
            <BackgroundWrapper>
                <h1>Capteurs et Dispositifs</h1>
                <SensorsTable />
            </BackgroundWrapper>
        </>
    );
};
