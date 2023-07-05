export const quiz = {
    totalQuestions: 5,
    questions: [
      {
        id: 1,
        question: 'What is the difference between null and undefined in JavaScript?',
        answers: ['Both represent absence of value', 'null represents absence of value, while undefined represents a variable that has been declared but has not been assigned a value', 'undefined represents absence of value, while null represents a variable that has been declared but has not been assigned a value', 'There is no difference'],
        correctAnswer: 'null represents absence of value, while undefined represents a variable that has been declared but has not been assigned a value',
      },
      {
        id: 2,
        question: 'How can you check if a variable is an array in JavaScript?',
        answers: ['Using the typeof operator', 'Using the instanceof operator', 'Using the Array.isArray() method', 'There is no way to check if a variable is an array'],
        correctAnswer: 'Using the Array.isArray() method',
      },
      {
        id: 3,
        question: 'What is the purpose of the "this" keyword in JavaScript?',
        answers: ['To refer to the current object', 'To create a new object', 'To access the global scope', 'There is no purpose for the "this" keyword'],
        correctAnswer: 'To refer to the current object',
      },
      {
        id: 4,
        question: 'What are closures in JavaScript?',
        answers: ['Functions that are immediately invoked', 'Functions that can be called with different arguments', 'A way to organize code into reusable modules', 'Functions that have access to their own scope, the scope of the outer function, and the global scope'],
        correctAnswer: 'Functions that have access to their own scope, the scope of the outer function, and the global scope',
      },
      {
        id: 5,
        question: 'What is event delegation in JavaScript?',
        answers: ['Attaching events to multiple elements simultaneously', 'Creating custom events', 'Delegating events to child elements', 'Removing event listeners'],
        correctAnswer: 'Delegating events to child elements',
      },
      {
        id: 6,
        question: 'What is the output of the following code?\nconsole.log(1 + "1");',
        answers: ['2', '11', '1', 'NaN'],
        correctAnswer: '11',
      },
      {
        id: 7,
        question: 'How do you clone an array in JavaScript?',
        answers: ['arr.clone()', 'arr.copy()', 'arr.slice()', 'There is no built-in method to clone an array'],
        correctAnswer: 'arr.slice()',
      },
      {
        id: 8,
        question: 'What is the purpose of the "setTimeout" function in JavaScript?',
        answers: ['To delay the execution of a function', 'To repeat the execution of a function', 'To measure the time taken by a function', 'There is no purpose for the "setTimeout" function'],
        correctAnswer: 'To delay the execution of a function',
      },
      {
        id: 9,
        question: 'How can you convert a string to a number in JavaScript?',
        answers: ['str.toInt()', 'Number(str)', 'str.toNumber()', 'parseInt(str)'],
        correctAnswer: 'Number(str)',
      },
      {
        id: 10,
        question: 'What does the "typeof" operator return for an array?',
        answers: ['array', 'object', 'array-like', 'There is no "typeof" operator in JavaScript'],
        correctAnswer: 'object',
      },
      {
        id: 11,
        question: 'How do you remove an element from an array in JavaScript?',
        answers: ['arr.remove(element)', 'arr.splice(index, 1)', 'arr.pop()', 'There is no way to remove an element from an array'],
        correctAnswer: 'arr.splice(index, 1)',
      },
      {
        id: 12,
        question: 'What is the difference between "==" and "===" in JavaScript?',
        answers: ['Both operators perform strict equality comparison', 'The "==" operator performs type coercion, while "===" operator performs strict equality comparison without type coercion', 'The "===" operator performs type coercion, while "==" operator performs strict equality comparison without type coercion', 'There is no difference'],
        correctAnswer: 'The "==" operator performs type coercion, while "===" operator performs strict equality comparison without type coercion',
      },
      {
        id: 13,
        question: 'What is the purpose of the "map" method in JavaScript arrays?',
        answers: ['To filter elements in an array', 'To iterate over an array and modify its elements', 'To sort the elements of an array', 'There is no "map" method in JavaScript arrays'],
        correctAnswer: 'To iterate over an array and modify its elements',
      },
      {
        id: 14,
        question: 'How can you check if an object has a specific property in JavaScript?',
        answers: ['obj.hasProperty(prop)', 'obj.contains(prop)', 'obj.hasOwnProperty(prop)', 'There is no way to check if an object has a specific property'],
        correctAnswer: 'obj.hasOwnProperty(prop)',
      },
      {
        id: 15,
        question: 'What is the purpose of the "filter" method in JavaScript arrays?',
        answers: ['To transform the elements of an array', 'To remove elements from an array', 'To create a new array with elements that pass a certain condition', 'There is no "filter" method in JavaScript arrays'],
        correctAnswer: 'To create a new array with elements that pass a certain condition',
      },
      {
        id: 16,
        question: 'How do you round a number to a specific decimal place in JavaScript?',
        answers: ['Math.floor(num)', 'Math.ceil(num)', 'num.toFixed(decimalPlaces)', 'Math.round(num)'],
        correctAnswer: 'num.toFixed(decimalPlaces)',
      },
      {
        id: 17,
        question: 'What is the purpose of the "concat" method in JavaScript arrays?',
        answers: ['To concatenate two arrays', 'To sort the elements of an array', 'To filter elements in an array', 'There is no "concat" method in JavaScript arrays'],
        correctAnswer: 'To concatenate two arrays',
      },
      {
        id: 18,
        question: 'How do you convert a number to a string in JavaScript?',
        answers: ['String(num)', 'num.toString()', 'str.valueOf()', 'str.toInt()'],
        correctAnswer: 'String(num)',
      },
      {
        id: 19,
        question: 'What is the purpose of the "reduce" method in JavaScript arrays?',
        answers: ['To reduce the length of an array', 'To perform a mathematical operation on each element of an array', 'To iterate over an array and modify its elements', 'To reduce an array to a single value'],
        correctAnswer: 'To reduce an array to a single value',
      },
      {
        id: 20,
        question: 'How can you convert an object to a JSON string in JavaScript?',
        answers: ['obj.toString()', 'JSON.stringify(obj)', 'JSON.parse(obj)', 'obj.toJson()'],
        correctAnswer: 'JSON.stringify(obj)',
      },
      {
        id: 21,
        question: 'What is the purpose of the "push" method in JavaScript arrays?',
        answers: ['To add elements to the beginning of an array', 'To remove elements from an array', 'To concatenate two arrays', 'To add elements to the end of an array'],
        correctAnswer: 'To add elements to the end of an array',
      },
      {
        id: 22,
        question: 'How do you convert a string to lowercase in JavaScript?',
        answers: ['str.toLower()', 'str.toLowerCase()', 'str.convertToLower()', 'There is no built-in method to convert a string to lowercase'],
        correctAnswer: 'str.toLowerCase()',
      },
      {
        id: 23,
        question: 'What is the purpose of the "length" property in JavaScript arrays and strings?',
        answers: ['To determine the number of elements in an array or characters in a string', 'To access the last element of an array or the last character of a string', 'To resize the array or string', 'There is no "length" property in JavaScript'],
        correctAnswer: 'To determine the number of elements in an array or characters in a string',
      },
      {
        id: 24,
        question: 'What is the output of the following code?\nconsole.log(0.1 + 0.2 === 0.3);',
        answers: ['true', 'false', 'NaN', 'Syntax Error'],
        correctAnswer: 'false',
      },
      {
        id: 25,
        question: 'What is the purpose of the "indexOf" method in JavaScript arrays?',
        answers: ['To add elements to an array', 'To find the index of a specific element in an array', 'To filter elements in an array', 'There is no "indexOf" method in JavaScript arrays'],
        correctAnswer: 'To find the index of a specific element in an array',
      },
      {
        id: 26,
        question: 'How do you convert a number to a boolean in JavaScript?',
        answers: ['bool.convert(num)', 'Boolean(num)', 'bool.toInt(num)', 'There is no way to convert a number to a boolean'],
        correctAnswer: 'Boolean(num)',
      },
      {
        id: 27,
        question: 'What is the purpose of the "toUpperCase" method in JavaScript strings?',
        answers: ['To convert a string to lowercase', 'To reverse a string', 'To convert a string to uppercase', 'To check if a string contains another string'],
        correctAnswer: 'To convert a string to uppercase',
      },
      {
        id: 28,
        question: 'What does the "Math.random()" function return in JavaScript?',
        answers: ['A random integer between 0 and 1', 'A random floating-point number between 0 and 1', 'A random integer between 1 and 10', 'A random floating-point number between 1 and 10'],
        correctAnswer: 'A random floating-point number between 0 and 1',
      },
      {
        id: 29,
        question: 'How do you access the last element of an array in JavaScript?',
        answers: ['arr[0]', 'arr.first()', 'arr[arr.length - 1]', 'There is no way to access the last element of an array'],
        correctAnswer: 'arr[arr.length - 1]',
      },
      {
        id: 30,
        question: 'What is the purpose of the "Date" object in JavaScript?',
        answers: ['To perform mathematical operations', 'To manipulate strings', 'To work with dates and times', 'There is no purpose for the "Date" object'],
        correctAnswer: 'To work with dates and times',
      },
      {
        id: 31,
        question: 'What is the difference between "null" and "undefined" in JavaScript?',
        answers: ['They have the same meaning and can be used interchangeably', 'null represents an intentional absence of any object value, while undefined represents an uninitialized variable or missing property', 'null is used for strings, while undefined is used for numbers', 'There is no difference between them'],
        correctAnswer: 'null represents an intentional absence of any object value, while undefined represents an uninitialized variable or missing property',
      },
      {
        id: 32,
        question: 'How do you check if a variable is an array in JavaScript?',
        answers: ['typeof variable === "array"', 'Array.isArray(variable)', 'variable.isArray()', 'There is no built-in way to check if a variable is an array'],
        correctAnswer: 'Array.isArray(variable)',
      },
      {
        id: 33,
        question: 'What is the purpose of the "map" method in JavaScript arrays?',
        answers: ['To transform the elements of an array', 'To remove elements from an array', 'To create a new array with elements that pass a certain condition', 'There is no "map" method in JavaScript arrays'],
        correctAnswer: 'To transform the elements of an array',
      },
      {
        id: 34,
        question: 'What is the output of the following code?\nconsole.log(typeof NaN);',
        answers: ['"number"', '"NaN"', '"undefined"', '"object"'],
        correctAnswer: '"number"',
      },
      {
        id: 35,
        question: 'What is the purpose of the "splice" method in JavaScript arrays?',
        answers: ['To add elements to an array', 'To remove elements from an array', 'To concatenate two arrays', 'There is no "splice" method in JavaScript arrays'],
        correctAnswer: 'To remove elements from an array',
      },
      {
        id: 36,
        question: 'How do you convert a string to an integer in JavaScript?',
        answers: ['str.toInt()', 'parseInt(str)', 'str.toInteger()', 'str.convertToInteger()'],
        correctAnswer: 'parseInt(str)',
      },
      {
        id: 37,
        question: 'What is the purpose of the "find" method in JavaScript arrays?',
        answers: ['To find the index of a specific element in an array', 'To filter elements in an array', 'To perform a mathematical operation on each element of an array', 'To find the first element that satisfies a certain condition'],
        correctAnswer: 'To find the first element that satisfies a certain condition',
      },
      {
        id: 38,
        question: 'What is the purpose of the "includes" method in JavaScript arrays and strings?',
        answers: ['To add elements to an array', 'To find the index of a specific element in an array', 'To check if an array or string contains a specific element or substring', 'There is no "includes" method in JavaScript'],
        correctAnswer: 'To check if an array or string contains a specific element or substring',
      },
      {
        id: 39,
        question: 'What is the output of the following code?\nconsole.log(2 + 2 + "2");',
        answers: ['"22"', '"42"', '"4" + "2"', 'NaN'],
        correctAnswer: '"42"',
      },
      {
        id: 40,
        question: 'What is the purpose of the "filter" method in JavaScript arrays?',
        answers: ['To transform the elements of an array', 'To remove elements from an array', 'To create a new array with elements that pass a certain condition', 'There is no "filter" method in JavaScript arrays'],
        correctAnswer: 'To create a new array with elements that pass a certain condition',
      },
      {
        id: 41,
        question: 'What does the "Math.floor()" function do in JavaScript?',
        answers: ['Returns the largest integer less than or equal to a given number', 'Returns the smallest integer greater than or equal to a given number', 'Rounds a number to the nearest integer', 'There is no "Math.floor()" function in JavaScript'],
        correctAnswer: 'Returns the largest integer less than or equal to a given number',
      },
      {
        id: 42,
        question: 'How do you remove an element from an array in JavaScript?',
        answers: ['arr.remove(element)', 'arr.splice(index, 1)', 'arr.pop()', 'There is no way to remove an element from an array in JavaScript'],
        correctAnswer: 'arr.splice(index, 1)',
      },
      {
        id: 43,
        question: 'What is the purpose of the "reduce" method in JavaScript arrays?',
        answers: ['To transform the elements of an array', 'To remove elements from an array', 'To calculate a single value based on the elements of an array', 'There is no "reduce" method in JavaScript arrays'],
        correctAnswer: 'To calculate a single value based on the elements of an array',
      },
      {
        id: 44,
        question: 'What is the output of the following code?\nconsole.log([] + {});',
        answers: ['"[]"', '"{}"', '"[object Object]"', 'TypeError'],
        correctAnswer: '"[object Object]"',
      },
      {
        id: 45,
        question: 'What is the purpose of the "toFixed" method in JavaScript numbers?',
        answers: ['To round a number to a specified number of decimal places', 'To convert a number to a string', 'To format a number with commas', 'There is no "toFixed" method in JavaScript numbers'],
        correctAnswer: 'To round a number to a specified number of decimal places',
      },
      {
        id: 46,
        question: 'What is the output of the following code?\nconsole.log(0.1 + 0.2 === 0.3);',
        answers: ['true', 'false', 'NaN', 'TypeError'],
        correctAnswer: 'false',
      },
      {
        id: 47,
        question: 'How do you convert a number to a string in JavaScript?',
        answers: ['num.toString()', 'String(num)', 'num.toStr()', 'str(num)'],
        correctAnswer: 'String(num)',
      },
      {
        id: 48,
        question: 'What is the purpose of the "Object.keys()" function in JavaScript?',
        answers: ['To convert an object to an array of its property names', 'To check if an object has a specific property', 'To get the values of an object\'s properties', 'There is no "Object.keys()" function in JavaScript'],
        correctAnswer: 'To convert an object to an array of its property names',
      },
      {
        id: 49,
        question: 'What is the output of the following code?\nconsole.log(5 < 6 < 7);',
        answers: ['true', 'false', 'TypeError', 'NaN'],
        correctAnswer: 'true',
      },
      {
        id: 50,
        question: 'What is the purpose of the "setTimeout" function in JavaScript?',
        answers: ['To execute a function after a specified delay', 'To measure the time it takes for a function to execute', 'To create an interval for repeatedly calling a function', 'There is no purpose for the "setTimeout" function'],
        correctAnswer: 'To execute a function after a specified delay',
      },
      {
        id: 51,
        question: 'What is the purpose of the "setInterval" function in JavaScript?',
        answers: ['To execute a function after a specified delay', 'To measure the time it takes for a function to execute', 'To create an interval for repeatedly calling a function', 'There is no purpose for the "setInterval" function'],
        correctAnswer: 'To create an interval for repeatedly calling a function',
      },
      {
        id: 52,
        question: 'What is the output of the following code?\nconsole.log("5" - 3);',
        answers: ['2', '8', 'NaN', 'TypeError'],
        correctAnswer: '2',
      },
      {
        id: 53,
        question: 'How do you check if an object has a specific property in JavaScript?',
        answers: ['obj.checkProperty(prop)', 'obj.propertyExists(prop)', 'obj.hasOwnProperty(prop)', 'There is no built-in way to check for object properties in JavaScript'],
        correctAnswer: 'obj.hasOwnProperty(prop)',
      },
      {
        id: 54,
        question: 'What is the purpose of the "concat" method in JavaScript arrays?',
        answers: ['To transform the elements of an array', 'To remove elements from an array', 'To concatenate two or more arrays', 'There is no "concat" method in JavaScript arrays'],
        correctAnswer: 'To concatenate two or more arrays',
      },
      {
        id: 55,
        question: 'What is the output of the following code?\nconsole.log(3 > 2 > 1);',
        answers: ['true', 'false', 'TypeError', 'NaN'],
        correctAnswer: 'false',
      },
      {
        id: 56,
        question: 'How do you access the last element of an array in JavaScript?',
        answers: ['arr[-1]', 'arr.last', 'arr[arr.length - 1]', 'There is no way to access the last element of an array in JavaScript'],
        correctAnswer: 'arr[arr.length - 1]',
      },
      {
        id: 57,
        question: 'What is the purpose of the "reverse" method in JavaScript arrays?',
        answers: ['To transform the elements of an array', 'To remove elements from an array', 'To reverse the order of elements in an array', 'There is no "reverse" method in JavaScript arrays'],
        correctAnswer: 'To reverse the order of elements in an array',
      },
      {
        id: 58,
        question: 'What is the output of the following code?\nconsole.log(1 + -"1" + "2");',
        answers: ['"012"', '"02"', '"12"', 'TypeError'],
        correctAnswer: '"02"',
      },
      {
        id: 59,
        question: 'What is the purpose of the "isNaN" function in JavaScript?',
        answers: ['To check if a value is not a number', 'To convert a string to a number', 'To round a number to the nearest integer', 'There is no "isNaN" function in JavaScript'],
        correctAnswer: 'To check if a value is not a number',
      },
      {
        id: 60,
        question: 'How do you convert a string to lowercase in JavaScript?',
        answers: ['str.toUpperCase()', 'str.toLocaleUpperCase()', 'str.toLowerCase()', 'There is no built-in way to convert a string to lowercase in JavaScript'],
        correctAnswer: 'str.toLowerCase()',
      },
      {
        id: 61,
        question: 'What is the purpose of the "slice" method in JavaScript arrays?',
        answers: ['To transform the elements of an array', 'To remove elements from an array', 'To extract a portion of an array into a new array', 'There is no "slice" method in JavaScript arrays'],
        correctAnswer: 'To extract a portion of an array into a new array',
      },
      {
        id: 62,
        question: 'What is the output of the following code?\nconsole.log(typeof null);',
        answers: ['"null"', '"object"', '"undefined"', '"TypeError"'],
        correctAnswer: '"object"',
      },
      {
        id: 63,
        question: 'How do you convert a string to an integer in JavaScript?',
        answers: ['parseInt(str)', 'str.toInt()', 'Number(str)', 'There is no built-in way to convert a string to an integer in JavaScript'],
        correctAnswer: 'parseInt(str)',
      },
      {
        id: 64,
        question: 'What is the purpose of the "join" method in JavaScript arrays?',
        answers: ['To transform the elements of an array', 'To remove elements from an array', 'To concatenate all elements of an array into a string', 'There is no "join" method in JavaScript arrays'],
        correctAnswer: 'To concatenate all elements of an array into a string',
      },
      {
        id: 65,
        question: 'What is the output of the following code?\nconsole.log(1 + "1" - 1);',
        answers: ['1', '10', '11', 'TypeError'],
        correctAnswer: '10',
      },
      {
        id: 66,
        question: 'How do you convert a string to a floating-point number in JavaScript?',
        answers: ['parseFloat(str)', 'str.toFloat()', 'Number(str)', 'There is no built-in way to convert a string to a floating-point number in JavaScript'],
        correctAnswer: 'parseFloat(str)',
      },
      {
        id: 67,
        question: 'What is the purpose of the "push" method in JavaScript arrays?',
        answers: ['To transform the elements of an array', 'To remove elements from an array', 'To add elements to the end of an array', 'There is no "push" method in JavaScript arrays'],
        correctAnswer: 'To add elements to the end of an array',
      },
      {
        id: 68,
        question: 'What is the output of the following code?\nconsole.log([] + []);',
        answers: ['"[]"', '0', 'NaN', 'TypeError'],
        correctAnswer: '""',
      },
      {
        id: 69,
        question: 'How do you convert a number to a boolean in JavaScript?',
        answers: ['Boolean(num)', 'num.toBoolean()', 'num == true', 'There is no built-in way to convert a number to a boolean in JavaScript'],
        correctAnswer: 'Boolean(num)',
      },
      {
        id: 70,
        question: 'What is the purpose of the "filter" method in JavaScript arrays?',
        answers: ['To transform the elements of an array', 'To remove elements from an array', 'To create a new array with all elements that pass a test', 'There is no "filter" method in JavaScript arrays'],
        correctAnswer: 'To create a new array with all elements that pass a test',
      },
      {
        id: 71,
        question: 'What is the output of the following code?\nconsole.log(1 == "1");',
        answers: ['true', 'false', 'NaN', 'TypeError'],
        correctAnswer: 'true',
      },
      {
        id: 72,
        question: 'How do you round a number to the nearest integer in JavaScript?',
        answers: ['Math.round(num)', 'round(num)', 'num.round()', 'There is no built-in way to round a number in JavaScript'],
        correctAnswer: 'Math.round(num)',
      },
      {
        id: 73,
        question: 'What is the purpose of the "map" method in JavaScript arrays?',
        answers: ['To transform the elements of an array', 'To remove elements from an array', 'To perform a function on each element of an array', 'There is no "map" method in JavaScript arrays'],
        correctAnswer: 'To perform a function on each element of an array',
      },
      {
        id: 74,
        question: 'What is the output of the following code?\nconsole.log("Hello" - 1);',
        answers: ['"Hello1"', 'NaN', 'TypeError', '0'],
        correctAnswer: 'NaN',
      },
      {
        id: 75,
        question: 'How do you get the current date in JavaScript?',
        answers: ['Date.now()', 'new Date()', 'getCurrentDate()', 'There is no built-in way to get the current date in JavaScript'],
        correctAnswer: 'new Date()',
      },
      {
        id: 76,
        question: 'What is the purpose of the "reduce" method in JavaScript arrays?',
        answers: ['To transform the elements of an array', 'To remove elements from an array', 'To reduce the array to a single value by performing a function on each element', 'There is no "reduce" method in JavaScript arrays'],
        correctAnswer: 'To reduce the array to a single value by performing a function on each element',
      },
      {
        id: 77,
        question: 'What is the output of the following code?\nconsole.log(true + false);',
        answers: ['"truefalse"', '1', '0', 'TypeError'],
        correctAnswer: '1',
      },
      {
        id: 78,
        question: 'How do you convert a boolean to a string in JavaScript?',
        answers: ['bool.toString()', 'String(bool)', 'bool.toStr()', 'There is no built-in way to convert a boolean to a string in JavaScript'],
        correctAnswer: 'bool.toString()',
      },
      {
        id: 79,
        question: 'What is the purpose of the "indexOf" method in JavaScript arrays?',
        answers: ['To transform the elements of an array', 'To remove elements from an array', 'To search for the first occurrence of a specified value in an array', 'There is no "indexOf" method in JavaScript arrays'],
        correctAnswer: 'To search for the first occurrence of a specified value in an array',
      },
      {
        id: 80,
        question: 'What is the output of the following code?\nconsole.log(1 === "1");',
        answers: ['true', 'false', 'NaN', 'TypeError'],
        correctAnswer: 'false',
      },
      {
        id: 81,
        question: 'How do you check if an array includes a specific element in JavaScript?',
        answers: ['array.includes(element)', 'array.contains(element)', 'array.indexOf(element) !== -1', 'There is no built-in way to check if an array includes a specific element in JavaScript'],
        correctAnswer: 'array.includes(element)',
      },
      {
        id: 82,
        question: 'What is the output of the following code?\nconsole.log(typeof undefined);',
        answers: ['"undefined"', '"null"', '"object"', '"TypeError"'],
        correctAnswer: '"undefined"',
      },
      {
        id: 83,
        question: 'How do you convert a boolean to a number in JavaScript?',
        answers: ['Number(bool)', 'bool.toNumber()', 'bool == 1', 'There is no built-in way to convert a boolean to a number in JavaScript'],
        correctAnswer: 'Number(bool)',
      },
      {
        id: 84,
        question: 'What is the purpose of the "shift" method in JavaScript arrays?',
        answers: ['To transform the elements of an array', 'To remove the first element from an array', 'To add elements to the beginning of an array', 'There is no "shift" method in JavaScript arrays'],
        correctAnswer: 'To remove the first element from an array',
      },
      {
        id: 85,
        question: 'What is the output of the following code?\nconsole.log("5" + 2);',
        answers: ['"52"', '7', 'NaN', 'TypeError'],
        correctAnswer: '"52"',
      },
      {
        id: 86,
        question: 'How do you check if a variable is an array in JavaScript?',
        answers: ['Array.isArray(variable)', 'variable.isArray()', 'typeof variable === "array"', 'There is no built-in way to check if a variable is an array in JavaScript'],
        correctAnswer: 'Array.isArray(variable)',
      },
      {
        id: 87,
        question: 'What is the purpose of the "unshift" method in JavaScript arrays?',
        answers: ['To transform the elements of an array', 'To remove elements from an array', 'To add elements to the beginning of an array', 'There is no "unshift" method in JavaScript arrays'],
        correctAnswer: 'To add elements to the beginning of an array',
      },
      {
        id: 88,
        question: 'What is the output of the following code?\nconsole.log(1 + 1 + "1");',
        answers: ['"21"', '11', '2', 'TypeError'],
        correctAnswer: '"21"',
      },
      {
        id: 89,
        question: 'How do you remove an element from an array in JavaScript?',
        answers: ['array.splice(index, 1)', 'array.remove(index)', 'array.pop()', 'There is no built-in way to remove an element from an array in JavaScript'],
        correctAnswer: 'array.splice(index, 1)',
      },
      {
        id: 90,
        question: 'What is the purpose of the "concat" method in JavaScript arrays?',
        answers: ['To transform the elements of an array', 'To remove elements from an array', 'To combine two or more arrays into a new array', 'There is no "concat" method in JavaScript arrays'],
        correctAnswer: 'To combine two or more arrays into a new array',
      },
      {
        id: 91,
        question: 'What is the output of the following code?\nconsole.log(1 - "1");',
        answers: ['"1"', '0', 'NaN', 'TypeError'],
        correctAnswer: '0',
      },
      {
        id: 92,
        question: 'How do you convert a string to lowercase in JavaScript?',
        answers: ['str.toLowerCase()', 'lowercase(str)', 'str.toLower()', 'There is no built-in way to convert a string to lowercase in JavaScript'],
        correctAnswer: 'str.toLowerCase()',
      },
      {
        id: 93,
        question: 'What is the purpose of the "slice" method in JavaScript arrays?',
        answers: ['To transform the elements of an array', 'To remove elements from an array', 'To extract a portion of an array into a new array', 'There is no "slice" method in JavaScript arrays'],
        correctAnswer: 'To extract a portion of an array into a new array',
      },
      {
        id: 94,
        question: 'What is the output of the following code?\nconsole.log(10 / 0);',
        answers: ['Infinity', '0', 'NaN', 'TypeError'],
        correctAnswer: 'Infinity',
      },
      {
        id: 95,
        question: 'How do you convert a string to uppercase in JavaScript?',
        answers: ['str.toUpperCase()', 'uppercase(str)', 'str.toUpper()', 'There is no built-in way to convert a string to uppercase in JavaScript'],
        correctAnswer: 'str.toUpperCase()',
      },
      {
        id: 96,
        question: 'What is the purpose of the "join" method in JavaScript arrays?',
        answers: ['To transform the elements of an array', 'To remove elements from an array', 'To combine all elements of an array into a string', 'There is no "join" method in JavaScript arrays'],
        correctAnswer: 'To combine all elements of an array into a string',
      },
      {
        id: 97,
        question: 'What is the output of the following code?\nconsole.log(2 * "2");',
        answers: ['"22"', '4', 'NaN', 'TypeError'],
        correctAnswer: '4',
      },
      {
        id: 98,
        question: 'How do you convert a number to a string in JavaScript?',
        answers: ['num.toString()', 'String(num)', 'num.toStr()', 'There is no built-in way to convert a number to a string in JavaScript'],
        correctAnswer: 'num.toString()',
      },
      {
        id: 99,
        question: 'What is the purpose of the "reverse" method in JavaScript arrays?',
        answers: ['To transform the elements of an array', 'To remove elements from an array', 'To reverse the order of the elements in an array', 'There is no "reverse" method in JavaScript arrays'],
        correctAnswer: 'To reverse the order of the elements in an array',
      },
      {
        id: 100,
        question: 'What is the output of the following code?\nconsole.log("Hello" - 1);',
        answers: ['"Hello"', 'NaN', '0', 'TypeError'],
        correctAnswer: 'NaN',
      }

    ],
  };
  