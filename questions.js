var getArgument = function(arg) {
    return arg;
};

var getSecondArgument = function(arg1, arg2) {
    return arg2;
};

var getArgumentsArray = function(arg1, arg2) {
    return [arg1, arg2];
};

var getArgumentsSum = function(number1, number2) {
    return number1 + number2;
};

var getArgumentsConcat = function(number1, number2) {
    return number1.toString() + number2.toString();
};

var getFirstGreaterThanSecond = function(number1, number2) {
    if (number1 > number2) {
      return true
    }
    else {
      return false
    };
};

var getSecondInBetweenFirstAndThird = function(number1, number2, number3) {
    if (number2 < number3 && number2 > number1) {
      return true;
    }
    else if (number2 > number3 && number2 < number1) {
      return true;
    }
    else {
      return false;
    }
};

var getFirstName = function(person) {
    return person.firstName;
};

var getScoresSum = function(scores) {
      return scores.reduce((a, b) => a + b, 0);

};

var getAgeSum = function(persons) {
      console.log(persons);
      return persons.map(person => person.age).reduce((a, b) => a + b);
};

var getNamesArray = function(persons) {
    return persons.map(person => person.name);
};

var getAllYoungerThan30 = function(persons) {
    return persons.filter(person => person.age < 30);
};
