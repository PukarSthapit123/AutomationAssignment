// Q1. FizzBuzz
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if ((i % 5 === 0) && (i % 3 === 0)) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
  }
}
console.log('--- Q1 fizzBuzz(5) ---');
fizzBuzz(20);

// Q2. Grade Classifier
function getGrade(score) {
  if (score >= 90) return 'A';
  else if (score >= 80) return 'B';
  else if (score >= 70) return 'C';
  else if (score >= 60) return 'D';
  else return 'F';
}
console.log('--- Q2 getGrade ---');
console.log(getGrade(95)); // 'A'
console.log(getGrade(72)); // 'C'
console.log(getGrade(40)); // 'F'

// Q3. Day Type (switch)
function dayType(day) {
  switch (day) {
    case 'Saturday':
    case 'Sunday':
      return 'Weekend';
    default:
      return 'Weekday';
  }
}
console.log('--- Q3 dayType ---');
console.log(dayType('Sunday'));  // 'Weekend'
console.log(dayType('Tuesday')); // 'Weekday'

// Q4. Sum of Even Numbers
function sumEven(n) {
    let total = 0;
    for (let i = 2; i <= n; i += 2) {
        total += i;
    }
    return total;
}
console.log('--- Q4 sumEven ---');
console.log(sumEven(10));

// Q5. Factorial
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log('--- Q5 factorial ---');
console.log(factorial(5));
console.log(factorial(0));

// Q6. Count Vowels (case-insensitive)
function countVowels(str) {
  let count = 0;
  for (const char of str.toLowerCase()) {
    if ('aeiou'.includes(char)) count++;
  }
  return count;
}
console.log('--- Q6 countVowels ---');
console.log(countVowels('This is A TEst for count of vowels '));


// Q7. Reverse a Number
function reverseNumber(n) {
    let reversed = 0;
    while (n > 0) {
        const lastDigit = n % 10;
        reversed = reversed * 10 + lastDigit;
        n = Math.floor(n / 10);
    }
    return reversed;
}
console.log('--- Q7 reverseNumber ---');
console.log(reverseNumber(1122334455));// 5544332211

// Q8. Find the Maximum
function findMax(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let max = arr[0];

  for (const num of arr) {
    if (num > max) max = num;
  }

  return max;
}
console.log('--- Q8 findMax ---');
console.log(findMax([13, 19, 11, 71])); // 71
console.log(findMax([])); // undefined

// Q9. Is Prime
function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}
console.log('--- Q9 isPrime ---');
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
console.log(isPrime(1));  // false


// Q10. Temperature Converter (arrow function)
const cToF = (c) => (c * 9) / 5 + 32;
console.log('--- Q10 cToF ---');
console.log(cToF(0));   // 32
console.log(cToF(100)); // 212


// Q11. Counter with Scope (closure)
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
console.log('--- Q11 makeCounter ---');
const next = makeCounter();
console.log(next()); // 1
console.log(next()); // 2
console.log(next()); // 3

// Q12. Word Frequency Object
function wordCount(sentence) {
  const counts = {};
  for (const word of sentence.split(' ')) {
    counts[word] = (counts[word] || 0) + 1;
  }
  return counts;
}
console.log('--- Q12 wordCount ---');
console.log(wordCount('a b a c b a')); // { a: 3, b: 2, c: 1 }
