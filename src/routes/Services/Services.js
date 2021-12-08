import {React, useEffect} from "react";

export function Services({setTabValue}) {
  // прокрутка при переходе
  window.scrollTo({ top: 0, behavior: 'smooth' })
  useEffect(() => {
    // изменение положения ползунка в меню
    setTabValue(4)
    // создание и добавление скрипта виджета в дом
    const script = document.createElement("script")
    script.src = `${window.apiConfig.url}/widgets/get-user-widget.js?v=` + Date.now()
    script.async = true
    document.body.appendChild(script)
    window.location.replace('#/services')
    // функция для удаления скрипта и стилей из дом
    return () => {
      const style = document.getElementById('widget-stylesheet')
      if (style) style.remove()
      const widget = document.getElementById('widget-app-script')
      if (widget) widget.remove()
      script.remove()
    }
  }, [setTabValue])
  return (
    <div style={{minHeight: '80vh'}}>
      <div style={{width: '100%', height: '100%'}} id="users_widget"></div>
    </div>
  )
}