import React, {useEffect, useState} from 'react'

const Main = ({children}) => {
  const [data, setData] = useState({name: '', surname: '', year: '', link: ''})
  const [isInStorage, setIsInStorage] = useState(false)

  useEffect(() => {
    getLocalStorageData()
  }, [])

  const getLocalStorageData = () => {
    const localStorageData = localStorage.getItem('student-card')
    if (localStorageData) {
      setData(JSON.parse(localStorageData))
      setIsInStorage(true)
    }
  }

  const updateLocalStorageData = (data) => {
    localStorage.setItem('student-card', JSON.stringify(data))
      setIsInStorage(true)
  }

  const updateData = (data) => {
    setData(prev => ({...prev, ...data}))
  }

  const saveData = () => {
    updateLocalStorageData(data)
  }

  const restoreData = () => {
    getLocalStorageData()
  }

  return (
    <div>
      {children({data, updateData, saveData, restoreData, isInStorage})}
    </div>
  )
}

export default Main
