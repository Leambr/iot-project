import { AuthentificationFailed } from '../components/login/types';

export  const loginApi = async (username: string, password: string): Promise<any> => {
    
    await fetch('http://localhost:3123/api/login', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ username, password }),
        credentials: 'same-origin',
    }).then((response: Response): AuthentificationFailed | Promise<unknown> => {
        if (response.status === 401) {
            return { success: false, error: 'AUTHENTIFICATION_FAILED' };
        }
        if (!response.ok) {
            console.log(response);            
            throw new Error(`Upstream HTTP error: ${response.status} ${response.statusText}`);
        }
        return response.json().then((data) => {
            console.log('test');
            
            localStorage.setItem('user', JSON.stringify(data));
            console.log('Login Success');
        });
    });
}
