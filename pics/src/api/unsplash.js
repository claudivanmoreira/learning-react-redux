import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 4e3cf72a9bdfadabf7a6b9c19e626e58ed94d74c88c78accbe8e2290a8511e9e'
    }
});