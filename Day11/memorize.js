let sum = 0;
const calc = (n) => {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};
// console.log(calc(4));

function memo(fun) {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("cache");
      return cache[n];
    } else {
      console.log("data read");
      let result = fun(n);
      cache[n] = result;
      return result;
    }
  };
}
console.time();
let eff = memo(calc);
console.log(eff(4));
console.timeEnd();

console.time();
console.log(eff(4));
console.timeEnd();
