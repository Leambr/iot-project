export const fetchSensorsByRoomId = (room_id: string) => {
    const token = localStorage.getItem('user');
    const url = `http://localhost:3123/api/mqttSensorsDataByRoomId/${room_id}`;

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
