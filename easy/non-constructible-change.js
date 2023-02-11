function nonConstructibleChange(coins) {
    // Write your code here.
    
    let sortedCoints = coins.sort(function (a, b) {return a - b});
     if(!sortedCoints.length) return 1;
    let change = 0;
    // let sum = x + y;let change = 0;
    // sort, loop, add, return +1
    for (let i = 0; i < sortedCoints.length; i++) {
      
      
      // let num1 = sortedCoints[i];
      // let num2 = sortedCoints[i + 1];
  
      if (sortedCoints[i] > (change +1)) {
        break
    } else {
        change = change + sortedCoints[i]
      }
    }
    
    return change + 1
  }
  
  // Do not edit the line below.
  exports.nonConstructibleChange = nonConstructibleChange;
  

  //link for website: https://www.algoexpert.io/questions/non-constructible-change