export function validator(data, config) {
  const errors = {}

  function validate(validateMethod, data, config) {
    switch (validateMethod) {
      case 'isRequired':
        if (data.trim() === '') return config.message
        break
      case 'isEmail':
        // eslint-disable-next-line no-case-declarations
        const emailRegExp = /^\S+@\S+\.\S+$/g
        if (!emailRegExp.test(data)) return config.message
        break
      case 'hasCapital':
        // eslint-disable-next-line no-case-declarations
        const capitalRegExp = /[A-Z]+/g
        if (!capitalRegExp.test(data)) return config.message
        break
      case 'hasNumber':
        // eslint-disable-next-line no-case-declarations
        const numberRegExp = /\d+/g
        if (!numberRegExp.test(data)) return config.message
        break
      case 'min':
        if (data.length < config.value) return config.message
        break
      case 'minMax':
        if ((Number(data) < config.minValue) || (Number(data) > config.maxValue)) return config.message
        break
      case 'isHref':
        // eslint-disable-next-line no-case-declarations
        const hrefRegExp = /^(https?:\/\/)?((\w+\.)+\w{2,}|((\d{1,3}\.){3}\d{1,3}))(\/\w+(\.\w+)*)+$/g
        if (!hrefRegExp.test(data)) return config.message
        break
      case 'hasFirstCapital':
        // eslint-disable-next-line no-case-declarations
        const firstCapitalRegExp = /^[A-ZА-Я][a-zа-я]+$/g
        if (!firstCapitalRegExp.test(data)) return config.message
        break
      default:
        console.log(`Illegal value for validateMethod: ${validateMethod}`)
        break
    }
  }

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(validateMethod, data[fieldName], config[fieldName][validateMethod])
      if (error && !errors[fieldName]) {
        errors[fieldName] = error
      }
    }
  }

  return errors
}

export const validatorConfig = {
  email: {
    isRequired: {message: 'Электронная почта обязательна для заполнения'},
    isEmail: {message: 'Введите корректный email'}
  },
  password: {
    isRequired: {message: 'Пароль обязателен для заполнения'},
    hasCapital: {message: 'Пароль должен содержать хотя бы одну заглавную букву'},
    hasNumber: {message: 'Пароль должен содержать хотя бы одну цифру'},
    min: {message: 'Пароль должен состоять из 8 и более символов', value: 8}
  },
  name: {
    isRequired: {message: 'Имя обязательно для заполнения'},
    hasFirstCapital: {message: 'Первая буква должна быть заглавной, остальные - маленькие'}
  },
  surname: {
    isRequired: {message: 'Фамилия обязателена для заполнения'},
    hasFirstCapital: {message: 'Первая буква должна быть заглавной, остальные - маленькие'}
  },
  year: {
    isRequired: {message: 'Год рождения обязателен для заполнения'},
    minMax: {message: 'Год рождения должен быть меньше текущего (но не слишком!)',
      minValue: new Date().getFullYear() - 100,
      maxValue: new Date().getFullYear()}
  },
  link: {
    isRequired: {message: 'Портфолио обязательно для заполнения'},
    isHref: {message: 'Поле \'Портфолио\' должно быть ссылкой'}
  }
}
