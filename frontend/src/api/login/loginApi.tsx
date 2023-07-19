import { AuthentificationFailed } from './types';

export const loginApi = async (username: string, password: string): Promise<any> => {
    await fetch('http://localhost:3123/api/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ username: username, password: password }),
        credentials: 'same-origin',
    }).then((response: Response): AuthentificationFailed | Promise<unknown> => {
        if (response.status === 401) {
            return { success: false, error: 'AUTHENTIFICATION_FAILED' };
        }
        if (!response.ok) {
            throw new Error(`Upstream HTTP error: ${response.status} ${response.statusText}`);
        }
        return response.json().then((data) => {
            localStorage.setItem('user', JSON.stringify(data.token));
        });
    });
};
