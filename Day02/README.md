# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
1. Function Expression:
The code starts with defining a function expression using the var keyword. The function takes an initial value n as its parameter.
2. Closure and Counter Initialization:
Inside the createCounter function, a counter variable is declared and initialized with the initial value n. This counter variable is part of the closure and retains its value even after the outer function execution completes.
3. Return of Inner Function:
Within the createCounter function, another function is defined and returned. This inner function serves as the actual counter function.
4. Inner Function Logic:
Inside the inner function, a new variable secondCount is declared and assigned the value of the current counter. This step is important because you want to return the current counter value without immediately incrementing it.
5. Increment Counter and Return:
After getting the current value in secondCount, the counter is incremented by 1, ensuring that the next time the inner function is called, it will return the updated counter value.
6. Usage:
Once the createCounter function is defined, you can create instances of the counter function with different initial values.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let counter = n;
    return function() {
        let secondCount = counter
        counter++;
        return secondCount;

        
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
```
