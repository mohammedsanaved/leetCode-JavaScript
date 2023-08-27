// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

const expect = (value) => {
  const toBe = (expectedValue) => {
    if (value === expectedValue) {
      return true;
    } else {
      throw new Error(`Not Equal`);
    }
  };

  const notToBe = (unexpectedValue) => {
    if (value !== unexpectedValue) {
      return true;
    } else {
      throw new Error(`Equal`);
    }
  };

  return { toBe, notToBe };
};

// Example usage
const one = () => {
  expect(5).toBe(5);
};

const two = () => {
  expect(5).notToBe(10);
};
