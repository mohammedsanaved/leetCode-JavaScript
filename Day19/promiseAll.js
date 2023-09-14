/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
const promiseAll = function (functions) {
  const promises = functions.map((fn) => fn());
  return Promise.all(promises);
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
