function minimumWaitingTime(queries) {
    // Write your code here.
    queries.sort((a, b) => a - b);
  
    let total = 0;
    let queriesLeft = 0;
  
    for (let i = 1; i < queries.length; i++) {
      queriesLeft = (queries.length - i) * queries[i -1]
      total = total + queriesLeft
    }
    return total
  }
  // Do not edit the line below.
  exports.minimumWaitingTime = minimumWaitingTime;
  