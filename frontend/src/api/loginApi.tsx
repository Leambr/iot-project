import { AuthentificationFailed } from '../components/login/types';

export function loginApi(username: string, password: string): Promise<any> {
    return fetch('http://localhost:8081/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        credentials: 'same-origin',
    }).then((response: Response): AuthentificationFailed | Promise<any> => {
        if (response.status === 401) {
            return { success: false, error: 'AUTHENTIFICATION_FAILED' };
        }
        if (!response.ok) {
            throw new Error(`Upstream HTTP error: ${response.status} ${response.statusText}`);
        }
        return response.json().then((data) => {
            localStorage.setItem('user', JSON.stringify(data));
            console.log('Login Success');
        });
    });
}
