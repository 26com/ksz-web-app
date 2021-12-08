import {React, useEffect} from "react";

import './style.css'

export function Users({setTabValue, currentUser, setCurrentUser}) {
  // прокрутка при переходе
  window.scrollTo({ top: 0, behavior: 'smooth' })
  useEffect(() => {
    // изменение положения ползунка в меню
    setTabValue(3)
    // создание и добавление скрипта виджета в дом
    const script = document.createElement("script")
    script.src = `${window.apiConfig.url}/widgets/get-user-widget.js?themeColor=&v=` + Date.now()
    script.async = true
    document.body.appendChild(script)
    const url = currentUser ? ('#/user?id=' + currentUser) : '#/users'
    if (currentUser) setCurrentUser(null)
    window.location.replace(url)
    // функция для удаления скрипта и стилей из дом
    return () => {
      const style = document.getElementById('widget-stylesheet')
      if (style) style.remove()
      const widget = document.getElementById('widget-app-script')
      if (widget) widget.remove()
      script.remove()
    }
  }, [])
  return (
    <div className="widget-users-container">
      <div style={{width: '100%', height: '100%'}} id="users_widget"></div>
    </div>
  )
}