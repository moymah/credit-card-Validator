function cardValidator (number) {
  const result = number
    .toString()
    .split("")
    .reverse()
    .map((num, numID) => numID % 2 ? num * 2 : num)
    .map((num) => num > 9 ? parseInt(num = (num % 10)) + 1 : parseInt(num))
    .reduce((accum, currentValue) => accum += currentValue);
  return result % 10 === 0 ? true : false;
}

module.exports.cardValidator = cardValidator;