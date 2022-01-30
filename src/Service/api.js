import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:8000/neki/api'
    
});

export const fazerLogin = () => {
    const url = '/user';
    return api.get(url).then(res => {return  res.data} ) 
    .catch(error=> console.log(error));
}

export default api;