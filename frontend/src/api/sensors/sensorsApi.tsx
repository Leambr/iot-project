import { SensorsAPIResponse } from './types';
import { handleApiErrors } from '../../utils/handleApiErrors';

export const fetchSensorsByRoomId = (room_id: string): Promise<SensorsAPIResponse> => {
    const token = localStorage.getItem('user');
    return fetch(`http://localhost:3123/api/getAllSensorsByRoomId/${room_id}`, {
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
};
