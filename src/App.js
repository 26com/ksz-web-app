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


export const ContentContext = React.createContext({})

function App() {
  const [theme, setTheme] = useState(createTheme({
    palette: {
      primary: {
        main: '#ccc',
        contrastText: '#fff',
      },
    },
  }))

  function formateSize(size){
    if (size >= 1400) return 'lg'
    if (size < 1400 && size >= 900) return 'md'
    return 'sm'
  }

  const [content, setContent] = useState(null)
  const [size, setSize] = useState(formateSize(window.innerWidth))
  const [tabValue, setTabValue] = useState(0)
  const [currentUser, setCurrentUser] = useState(null)
  const [users, setUsers] = useState({})

  useEffect(() => {
    localStorage.age = 18
    window.addEventListener('resize', () => {
      setSize(formateSize(window.innerWidth))
    })
    getContent().then(res => {
      setContent(res.data)
      document.title = res.data.nameClient
      if (res.data.siteThemeColor) {
        document.documentElement.style.setProperty("--primary-site-color", res.data.siteThemeColor)
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
        <ContentContext.Provider value={{content, size}}>
          <ThemeProvider theme={theme}>
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
