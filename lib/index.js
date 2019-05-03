function cardValidator(number){
 let numberStr = number.toString().split("").reverse();
 const teste = numberStr
 .map((num, numID) => numID % 2 ? num * 2 : num)
 .map((num) => num > 9 ? parseInt(num = (num%10)) + 1 : parseInt(num))
 .reduce((accum, currentValue) => accum += currentValue);
 console.log(teste);
 teste % 10 === 0 ? console.log(true) : console.log(false);
}

cardValidator(5502092620346220);
module.exports = cardValidator;
