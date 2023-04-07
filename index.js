// Import stylesheets
import './style.css';

// 1. reverse a number
var reverseNum = (num) => {
  var result = 0;
  while (num > 0) {
    result = result * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return result;
};

console.log(reverseNum(23456));

// 2. check if a string is palindrome or not
var isPalindrome = function (x) {
  let arr = x.split('');
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] != arr[arr.length - i - 1]) {
      return false;
    }
  }
  return true;
};

// 3.generates all combinations of a string

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order
var alphabeticalOrder = (str) => {
  let arr = str.split('');
  arr.sort((a, b) => a - b);
  return arr.join('');
};

console.log(alphabeticalOrder('webmaster'));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
var toProperCase = (str) => {
  var arr = str.split(' ');
  for (let i in arr) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join(' ');
};

console.log(toProperCase('the quick brown fox'));

//6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

let var1 = 'Web Development Tutorial';

var longestWords = (str) => {
  var arr = str.split('');

  var stack = [],
    longest = [];
  for (let each of arr) {
    if (each !== ' ') {
      stack.push(each);
    } else {
      if (stack.length > longest.length) {
        longest = stack;
      }
      stack = [];
    }
  }
  return longest.join('');
};

console.log(longestWords(var1));

//7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string
var CountVowel = (str) => {
  var vowel = ['a', 'e', 'u', 'i', 'o'];
  var count = 0;
  for (let each of str.split('')) {
    if (vowel.includes(each)) {
      count++;
    }
  }
  return count;
};

console.log(CountVowel('The quick brown fox'));

// 8.accepts a number as a parameter and check the number is prime or not.
var isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(35));
console.log(isPrime(7));

// 9. Write a JavaScript function which accepts an argument and returns the type.
var varType = (input) => {
  return typeof input;
};

class People {}
var a = new People();
console.log(varType(a));
console.log(varType(true));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
var identityMatrix = (n) => {
  var result = [];
  for (let row = 0; row < n; row++) {
    let current = [];
    for (let column = 0; column < n; column++) {
      current.push(row === column ? 1 : 0);
    }
    result.push(current);
  }
  return result;
};

console.log(identityMatrix(4));

// 11.  take an array of numbers stored and find the second lowest and second greatest numbers, respectively
var secondHighestNLowest = (arr) => {
  arr.sort((a, b) => a - b);
  return [arr[1], arr[arr.length - 2]];
};

var numarr = [5, 6, 7, 8, 9, 1, 2, 3, 4];
var numarr2 = [1, 2, 3, 4, 5];
console.log(secondHighestNLowest(numarr));
console.log(secondHighestNLowest(numarr2));

// 12.  says whether a number is perfect.
var isPerfect = (num) => {
  let divisors = [];
  for (let i = 2; i < num; i++) {
    if (num % i === 0) divisors.push(i);
  }

  return divisors.reduce((sum, current) => sum + current, 1) === num;
};

// 12 extension
// console.log(isPerfect(28));
// var perfectList = (limit) => {
//   let list = [];
//   for (let i = 1; i < limit; i++) {
//     if (isPerfect(i)) list.push(i);
//   }
//   return list;
// };

// console.log(perfectList(10000));

// 13.  function to compute the factors of a positive integer
var computeFactor = (num) => {
  var current = num;
  var factor = [1];
  var factorIndex = 2;
  while (current > 1) {
    if (current % factorIndex === 0) {
      current = current / factorIndex;
      factor.push(factorIndex);
      factorIndex = 2;
    } else {
      factorIndex++;
    }
  }
  return factor;
};

console.log(computeFactor(128));
console.log(computeFactor(1023));

// 14.  Write a JavaScript function to convert an amount to coins
var amountTocoins = (amount, coinList) => {
  coinList.sort((a, b) => b - a); // sort for robustness if the coin is not in desending order
  var coins = [];
  var coinIndex = 0;
  while (amount >= 1) {
    if (amount >= coinList[coinIndex]) {
      coins.push(coinList[coinIndex]);
      amount = amount - coinList[coinIndex];
    } else {
      coinIndex++;
    }
  }
  return coins;
};

var coinList = [25, 10, 5, 2, 1]; // equal to 1 dollar to 1 cents;
console.log(amountTocoins(46, coinList));

// 15  compute the value of bn where n is the exponent and b is thebases. Accept b and n from the user and display the result.
var computeBn = (base, exponent) => {
  return Math.pow(base, exponent);
};

console.log(computeBn(2, 5));

// 16. Write a JavaScript function to extract unique characters from a string.
var uniqueChar = (str) => {
  let arr = [];
  for (let i of str.split('')) {
    if (!arr.includes(i)) {
      arr.push(i);
    }
  }
  return arr.join('');
};
console.log(uniqueChar('thequickbrownfoxjumpsoverthelazydog'));

// 17. get the number of occurrences of each letter in specified string

var getOccurences = (str) => {
  let result = {};
  for (let letter of str.split('')) {
    if (!result[letter]) {
      result[letter] = 1;
    } else {
      result[letter]++;
    }
  }
  return result;
};

console.log(getOccurences('factorization'));

// 18. Write a function for searching JavaScript arrays with a binary search.
var binarySearch = (arr, target) => {
  var low = 0,
    high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (target == arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      low = mid + 1;
    } else if (target < arr[mid]) {
      high = mid - 1;
    }
  }
};

let arrs = [10, 20, 30, 50, 60, 80, 110, 130, 140, 170],
  targetNum = 110;
console.log(binarySearch(arrs, targetNum));

// 19. JavaScript function that returns array elements larger than a number
var largerthanN = (arr, n) => {
  return arr.filter((element) => element > n);
};

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tar = 5;
console.log(largerthanN(nums, tar));

// 20.  Write a JavaScript function that generates a string id (specified length) of random characters.
var generateRandomString = (len) => {
  const charList =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charArr = charList.split('');
  var result = [];
  for (let i = 0; i < len; i++) {
    let randomIndex = Math.floor(Math.random() * charList.length);
    result.push(charArr[randomIndex]);
  }
  return result.join('');
};

console.log(generateRandomString(10));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array
var subsetWithLengthK = (arr) => {};

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
var countOccurences = (str, letter) => {
  let arr = str.split('');
  let result = 0;
  for (let each of arr) {
    if (letter == each) {
      result++;
    }
  }
  return result;
};

console.log(countOccurences('microsoft.com', 'o'));

// 23. Write a JavaScript function to find the first not repeated character.
var firstNonRepeatedChar = (str) => {
  let arr = getOccurences(str);
};
