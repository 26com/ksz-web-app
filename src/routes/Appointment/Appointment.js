import {React, useEffect} from "react";

import './style.css'

export function Appointment({setTabValue}) {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  useEffect(() => {
    setTabValue(false)
    const script = document.createElement("script")
    script.src = `http://health-ks-api:8088/widgets/get-user-widget.js?themeColor=&v=` + Date.now()
    script.async = true
    document.body.appendChild(script)
    window.location.replace('#/')
    return () => {
      const style = document.getElementById('widget-stylesheet')
      if (style) style.remove()
      const widget = document.getElementById('widget-app-script')
      if (widget) widget.remove()
      script.remove()
    }
  }, [])
  return (
    <div className="widget-appointment-container">
      <div style={{width: '100%', height: '100%'}} id="users_widget"></div>
    </div>
  )
}