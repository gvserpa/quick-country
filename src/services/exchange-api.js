import axios from 'axios'

const key = import.meta.env.VITE_EXCHANGE_KEY

const exchangeAPI = axios.create({
    baseURL: 'https://api.exchangerate.host/',
    params: {
        access_key: key
    }
})

export default exchangeAPI