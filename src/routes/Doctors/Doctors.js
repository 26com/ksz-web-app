import React from "react";
import './style.css'
import { useNavigate } from "react-router";

export function Doctors({size, setTabValue, users, setUser}) {
  // объект с врачами и функция их изменения
  const [doctors, setDoctors] = React.useState(users)
  // ссылка на элемент инпута
  const input = React.useRef(null)
  // переменная размера аватара специалиста
  const imgSize = '250px'
  // получение функции для навигации
  const navigate = useNavigate()
  // перенаправление на главную, если врачи не загружены
  if (!Object.keys(users).length) navigate('/')
  // прокрутка экрана при переходе
  window.scrollTo({ top: 0, behavior: 'smooth' })
  // обработчик ввода поиска по врачам
  const inputChangeHandler = (e) => {
    // если поиск отчищен, устанавливаем всех врачей
    if (!e.target.value) {
      setDoctors({...users})
      return
    }
    // получаем введенную строку
    const q = (e.target.value).toLowerCase()
    // объявляем итоговый объект
    const result = {}
    // перебираем пользователей
    for (let key in users) {
      // клонируем объект пользователя
      const user = {...users[key]}
      // формируем строку имени
      let fullName = (user.surname +  ' ' + user.name + ' ' + user.middleName)
      // если найдены совпадения с строкой запроса
      if (fullName.toLowerCase().includes(q)) {
        // заменяем совпадения на стилизованный спан
        fullName = fullName.replace(q, `<span class="primary-color">${q}</span>`)
        // заменяем совпадения, начинающиеся с большой буквы
        fullName = fullName.replace(
          q[0].toUpperCase() + q.slice(1), 
          `<span class="primary-color">${q[0].toUpperCase() + q.slice(1)}</span>`
        )
        // добавляем врача в итоговый объект
        result[key] = {...user}
        result[key].fullName = fullName
      }
      // проверяем совпадения в массиве специальностей
      else if (user.specials) {
        user.specials.forEach((special, index) => {
          // если совпадение найдено
          if (special.toLowerCase().includes(q)) {
            // клонируем объект врача
            result[key] = {...user}
            // клонируем массив специальностей
            result[key].specials = [...(user.specials)]
            // заменяем совпадения на стилизованный спан
            result[key].specials[index] = result[key].specials[index].replace(
              q, 
              `<span class="primary-color">${q}</span>`
            )
            // заменяем совпадения, начинающиеся с большой буквы
            result[key].specials[index] = result[key].specials[index].replace(
              q[0].toUpperCase() + q.slice(1), 
              `<span class="primary-color">${q[0].toUpperCase() + q.slice(1)}</span>`
            )
          }
        })
      }
    }
    // изменяем состояние врачей
    setDoctors({...result})
  }
  // обработчик отчистки инпута
  const inputClearHandler = () => {
    setDoctors(users)
    input.current.value = ''
  }
  // обработчик выбора специалиста
  const clickHandler = (id) => {
    // установка глобального айди выбранного пользователя
    setUser(id)
    navigate('/users')
  }
  // изменение положения ползунка в меню
  React.useEffect(() => {
    setTabValue(3)
  }, [setTabValue])
  return (
    <>
    <div className="doctors-container">
      <div className="doctors-search" onChange={inputChangeHandler}>
        <input type="text" placeholder="Введите ФИО врача | специальность" ref={input} />
      </div>
      <div className="input-clear-btn">
        <i className="fas fa-times" onClick={inputClearHandler}></i>
      </div>
      {!(Object.keys(doctors).length) && 
        <div style={{height: '60vh'}}>
          <h3 style={{color: '#ccc'}}>Нет подходящих врачей</h3>
        </div>
      }
      {Object.keys(doctors).map(key => (
        <div 
          style={{width: imgSize, margin: '15px 10px'}} 
          className={"users-carousel-item " + size} 
          key={users[key].id} 
          onClick={() => {clickHandler(users[key].id)}}
        >
        <img 
          className="user-avatar"
          style={{minHeight: imgSize}}
          src={window.apiConfig.url + '/file/get-user-photo?idUser=' + users[key].id}
          alt="user"
        />
        <br />
        {!doctors[key].fullName && 
          <span className="user-name">
            {users[key].surname} {users[key].name} {users[key].middleName}
          </span>
        }
        {doctors[key].fullName && 
          <div 
            dangerouslySetInnerHTML={{ __html: doctors[key].fullName}} 
            className="user-name">
          </div>
        }
        {doctors[key].specials && doctors[key].specials.map((special, index) => (
          <div key={index}>
            {/* <span className="user-special">{special}</span> */}
              <div 
              dangerouslySetInnerHTML={{ __html: special}} 
              className="user-special">
            </div>
          </div>
        ))}
      </div>
        ))}
    </div>
    </>
  )
}