import s from './App.module.css';
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
