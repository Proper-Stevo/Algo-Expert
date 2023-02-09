function sortedSquaredArray(array) {
    // Write your code here.
    const result = new Array(array.length);
    let leftPointer = 0;
    let rightPointer = array.length - 1;
  
    for (let i = array.length - 1; i >= 0; i--) {
    const leftSquared = array[leftPointer] ** 2;
    const rightSquared = array[rightPointer] ** 2;
  
        if (leftSquared > rightSquared) {
          result[i] = leftSquared;
        leftPointer++;
      } else {
        result[i] = rightSquared;
        rightPointer--;
      }
    }
    return result;
  }
  
  // Do not edit the line below.
  exports.sortedSquaredArray = sortedSquaredArray;

  //Link to question: https://www.algoexpert.io/questions/sorted-squared-array