export const fetchAllRooms = () => {
    const token = localStorage.getItem('user');

    return fetch(`http://localhost:3123/api/rooms`, {
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
