import axios from 'axios'

// инициализация объекта axios
const clientAPI = axios.create({
  baseURL: window.apiConfig.url,
});

// функция получения контента
export function getContent() {
  try {
    return clientAPI.get('/static/site')
  } catch (err) {
    return null
  }
}
// функция получения специалистов
export function getUsers() {
  try {
    return clientAPI.get('/widgets/get-users')
  } catch (err) {
    return null
  }
}