import { Route, Routes } from 'react-router-dom';
import s from './App.module.css';
import { Calendar } from './components/calendar/Calendar';
import { Dashboard } from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import { PieChart } from './components/pieChart/PieChart';

function App() {
    return (
        <div className={s.appWrapper}>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/piechart" element={<PieChart />} />
            </Routes>
        </div>
    );
}

export default App;
