// // alert("Connected!");
//
// # The Calculator
//
// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal.
//


// #Part1
const squareNumber = function(number) {
  const result = Math.sqrt(number);

  console.log("The result of squaring the number " + result);
  return result;
}

console.log(squareNumber(4));

const halfNumber = function(number) {
  const result = number / 2;

  console.log("The half of" + number + "is " + result);
  return result;

};

halfNumber(8);

const percentOf = function(firstNum, secondNum){
  const result = (firstNum / secondNum) * 100
  const message = `${firstNum} is ${result} % of ${secondNum}`;
  console.log(message);
  return message;

}

percentOf(2,4);

const areaOfCircle = function(radius){
  const result = Math.PI * radius * radius;
  console.log(`The area for a circle with ${radius} is ${result}`);
};

Math.ceil(areaOfCircle(8));


// #Part2
const cal = function(number){
  const result1 = number / 2;
  console.log(`The half of ${number} is ${result1}`);

  const result2 = Math.sqrt(result1);
  console.log(`The squaring of ${number} is ${result2}`);

  const area = Math.PI * result2 * result2;
  console.log(`The area of circle is ${area}`);

  const percent = (area / result2) * 100;
  console.log(`The percentage is ${percent} %`);
}

cal(4);



// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3)
