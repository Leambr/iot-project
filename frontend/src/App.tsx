import s from './App.module.css';
import { Dashboard } from './dashboard/Dashboard';
import { Navbar } from './navbar/components/Navbar';

function App() {
    return (
        <div className={s.appWrapper}>
            <Navbar />
            <Dashboard />
        </div>
    );
}

export default App;
