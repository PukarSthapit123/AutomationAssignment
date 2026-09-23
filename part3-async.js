// JavaScript Assignment - Part 3: Asynchronous Programming

// Runs each test only after the previous one finishes, so async output
// doesn't interleave.
let queue = Promise.resolve();
function test(fn) {
  queue = queue.then(fn);
}

// Q25. Predict the Output (Event Loop)
// Prediction: A, D, C, B
// Why: synchronous code (A, D) runs first, then microtasks like Promise
// callbacks (C), then macrotasks like setTimeout (B).
function eventLoopDemo() {
  console.log('A');
  setTimeout(() => console.log('B'), 0);
  Promise.resolve().then(() => console.log('C'));
  console.log('D');
}
test(async () => {
  console.log('--- Q25 event loop ---');
  eventLoopDemo();
  await new Promise((resolve) => setTimeout(resolve, 50));
});

// Q26. Delay Function (Promise)
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
test(async () => {
  console.log('--- Q26 delay ---');
  await delay(1000).then(() => console.log('Hi'));
});

// Q27. Rewrite with async/await
async function run() {
  console.log('Start');
  await delay(1000);
  console.log('End');
}
test(async () => {
  console.log('--- Q27 run ---');
  await run();
});

// Q28. Simulated Fetch
function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: 'User' + id }), 500);
  });
}

async function getUser() {
  const user = await fetchUser(1);
  console.log(user);
  return user;
}
test(async () => {
  console.log('--- Q28 getUser ---');
  await getUser(); // { id: 1, name: 'User1' }
});

// Q29. Run in Parallel (Promise.all)
async function loadAll() {
  const started = Date.now();
  const users = await Promise.all([fetchUser(1), fetchUser(2), fetchUser(3)]);
  console.log('elapsed ~' + (Date.now() - started) + 'ms (parallel, not 1500ms)');
  return users;
}
test(async () => {
  console.log('--- Q29 loadAll ---');
  console.log(await loadAll());
});

// Q30. Handle a Rejection
function riskyFetch() {
  return new Promise((_, reject) => reject(new Error('Network failed')));
}

async function safe() {
  try {
    await riskyFetch();
  } catch (err) {
    console.log('Caught: ' + err.message);
  }
}
test(async () => {
  console.log('--- Q30 safe ---');
  await safe(); // Caught: Network failed
});

// Q31. Timeout Wrapper
function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Timed out')), ms);
  });
  return Promise.race([promise, timeout]);
}
test(async () => {
  console.log('--- Q31 withTimeout ---');
  try {
    await withTimeout(delay(3000), 1000);
  } catch (err) {
    console.log('Caught: ' + err.message); // Timed out
  }
  const quick = await withTimeout(fetchUser(7), 2000);
  console.log('beat the timeout:', quick);
});

// Q32. Retry with Recovery
async function retry(fn, times) {
  let lastError;
  for (let attempt = 1; attempt <= times; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      console.log('attempt ' + attempt + ' failed: ' + err.message);
    }
  }
  throw lastError;
}

// Fails `failCount` times, then succeeds.
function makeFlaky(failCount) {
  let calls = 0;
  return function flakyFetch() {
    calls++;
    if (calls <= failCount) return Promise.reject(new Error('flaky #' + calls));
    return Promise.resolve('succeeded on attempt ' + calls);
  };
}
test(async () => {
  console.log('--- Q32 retry ---');
  console.log(await retry(makeFlaky(2), 3)); // succeeds on 3rd attempt
  try {
    await retry(makeFlaky(5), 3);
  } catch (err) {
    console.log('all attempts failed, re-thrown: ' + err.message);
  }
});
