import { Route, Routes } from 'react-router-dom';
import s from './App.module.css';
import { Calendar } from './components/calendar/Calendar';
import { Dashboard } from './components/dashboard/Dashboard';
import { PieChart } from './components/pieChart/PieChart';
import Login from './components/login/Login';

function App() {
    return (
        <div className={s.appWrapper}>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/piechart" element={<PieChart />} />
            </Routes>
        </div>
    );
}

export default App;
