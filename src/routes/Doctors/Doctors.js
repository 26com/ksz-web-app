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
    const q = (e.target.value).toLowerCase()
    const result = {}
    for (let key in users) {
      const user = users[key]
      const fullName = (user.surname +  ' ' + user.name + ' ' + user.middleName).toLowerCase()
      if (fullName.includes(q)) {
        result[key] = user
      }
      else if (user.specials) {
        user.specials.forEach(special => {
          if (special.toLowerCase().includes(q)) {
            result[key] = user
          }
        })
      }
    }
    setDoctors(result)
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
      {Object.keys(doctors).map(key => (
        <div style={{width: imgSize, margin: '15px 10px'}} className={"users-carousel-item " + size} key={users[key].id} onClick={() => {clickHandler(users[key].id)}}>
        <img 
          className="user-avatar"
          style={{minHeight: imgSize}}
          src={window.apiConfig.url + '/file/get-user-photo?idUser=' + users[key].id}
          alt="user"
        />
        <br />
        <span className="user-name">{users[key].surname} {users[key].name} {users[key].middleName}</span>
        {users[key].specials && users[key].specials.map((special, index) => (
          <div key={index}>
            <span className="user-special">{special}</span>
          </div>
        ))}
      </div>
        ))}
    </div>
    </>
  )
}