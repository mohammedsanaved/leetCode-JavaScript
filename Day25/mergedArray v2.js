function mergeArrays(arr1, arr2) {
    const mergedMap = new Map();
  
    // Merge objects from arr1 into the map
    for (const obj of arr1) {
      if (!mergedMap.has(obj.id)) {
        mergedMap.set(obj.id, { ...obj });
      } else {
        Object.assign(mergedMap.get(obj.id), obj);
      }
    }
  
    // Merge objects from arr2 into the map
    for (const obj of arr2) {
      if (!mergedMap.has(obj.id)) {
        mergedMap.set(obj.id, { ...obj });
      } else {
        Object.assign(mergedMap.get(obj.id), obj);
      }
    }
  
    // Convert map values to an array and sort by id
    const joinedArray = Array.from(mergedMap.values()).sort((a, b) => a.id - b.id);
  
    return joinedArray;
  }
  
  // Example usage:
  const arr1 = [{ "id": 1, "x": 36, "d": 26, "f": 35 }, { "id": 3, "c": 20, "z": 75 }];
  const arr2 = [{ "id": 2, "o": 48, "z": 84, "y": 61 }];
  
  const result = mergeArrays(arr1, arr2);
  console.log(result);
  