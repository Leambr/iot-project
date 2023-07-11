import { SensorsAPIResponse } from '../../sensors/types';
import { handleApiErrors } from '../../utils/handleApiErrors';

const IOT_URL = 'iot-url'; // le mettre dans le .env et utiliser process.env

export function fetchAllSensors(token: string): Promise<SensorsAPIResponse> {
    return fetch(`${IOT_URL}/sensors`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token,
        },
    }).then((response) =>
        handleApiErrors(response, (response) =>
            response.json().then((json) => ({ success: true, response: json.data }))
        )
    );
}
