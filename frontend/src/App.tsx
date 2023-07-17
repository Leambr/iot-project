import s from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/dashboard/Dashboard';
import { Navbar } from './components/navbar/Navbar';
import { BackgroundWrapper } from './components/backgroundWrapper/BackgroundWrapper';
import Login from './components/login/Login';
import { Calendar } from './components/calendar/Calendar';
import { PieChart } from './components/pieChart/PieChart';

function App() {
    return (
        <div className={s.appWrapper}>
            <Login />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/piechart" element={<PieChart />} />
            </Routes>
        </div>
    );
}

export default App;
