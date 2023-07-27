function join(valOne, valTwo) {
    if (typeof valOne === 'number' && typeof valTwo === 'number')
        return valOne + valTwo;
    else
        (typeof valOne === 'string' && typeof valTwo === 'string');
    return valOne.toString() + valTwo.toString();
    return false;
}
var one = join('John', 'Doe'); // should return JohnDoe
var two = join(5, 6); // should return 11
var three = join(5, '5'); // should return false
