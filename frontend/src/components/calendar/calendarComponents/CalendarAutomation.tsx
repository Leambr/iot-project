import s from '../Calendar.module.css';

export const CalendarAutomation = () => {
    return (
        <div className={s.automationCard}>
            <h2>Automation</h2>
            <div className={s.automatioInfo}>
                <div className={s.sensor}>
                    <p>Dépenses énérgétiques : </p>
                    <span>345 KWh</span>
                </div>
                <div className={s.sensor}>
                    <p>Température prévue : </p>
                    <span>18°C</span>
                </div>
                <div className={s.sensor}>
                    <p>Intensité lumineuse :  </p>
                    <span>45%</span>
                </div>
            </div>
        </div>
    );
};
