import React from 'react'
import {useHistory} from 'react-router-dom'
import {age} from '../utils/calculate'


const Card = ({data, isInStorage}) => {
  const history = useHistory()

  const gotoForm = () => {
    history.push('/form')
  }

  return (
    <div className="offset-md-3 col-md-6 shadow mt-5 p-3">
      <h1 className="mb-3">Карточка студента</h1>
      {isInStorage
        ? <>
          <p className="mb-1"><span className="fw-bold me-1">Имя:</span>{data.name}</p>
          <p className="mb-1"><span className="fw-bold me-1">Фамилия:</span>{data.surname}</p>
          <p className="mb-1"><span className="fw-bold me-1">Год рождения:</span>
            {`${data.year} (${age(data.year)})`}</p>
          <p className="mb-1"><span className="fw-bold me-1">Портфолио:</span>{data.link}</p>
        </>
        : <p>Нет данных</p>
      }
      <button className="btn btn-primary mt-3" onClick={gotoForm}>
        {isInStorage ? 'Редактировать' : 'Создать'}
      </button>
    </div>
  )
}

export default Card
