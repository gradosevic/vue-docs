export const addNumber = (state, number) => { //second argument should always be one payload
  state.numbers.push(number)
}
export const addNumber2 = (state, {min, max}) => { //object destructuring
  state.numbers.push(Math.floor(Math.random() * (max - min)) + min)
}

