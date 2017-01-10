
var getArgument = function(arg) {
  //return 'Write your code here !';
  return arg;
};

var getSecondArgument = function(arg1, arg2) {
  return arg2;
};

var getArgumentsArray = function(arg1, arg2) {
  return [arg1, arg2];
};

var getArgumentsSum = function(number1, number2) {
  return number1+number2;
};

var getArgumentsConcat = function(number1, number2) {
  return number1+''+number2;
};

var getFirstGreaterThanSecond = function(number1, number2) {
  return number1 > number2;
};

var getSecondInBetweenFirstAndThird  = function(number1, number2, number3) {
  return (number1 < number2 && number2 < number3) ||
  (number1 > number2 && number2 > number3);
};

var getFirstName = function(person) {
  return person.firstName;
};

var getScoresSum = function(scores) {
  return scores.reduce( function(acc, n) {
    return acc + n;
  }, 0);
};

var getScoresSum = function(scores) {
  return scores.reduce( function(acc, n) {
    return acc + n;
  }, 0);
};

var getAgeSum = function(persons) {
  return persons.reduce( function(acc, item) {
    return acc + item.age;
  }, 0);
};

var getNamesArray = function(persons) {
  return persons.map( function(item) {
    return item.name;
  });
};

var getAllYoungerThan30 = function(persons) {
  return persons.filter( function(item) {
    return item.age < 30;
  });
};
