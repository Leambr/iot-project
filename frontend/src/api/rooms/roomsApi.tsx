export const fetchAllRooms = () => {
    const token = localStorage.getItem('user');
    const url = import.meta.env.VITE_IOT_URL + 'rooms';

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
        .then((roomsData) => {
            return roomsData.data;
        })
        .catch((error) => {
            throw error;
        });
};
