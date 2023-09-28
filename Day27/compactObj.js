/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function compactObject(obj) {
    if (Array.isArray(obj)) {
      // If obj is an array, iterate through its elements
      for (let i = obj.length - 1; i >= 0; i--) {
        if (!obj[i]) {
          // If the element is falsy, remove it from the array
          obj.splice(i, 1);
        } else if (typeof obj[i] === "object") {
          // If the element is an object, recursively compact it
          compactObject(obj[i]);
        }
      }
    } else if (typeof obj === "object" && obj !== null) {
      // If obj is an object (not an array or null), iterate through its properties
      for (const key in obj) {
        if (!obj[key]) {
          // If the property value is falsy, delete the key from the object
          delete obj[key];
        } else if (typeof obj[key] === "object") {
          // If the property value is an object, recursively compact it
          compactObject(obj[key]);
        }
      }
    }
  
    return obj;
  }