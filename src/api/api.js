import axios from 'axios'

import config from './config'

const clientAPI = axios.create({
  baseURL: config.apiUrl,
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