function join(valOne: number | string, valTwo: number | string) {
  if(typeof valOne === 'number' && typeof valTwo === 'number') return valOne + valTwo
  else (typeof valOne === 'string' && typeof valTwo === 'string') return valOne.toString() + valTwo.toString()
  return false
}

const one = join('John', 'Doe') // should return JohnDoe
const two = join(5, 6) // should return 11
const three = join(5, '5') // should return false