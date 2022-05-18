/*
Write a function that returns a promise, which becomes resolved in some milliseconds 
*/
export const delay = (timeout) => new Promise(function(resolve) {
    setTimeout(resolve, timeout);
  });

  /*
  Write a function to run an given array of promises in series, without using async/await syntax 
  */
export const runPromisesInSeries = (promiseCalls) => promiseCalls.reduce((cur, next) => cur.then(next), Promise.resolve());

/*
Given an array of promises, Promise.all returns a promise 
that waits for all of the promises in the array to finish. 
If then succeeds, yielding an array of result values. 
If a promise in the array fails, the promise returned by all fails too, with the failure reason from the failing promise. 

Implement something like this yourself as a regular function called Promise_all. 

Remember that after a promise has succeeded or failed, it can’t succeed or fail again, 
and further calls to the functions that resolve it are ignored. 
This can simplify the way you handle failure of your promise. 
*/
export const Promise_all = (promises) => {
  return new Promise((resolve, reject) => {
    const resultArray = [];
    if (promises.length === 0) {
      resolve(resultArray);
    }
    let count = 0;
    promises.forEach((pr, index) => {
      pr.then(res => {
        resultArray[index] = res;
        count += 1
        if (count === promises.length) {
          resolve(resultArray);
        }
      })
        .catch(reject);
    });
  });
};

/*
Write a generator function that returns fibonacci sequence
*/
export const fibonacci = function* (n) {
  let count = 0;
  let curr = 0;
  let next = 1;
  while (count < n) {
    yield curr;
    let prev = curr
    curr = next
    next += prev
    count++
  }
};

/*
Write a helper function that takes a generator function and invokes it step by step
*/
export const helper = async (genFunc) => {
  const iter = genFunc()
  try {
    for await (const func of iter) {
      console.log(func)
    }
   } catch (someError) {
    iter.throw(someError);
  }
};

export const MyPromise = () => {};
