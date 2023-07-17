import s from './Login.module.css';
// import { useNavigate } from 'react-router-dom';

export default function Login() {
    return (
        <div className={s.loginCard}>
            <form className={s.loginForm}>
                <div>
                    <h2>Login</h2>
                </div>
                <div className={s.inputContainer}>
                    <label className={s.loginLabel} htmlFor="username">
                        Username
                    </label>
                    <input type="username" placeholder="username" />
                </div>
                <div className={s.inputContainer}>
                    <label className={s.loginLabel} htmlFor="password">
                        Password
                    </label>
                    <input type="password" placeholder="Password" />
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
