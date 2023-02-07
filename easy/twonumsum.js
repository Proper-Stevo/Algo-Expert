function twoNumberSum(array, targetSum) {
    // Write your code here.
    for (let i = 0; i < array.length; i++) {
      let potentialSum = targetSum - array[i]
      if (array.includes(potentialSum) && (potentialSum != array[i])) {
        return [potentialSum, array[i]]
      }
    } 
  
    return [];
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;

// Question for reference:
// https://www.algoexpert.io/questions/two-number-sum