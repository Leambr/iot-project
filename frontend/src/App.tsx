import s from './App.module.css';
import { Dashboard } from './components/dashboard/Dashboard';
import { Navbar } from './components/navbar/Navbar';
import { BackgroundWrapper } from './components/backgroundWrapper/BackgroundWrapper';
import Login from './components/login/Login';

function App() {
    return (
        <div className={s.appWrapper}>
            <Login />
            {/* <Navbar />
            <BackgroundWrapper>
                <Dashboard />
            </BackgroundWrapper> */}
        </div>
    );
}

export default App;
