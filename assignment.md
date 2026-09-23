**JavaScript Assignment**

*Solve each problem in a .js file. Test with console.log(). Read the hint only if you're stuck.*

Rules: Do NOT use built-in shortcuts that skip the concept being tested (e.g. don't use Array.reverse() when the task is to reverse manually). Write a function for each problem and call it with the sample inputs.

# **Part 1 Programming Logic & Control Flow**

*Covers: if/else, switch, for / while / for…of loops, functions (declarations & arrow), parameters, return values, scope, arrays, and objects.*

**Q1. FizzBuzz**

**Task:** Write a function fizzBuzz(n) that prints numbers 1 to n. For multiples of 3 print "Fizz", for multiples of 5 print "Buzz", and for multiples of both print "FizzBuzz".

**Example:**

fizzBuzz(5)

// 1

// 2

// Fizz

// 4

// Buzz

***Hint:*** *Use a for loop and the modulo operator (%). Check the both-divisible case (15) FIRST, before checking 3 and 5 separately.*

**Q2. Grade Classifier**

**Task:** Write getGrade(score) that returns a letter grade: 90+ = 'A', 80-89 = 'B', 70-79 = 'C', 60-69 = 'D', below 60 = 'F'.

**Example:**

getGrade(95) // 'A'

getGrade(72) // 'C'

getGrade(40) // 'F'

***Hint:*** *A chain of if / else if works best here because the conditions are ranges, not exact values.*

**Q3. Day Type (switch)**

**Task:** Write dayType(day) that takes a day name string and returns 'Weekend' for Saturday/Sunday and 'Weekday' for the rest. Use a switch statement.

**Example:**

dayType('Sunday') // 'Weekend'

dayType('Tuesday') // 'Weekday'

***Hint:*** *Let 'Saturday' and 'Sunday' cases fall through to the same return (stack the case labels). Use default for weekdays.*

**Q4. Sum of Even Numbers**

**Task:** Write sumEven(n) that returns the sum of all even numbers from 1 to n (inclusive).

**Example:**

sumEven(10) // 30 (2+4+6+8+10)

***Hint:*** *Loop from 1 to n, keep a running total, and only add the number when i % 2 === 0.*

**Q5. Factorial**

**Task:** Write factorial(n) that returns n! (n × (n-1) × … × 1). factorial(0) should return 1.

**Example:**

factorial(5) // 120

factorial(0) // 1

***Hint:*** *Start a result variable at 1 and multiply it by each number from 2 up to n using a loop.*

**Q6. Count Vowels**

**Task:** Write countVowels(str) that returns how many vowels (a, e, i, o, u) are in the string. Case-insensitive.

**Example:**

countVowels('JavaScript') // 3

***Hint:*** *Convert the string to lowercase, loop each character with for…of, and check if 'aeiou'.includes(char).*

**Q7. Reverse a Number**

**Task:** Write reverseNumber(n) that returns the digits of n reversed, as a number. Do not convert to a string.

**Example:**

reverseNumber(1234) // 4321

***Hint:*** *Use a while loop. Get the last digit with n % 10, build the reversed number, then remove the last digit with Math.floor(n / 10).*

**Q8. Find the Maximum**

**Task:** Write findMax(arr) that returns the largest number in the array. Do not use Math.max.

**Example:**

findMax([3, 9, 1, 7]) // 9

***Hint:*** *Assume the first element is the max, then loop through the rest and update your max whenever you find something bigger.*

**Q9. Is Prime**

**Task:** Write isPrime(n) that returns true if n is a prime number, otherwise false.

**Example:**

isPrime(7) // true

isPrime(10) // false

isPrime(1) // false

***Hint:*** *Numbers below 2 are not prime. Loop from 2 up to n-1 (or √n) and if any number divides n evenly, it's not prime.*

**Q10. Temperature Converter (arrow function)**

**Task:** Write an arrow function cToF that converts Celsius to Fahrenheit using the formula (C × 9/5) + 32. Return the result.

**Example:**

cToF(0) // 32

cToF(100) // 212

***Hint:*** *Define it as: const cToF = (c) => … — the body is a single return expression, so you can skip the braces.*

**Q11. Counter with Scope**

**Task:** Write a function makeCounter() that returns another function. Each time the returned function is called, it returns the next number starting from 1.

**Example:**

const next = makeCounter();

next() // 1

next() // 2

next() // 3

***Hint:*** *Declare a count variable inside makeCounter. The inner function 'remembers' it (this is closure / scope). Increment and return it.*

**Q12. Word Frequency Object**

**Task:** Write wordCount(sentence) that returns an object mapping each word to how many times it appears.

**Example:**

wordCount('a b a c b a')

// { a: 3, b: 2, c: 1 }

***Hint:*** *Split the sentence into an array, loop with for…of, and for each word do obj[word] = (obj[word] || 0) + 1.*

# **Part 2 Modern JavaScript (ES6+)**

*Covers: destructuring, spread/rest, template literals, optional chaining, map / filter / reduce / find, and error handling with try/catch/finally & custom error classes.*

**Q13. Swap with Destructuring**

**Task:** Write swap(a, b) that returns [b, a] using array destructuring — without a temporary variable.

**Example:**

swap(1, 2) // [2, 1]

***Hint:*** *You can destructure in one line: [a, b] = [b, a]. Then return them.*

**Q14. Extract from Object**

**Task:** Given a user object, write a function that uses object destructuring to pull out name and email and return a template-literal string.

**Example:**

const u = { name: 'Sara', email: 's@x.com', age: 30 };

describe(u) // 'Sara can be reached at s@x.com'

***Hint:*** *In the parameter list or first line: const { name, email } = user. Build the string with backticks and ${ }.*

**Q15. Merge with Spread**

**Task:** Write merge(obj1, obj2) that returns a new object combining both, where obj2's values win on conflicts. Do not mutate the inputs.

**Example:**

merge({a:1, b:2}, {b:9, c:3})

// { a:1, b:9, c:3 }

***Hint:*** *Return { ...obj1, ...obj2 }. The one spread later overwrites earlier keys.*

**Q16. Sum All (rest parameters)**

**Task:** Write sumAll(...nums) that accepts any number of arguments and returns their sum.

**Example:**

sumAll(1, 2, 3) // 6

sumAll(5, 5, 5, 5) // 20

***Hint:*** *Use ...nums in the parameter list to collect every argument into an array, then add them up (reduce works nicely).*

**Q17. Safe Nested Access (optional chaining)**

**Task:** Write getCity(user) that returns the user's city from user.address.city, or 'Unknown' if any part is missing.

**Example:**

getCity({ address: { city: 'Delhi' } }) // 'Delhi'

getCity({}) // 'Unknown'

***Hint:*** *Use user?.address?.city and combine it with the nullish coalescing operator: user?.address?.city ?? 'Unknown'.*

**Q18. Double the Array (map)**

**Task:** Write doubleAll(arr) that returns a NEW array with every number doubled. Use .map().

**Example:**

doubleAll([1, 2, 3]) // [2, 4, 6]

***Hint:*** *map takes each element and returns a transformed value: arr.map(n => n \* 2).*

**Q19. Filter Adults (filter)**

**Task:** Given an array of people objects, write getAdults(people) returning only those with age >= 18. Use .filter().

**Example:**

getAdults([{name:'A',age:15},{name:'B',age:22}])

// [{name:'B', age:22}]

***Hint:*** *filter keeps an element only when your callback returns true: people.filter(p => p.age >= 18).*

**Q20. Total Price (reduce)**

**Task:** Given an array of items each with a price, write totalPrice(items) returning the sum of all prices. Use .reduce().

**Example:**

totalPrice([{price:10},{price:5},{price:20}]) // 35

***Hint:*** *reduce carries an accumulator: items.reduce((sum, item) => sum + item.price, 0). The 0 is the starting value.*

**Q21. Find a User (find)**

**Task:** Write findById(users, id) that returns the first user object whose id matches, or undefined. Use .find().

**Example:**

findById([{id:1},{id:2}], 2) // {id:2}

***Hint:*** *find returns the first element where the callback is true: users.find(u => u.id === id).*

**Q22. Chained Pipeline (map + filter + reduce)**

**Task:** Given an array of numbers, return the sum of the squares of only the even numbers.

**Example:**

sumEvenSquares([1, 2, 3, 4]) // 20 (2² + 4²)

***Hint:*** *Chain them: filter the evens, map to squares, then reduce to a sum. Each method returns a new array you can chain onto.*

**Q23. Safe JSON Parse (try/catch/finally)**

**Task:** Write safeParse(str) that returns the parsed object, or null if the string is invalid JSON. Log 'done' in a finally block either way.

**Example:**

safeParse('{"a":1}') // { a: 1 }

safeParse('not json') // null

***Hint:*** *Wrap JSON.parse in try. On error, return null in catch. The finally block runs regardless of success or failure.*

**Q24. Custom Error Class**

**Task:** Create a class ValidationError that extends Error. Write validateAge(age) that throws a ValidationError with message 'Age must be positive' when age < 0, otherwise returns age.

**Example:**

validateAge(25) // 25

validateAge(-3) // throws ValidationError

***Hint:*** *class ValidationError extends Error { constructor(msg){ super(msg); this.name = 'ValidationError'; } }. Then throw new ValidationError(...) and catch it to see err.name.*

# **Part 3 Asynchronous Programming**

*Covers: the Event Loop, Promises, async/await, and handling async failures, timeouts, and error recovery.*

**Q25. Predict the Output (Event Loop)**

**Task:** Without running it, write down the exact order the following logs appear, then run it to confirm. Explain WHY in one sentence.

**Example:**

console.log('A');

setTimeout(() => console.log('B'), 0);

Promise.resolve().then(() => console.log('C'));

console.log('D');

***Hint:*** *Synchronous code runs first (A, D). Then microtasks (Promise → C) run before macrotasks (setTimeout → B). Order: A, D, C, B.*

**Q26. Delay Function (Promise)**

**Task:** Write delay(ms) that returns a Promise which resolves after ms milliseconds. Then use it to log 'Hi' after 1 second.

**Example:**

delay(1000).then(() => console.log('Hi'));

***Hint:*** *Return new Promise(resolve => setTimeout(resolve, ms)). You wrap setTimeout so it becomes awaitable.*

**Q27. Rewrite with async/await**

**Task:** Using your delay(ms) from Q26, write an async function run() that logs 'Start', waits 1 second, then logs 'End'.

**Example:**

run()

// Start

// (1s later) End

***Hint:*** *Mark the function async, then use: await delay(1000) between the two logs. await pauses only inside the async function.*

**Q28. Simulated Fetch**

**Task:** Write fetchUser(id) that returns a Promise resolving to { id, name: 'User' + id } after a 500ms delay. Consume it with async/await inside a getUser() function that logs the result.

**Example:**

getUser() // (after 500ms) { id: 1, name: 'User1' }

***Hint:*** *Reuse the Promise+setTimeout pattern, but call resolve(theObject). In getUser, do const user = await fetchUser(1).*

**Q29. Run in Parallel (Promise.all)**

**Task:** You have three fetchUser calls. Write loadAll() that runs them at the same time and returns an array of all three results. Measure that it takes ~500ms total, not 1500ms.

**Example:**

loadAll() // [user1, user2, user3]

***Hint:*** *await Promise.all([fetchUser(1), fetchUser(2), fetchUser(3)]). Starting them together (not awaiting one at a time) is what makes it parallel.*

**Q30. Handle a Rejection**

**Task:** Write riskyFetch() that returns a Promise which rejects with an Error('Network failed'). Then write a safe() async function that awaits it inside try/catch and logs the error message instead of crashing.

**Example:**

safe() // logs: 'Caught: Network failed'

***Hint:*** *Reject with: new Promise((\_, reject) => reject(new Error('Network failed'))). In safe(), wrap the await in try/catch and read err.message.*

**Q31. Timeout Wrapper**

**Task:** Write withTimeout(promise, ms) that returns whichever settles first: the given promise, or a rejection with 'Timed out' after ms.

**Example:**

withTimeout(delay(3000), 1000) // rejects: 'Timed out'

***Hint:*** *Race two promises: Promise.race([promise, timeoutPromise]). The timeout promise is a setTimeout that calls reject('Timed out').*

**Q32. Retry with Recovery**

**Task:** Write retry(fn, times) that calls the async function fn. If it rejects, try again — up to 'times' total attempts. If all attempts fail, re-throw the last error.

**Example:**

retry(flakyFetch, 3) // resolves if any of 3 tries succeeds

***Hint:*** *Loop 'times' times inside an async function. Use try/catch around await fn(); on success return the result, on failure save the error and continue. After the loop, throw the saved error.*

*Submission: one .js file per Part (three files total). Each function must be tested with the sample inputs using console.log. Focus on getting it working first, then making it clean.*