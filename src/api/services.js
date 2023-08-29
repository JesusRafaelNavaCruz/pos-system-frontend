import axios from 'axios';

export const loginRequest = async (credentials) => {
    try {
        const response = await axios.post("http://localhost:3000/api/users/signin", credentials);
        return response.data;
    } catch(error) {
        throw new Error(error)
    }
}