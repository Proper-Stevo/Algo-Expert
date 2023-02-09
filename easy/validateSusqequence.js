function isValidSubsequence(array, sequence) {
    // Write your code here.
    let sequenceLocation = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] === sequence[sequenceLocation]) {
        sequenceLocation++;
      }
    }
  
    if (sequenceLocation === sequence.length) {
      return true 
    } else {
      return false
    }
  }
  
  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;
  

  // Link to Question is: https://www.algoexpert.io/questions/validate-subsequence