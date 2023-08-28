/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let presentData = init;
  function increment() {
    return ++presentData;
  }
  function decrement() {
    return --presentData;
  }
  function reset() {
    return (presentData = init);
  }

  return {
    increment,
    decrement,
    reset,
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
