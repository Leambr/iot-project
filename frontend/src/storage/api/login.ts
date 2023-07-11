import { AuthentificationFailed, LoginAPIResponse } from '../../login/types';

export function loginApi(username: string, password: string): Promise<LoginAPIResponse> {
    return fetch('login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        credentials: 'same-origin',
    }).then((response: Response): AuthentificationFailed | Promise<LoginAPIResponse> => {
        if (response.status === 401) {
            return { success: false, error: 'AUTHENTIFICATION_FAILED' };
        }
        if (!response.ok) {
            throw new Error(`Upstream HTTP error: ${response.status} ${response.statusText}`);
        }
        return response.json().then(function (json) {
            return { success: true, response: json };
        });
    });
}
