import axios from 'axios'

export const BASE_URL = 'https://catfact.ninja'
export const catApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
})
