import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'

import Input from './UI/input'
import {validator, validatorConfig} from '../utils/validator'


const Form = ({data, updateData, saveData, restoreData, isInStorage}) => {
  const [errors, setErrors] = useState({})

  useEffect(() => {
    setErrors(validator(data, validatorConfig))
  }, [data])

  const history = useHistory()

  const gotoCard = () => {
    history.push('/card')
  }

  const handleChange = (event) => {
    updateData({
      [event.target.name]: event.target.value
    })
  }

  const checkValidate = () => {
    return Object.keys(validator(data, validatorConfig)).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (checkValidate()) {
      saveData()
      gotoCard()
    } else {
      console.log('Error', data)
    }
  }

  const handleCancel = () => {
    restoreData()
    gotoCard()
  }

  const isValid = (Object.keys(errors).length === 0)

  return (
    <form onSubmit={handleSubmit} className="offset-md-3 col-md-6 shadow mt-5 p-3">
      <h1>{isInStorage? 'Редактировать' : 'Создать'}</h1>
      <Input name="name" label="Имя" value={data.name} onChange={handleChange} error={errors.name}/>
      <Input name="surname" label="Фамилия" value={data.surname} onChange={handleChange} error={errors.surname}/>
      <Input name="year" type="number" label="Год рождения" value={data.year} onChange={handleChange} error={errors.year}/>
      <Input name="link" label="Портфолио" value={data.link} onChange={handleChange} error={errors.link}/>

      {isInStorage &&
      <button type="button" className="btn btn-secondary me-3" onClick={handleCancel}>
        Назад
      </button>
      }

      <button type="submit" disabled={!isValid} className="btn btn-primary">
        {isInStorage ? 'Обновить' : 'Создать'}
      </button>
    </form>
  )
}

export default Form
