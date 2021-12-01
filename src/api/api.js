import axios from 'axios'

const clientAPI = axios.create({
  baseURL: window.apiConfig.url,
});

export function getContent() {
  try {
    return clientAPI.get('/static/site')
  } catch (err) {
    return null
  }
}

export function getUsers() {
  try {
    return clientAPI.get('/widgets/get-users')
  } catch (err) {
    return null
  }
}