## Check if an Object or Array is Empty

Given an object or an array, you need to determine if it is empty according to the following rules:

- An empty object contains no key-value pairs.
- An empty array contains no elements.
- You may assume the object or array is the output of JSON.parse.

### Examples:

**Example 1:**

- Input: `obj = {"x": 5, "y": 42}`
- Output: `false`
- Explanation: The object has 2 key-value pairs, so it is not empty.

**Example 2:**

- Input: `obj = {}`
- Output: `true`
- Explanation: The object doesn't have any key-value pairs, so it is empty.

**Example 3:**

- Input: `obj = [null, false, 0]`
- Output: `false`
- Explanation: The array has 3 elements, so it is not empty.

### Constraints:

- `obj` is a valid JSON object or array.
- `2 <= JSON.stringify(obj).length <= 105`
