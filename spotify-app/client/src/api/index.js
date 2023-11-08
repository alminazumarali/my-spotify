// const API_BASE_URL = 'http://192.168.1.122:8080';
// const API_KEY = 'YOUR_API_KEY';

// export const sendUserDataToBackend = (userData) => {
//     const requestOptions = {
//         method: 'POST',
//         headers: {
//         'Authorization': `Bearer ${API_KEY}`,
//         'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//     };

//     return fetch(`${API_BASE_URL}/user/addUser`, requestOptions)
//         .then((response) => response.json())
//         .catch((error) => {
//         throw new Error(error.message);
//     });
// };