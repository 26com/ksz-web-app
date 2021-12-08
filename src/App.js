import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import React, { useEffect, useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import { Home } from './routes/Home/Home';
import { About } from './routes/About/About';
import { Contacts } from './routes/Contacts/Contacts';
import { Users } from './routes/Users/Users';
import { Doctors } from './routes/Doctors/Doctors';
import { Services } from './routes/Services/Services';
import { Documents } from './routes/Documents/Documents';
import { News } from './routes/News/News';
import { Reviews } from './routes/Reviews/Reviews';
import { Appointment } from './routes/Appointment/Appointment';
import { Footer } from './components/Footer/Footer';
import { Loader } from './components/Loader/Loader';
import { NotFound } from './components/NotFound/NotFound';
import { getContent } from './api/api'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// создание объекта глобального контекста
export const ContentContext = React.createContext({})

function App() {
  // инициализация темы для материал юай, и функции для её изменения
  const [theme, setTheme] = useState(createTheme({
    palette: {
      primary: {
        main: '#ccc',
        contrastText: '#fff',
      },
    },
  }))

  // функция для компидяции размера экрана
  function formateSize(size){
    if (size >= 1400) return 'lg'
    if (size < 1400 && size >= 900) return 'md'
    return 'sm'
  }

  // контент с сервера и функция для его изменения
  const [content, setContent] = useState(null)
  // текущий размер экрана и функция для его изменения
  const [size, setSize] = useState(formateSize(window.innerWidth))
  // положение бегунка в верхнем меню и функция для изменения
  const [tabValue, setTabValue] = useState(0)
  // текущий выбранный специалист и функция для изменения
  const [currentUser, setCurrentUser] = useState(null)
  // объект всех специалистов и функция для изменения
  const [users, setUsers] = useState({})

  useEffect(() => {
    // заглушка для возраста, чтобы отображался виджет
    localStorage.age = 18
    // установка слушателя изменения размера экрана
    window.addEventListener('resize', () => {
      setSize(formateSize(window.innerWidth))
    })
    // получения контента с сервера
    getContent().then(res => {
      setContent(res.data)
      // установка заголовка страницы из контента
      document.title = res.data.nameClient
      // установка темы из полученных данных
      if (res.data.siteThemeColor) {
        // переопределение глобальной переменной css
        document.documentElement.style.setProperty("--primary-site-color", res.data.siteThemeColor)
        // переопределение темы material ui
        setTheme(createTheme({
          palette: {
            primary: {
              main: res.data.siteThemeColor,
              contrastText: '#fff',
            },
          },
        }))
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">
        {/* провайдер контекста приложения */}
        <ContentContext.Provider value={{content, size}}>
          {/* провайдер темы для компонентов material ui */}
          <ThemeProvider theme={theme}>
            {/* отображать лоадер пока данные не получены */}
            {!content && <Loader />}
            {content && 
              <>
              <Header value={tabValue} setValue={setTabValue} />
              <Routes>
                <Route path="/" element={<Home content={content} setTabValue={setTabValue} setUser={setCurrentUser} setUsers={setUsers}/>} />
                <Route path="/about" element={<About content={content} setTabValue={setTabValue} />} />
                <Route path="/users" element={<Users setTabValue={setTabValue} setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
                <Route path="/doctors" element={<Doctors setTabValue={setTabValue} setCurrentUser={setCurrentUser} users={users} setUser={setCurrentUser}/>} />
                <Route path="/services" element={<Services setTabValue={setTabValue} />} />
                <Route path="/documents" element={<Documents content={content} size={size} setTabValue={setTabValue} />} />
                <Route path="/contacts" element={<Contacts content={content} setTabValue={setTabValue} />} />
                <Route path="/news" element={<News content={content} size={size} setTabValue={setTabValue} />} />
                <Route path="/reviews" element={<Reviews content={content} size={size} setTabValue={setTabValue} />} />
                <Route path="/appointment" element={<Appointment content={content} size={size} setTabValue={setTabValue} />} />
                <Route path="*" element={<NotFound logo={content.appLogoUrl} />} />
              </Routes>
              <Footer />
              </>
            }
          </ThemeProvider>
        </ContentContext.Provider>
      </div>
    </Router>
  );
}

export default App;
