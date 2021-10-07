export const age = (year) => {
  const ageNum = (new Date().getFullYear()) - year
  if (((ageNum > 10) && (ageNum < 20)) || ((ageNum % 10 > 4) || (ageNum % 10 === 0))) {
    return `${ageNum} лет`
  }
  if (ageNum % 10 > 1) {
    return `${ageNum} года`
  }
  return `${ageNum} год`
}
