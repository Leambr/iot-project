// import { AuthentificationFailed } from '../components/login/types';

export const roomsApi = async (): Promise<any> => {
    await fetch('http://localhost:3123/api/rooms', {
        method: 'GET',
        mode: 'no-cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        // body: JSON.stringify({ username: username, password: password }),
        // credentials: 'same-origin',
    }).then((response: Response): Promise<unknown> => {
        if (!response.ok) {
            console.log(response);
            throw new Error(`Upstream HTTP error: ${response.status} ${response.statusText}`);
        }
        return response.json().then((data) => {
            console.log('test');
            console.log(data);
            // localStorage.setItem('user', JSON.stringify(data));
            // console.log('Login Success');
        });
    });
};
