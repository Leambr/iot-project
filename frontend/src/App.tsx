import s from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/dashboard/Dashboard';
import { Navbar } from './components/navbar/Navbar';
import { BackgroundWrapper } from './components/backgroundWrapper/BackgroundWrapper';
import Login from './components/login/Login';

function App() {
    return (
        <div className={s.appWrapper}>
            <Login />
        </div>
    );
}

export default App;
