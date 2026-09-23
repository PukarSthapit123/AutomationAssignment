// JavaScript Assignment - Part 2: Modern JavaScript (ES6+)

// Q13. Swap with Destructuring
function swap(a, b) {
  [a, b] = [b, a];
  return [a, b];
}
console.log('--- Q13 swap ---');
console.log(swap(10, 20));        // [20, 10]
console.log(swap('pass', 'fail')); // ['fail', 'pass']

// Q14. Extract from Object
function describe({ name, email }) {
  return `${name} can be reached at ${email}`;
}
console.log('--- Q14 describe ---');
const tester = { name: 'Aarav', email: 'aarav@qrius.io', role: 'QA Engineer' };
console.log(describe(tester)); // 'Aarav can be reached at aarav@qrius.io'

// Q15. Merge with Spread
function merge(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
console.log('--- Q15 merge ---');
const defaults = { browser: 'chrome', headless: true, retries: 0 };
const overrides = { headless: false, timeout: 5000 };
console.log(merge(defaults, overrides)); // { browser: 'chrome', headless: false, retries: 0, timeout: 5000 }
console.log(defaults);  // unchanged
console.log(overrides); // unchanged

// Q16. Sum All (rest parameters)
function sumAll(...nums) {
  return nums.reduce((sum, n) => sum + n, 0);
}
console.log('--- Q16 sumAll ---');
console.log(sumAll(4, 8, 15));       // 27
console.log(sumAll(10, 20, 30, 40)); // 100

// Q17. Safe Nested Access
function getCity(user) {
  return user?.address?.city ?? 'Unknown';
}
console.log('--- Q17 getCity ---');
console.log(getCity({ name: 'Liam', address: { city: 'London' } })); // 'London'
console.log(getCity({ name: 'Mia' }));                               // 'Unknown'

// Q18. Double the Array (map)
function doubleAll(arr) {
  return arr.map((n) => n * 2);
}
console.log('--- Q18 doubleAll ---');
console.log(doubleAll([5, 10, 15])); // [10, 20, 30]

// Q19. Filter Adults (filter)
function getAdults(people) {
  return people.filter((p) => p.age >= 18);
}
console.log('--- Q19 getAdults ---');
const people = [
  { name: 'Noah', age: 17 },
  { name: 'Emma', age: 18 },
  { name: 'Olivia', age: 34 },
];
console.log(getAdults(people)); // [{ name: 'Emma', age: 18 }, { name: 'Olivia', age: 34 }]

// Q20. Total Price (reduce)
function totalPrice(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}
console.log('--- Q20 totalPrice ---');
const cart = [
  { name: 'Keyboard', price: 45 },
  { name: 'Mouse', price: 25 },
  { name: 'Monitor', price: 180 },
];
console.log(totalPrice(cart)); // 250

// Q21. Find a User (find)
function findById(users, id) {
  return users.find((u) => u.id === id);
}
console.log('--- Q21 findById ---');
const users = [
  { id: 101, name: 'Ava' },
  { id: 102, name: 'Leo' },
  { id: 103, name: 'Zara' },
];
console.log(findById(users, 102)); // { id: 102, name: 'Leo' }
console.log(findById(users, 999)); // undefined

// Q22. Chained Pipeline (map + filter + reduce)
function sumEvenSquares(numbers) {
  return numbers
    .filter((n) => n % 2 === 0)
    .map((n) => n * n)
    .reduce((sum, n) => sum + n, 0);
}
console.log('--- Q22 sumEvenSquares ---');
console.log(sumEvenSquares([5, 6, 7, 8, 9, 10])); // 200 (36 + 64 + 100)

// Q23. Safe JSON Parse (try/catch/finally)
function safeParse(str) {
  try {
    return JSON.parse(str);
  } catch (err) {
    return null;
  } finally {
    console.log('done');
  }
}
console.log('--- Q23 safeParse ---');
console.log(safeParse('{"test":"login","passed":true}')); // done, then { test: 'login', passed: true }
console.log(safeParse('{test: login}'));                  // done, then null

// Q24. Custom Error Class
class ValidationError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'ValidationError';
  }
}

function validateAge(age) {
  if (age < 0) throw new ValidationError('Age must be positive');
  return age;
}
console.log('--- Q24 validateAge ---');
console.log(validateAge(42)); // 42
try {
  validateAge(-7);
} catch (err) {
  console.log(err.name + ': ' + err.message); // ValidationError: Age must be positive
}
