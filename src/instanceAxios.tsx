import axios from "axios";

const PUBLIC_KEY = '54b0bd438655a9cc47926b90d290d68e';
const HASH = 'a6a1d45e2a72ec3d310c0ce4e0bbd2b1'

export const instance = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public/',
    params: {
        ts: 1,
        apikey: PUBLIC_KEY,        
        hash: HASH
    },
});