export const fetchSensorsByRoomId = (room_id: string) => {
    const token = localStorage.getItem('user');
    const url = import.meta.env.VITE_IOT_URL + `mqttSensorsDataByRoomId/${room_id}`;

    return fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token,
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((roomsSensorData) => {
            return roomsSensorData.data;
        })
        .catch((error) => {
            throw error;
        });
};
