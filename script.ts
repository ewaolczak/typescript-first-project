function join(valOne, valTwo) {
  return valOne + valTwo;
}

const one = join('John', 'Doe'); // should return JohnDoe
const two = join(5, 6); // should return 11
const three = join(5, '5'); // should return false