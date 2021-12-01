import {React, useEffect} from "react";

import config from '../../api/config'
import './style.css'

export function Users({setTabValue, currentUser, setCurrentUser}) {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  useEffect(() => {
    setTabValue(3)
    const script = document.createElement("script")
    script.src = `${config.apiUrl}/widgets/get-user-widget.js?themeColor=&v=` + Date.now()
    script.async = true
    document.body.appendChild(script)
    const url = currentUser ? ('#/user?id=' + currentUser) : '#/users'
    if (currentUser) setCurrentUser(null)
    window.location.replace(url)
    return () => {
      const style = document.getElementById('widget-stylesheet')
      if (style) style.remove()
      const widget = document.getElementById('widget-app-script')
      if (widget) widget.remove()
      script.remove()
    }
  }, [setTabValue, setCurrentUser])
  return (
    <div className="widget-users-container">
      <div style={{width: '100%', height: '100%'}} id="users_widget"></div>
    </div>
  )
}