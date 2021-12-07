import React from "react";
import './style.css'
import { useNavigate } from "react-router";

export function Doctors({size, setTabValue, users, setUser}) {

  const [doctors, setDoctors] = React.useState(users)
  const input = React.useRef(null)
  const imgSize = '250px'
  const navigate = useNavigate()
  if (!Object.keys(users).length) navigate('/')

  window.scrollTo({ top: 0, behavior: 'smooth' })

  const inputChangeHandler = (e) => {
    if (!e.target.value) {
      setDoctors({...users})
      return
    }
    const q = (e.target.value).toLowerCase()
    const result = {}
    for (let key in users) {
      const user = {...users[key]}
      let fullName = (user.surname +  ' ' + user.name + ' ' + user.middleName)
      if (fullName.toLowerCase().includes(q)) {
        fullName = fullName.replace(q, `<span class="primary-color">${q}</span>`)
        fullName = fullName.replace(q[0].toUpperCase() + q.slice(1), `<span class="primary-color">${q[0].toUpperCase() + q.slice(1)}</span>`)
        result[key] = {...user}
        result[key].fullName = fullName
      }
      else if (user.specials) {
        user.specials.forEach((special, index) => {
          if (special.toLowerCase().includes(q)) {
            result[key] = {...user}
            result[key].specials = [...(user.specials)]
            result[key].specials[index] = result[key].specials[index].replace(q, `<span class="primary-color">${q}</span>`)
            result[key].specials[index] = result[key].specials[index].replace(q[0].toUpperCase() + q.slice(1), `<span class="primary-color">${q[0].toUpperCase() + q.slice(1)}</span>`)
          }
        })
      }
    }
    setDoctors({...result})
  }
  const inputClearHandler = () => {
    setDoctors(users)
    input.current.value = ''
  }
  const clickHandler = (id) => {
    setUser(id)
    navigate('/users')
  }

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