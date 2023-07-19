import { useState } from 'react';
import s from './Login.module.css';
import { loginApi } from '../../api/loginApi';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('isNotActive');

    const onHandleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await loginApi(username, password);
            // localStorage.setItem('user', JSON.stringify(response));
            navigate('/');
        } catch (error) {
            setErrorMessage('isActive');
        }
    };

    return (
        <div className={s.loginCard}>
            <p className={s.error + '' + errorMessage}>Identifiants incorrects</p>
            <form className={s.loginForm} onSubmit={onHandleLogin}>
                <div>
                    <h2>Login</h2>
                </div>
                <div className={s.inputContainer}>
                    <label className={s.loginLabel} htmlFor="username">
                        Username
                    </label>
                    <input
                        type="username"
                        placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={s.inputContainer}>
                    <label className={s.loginLabel} htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={s.formButton}>
                    <button type="submit" className={s.loginButton}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}
