import s from './App.module.css';
import { Dashboard } from './components/dashboard/Dashboard';
import { Navbar } from './components/navbar/Navbar';
import { BackgroundWrapper } from './components/backgroundWrapper/BackgroundWrapper';

function App() {
    return (
        <div className={s.appWrapper}>
            <Navbar />
            <BackgroundWrapper>
                <Dashboard />
            </BackgroundWrapper>
        </div>
    );
}

export default App;
