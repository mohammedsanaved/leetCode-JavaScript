Sure, here is the requested `Calculator` class in Markdown format:

```markdown
## Calculator Class

The `Calculator` class provides mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It allows consecutive operations to be performed using method chaining. The class constructor accepts a number as the initial value of the result.

### Methods

#### `add(value: number): Calculator`

This method adds the given number value to the result and returns the updated `Calculator` instance.

#### `subtract(value: number): Calculator`

This method subtracts the given number value from the result and returns the updated `Calculator` instance.

#### `multiply(value: number): Calculator`

This method multiplies the result by the given number value and returns the updated `Calculator` instance.

#### `divide(value: number): Calculator`

This method divides the result by the given number value and returns the updated `Calculator` instance. If the passed value is 0, it throws an error: "Division by zero is not allowed."

#### `power(value: number): Calculator`

This method raises the result to the power of the given number value and returns the updated `Calculator` instance.

#### `getResult(): number | string`

This method returns the result. If there was an attempt to divide by zero, it returns the error message: "Division by zero is not allowed."

### Example Usage

```javascript
const calculator = new Calculator(10);
const result = calculator
  .add(5)
  .subtract(7)
  .getResult();
// Result: 8

const calculator2 = new Calculator(2);
const result2 = calculator2
  .multiply(5)
  .power(2)
  .getResult();
// Result: 100

const calculator3 = new Calculator(20);
const result3 = calculator3
  .divide(0)
  .getResult();
// Result: "Division by zero is not allowed"
```

### Constraints

- `actions` is a valid JSON array of strings.
- `values` is a valid JSON array of numbers.
- `actions.length` is between 2 and 20,000.
- `values.length` is between 1 and 20,000 - 1.
- `actions[i]` is one of "Calculator", "add", "subtract", "multiply", "divide", "power", and "getResult".
- The first action is always "Calculator".
- The last action is always "getResult".