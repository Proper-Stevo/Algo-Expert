function tournamentWinner(competitions, results) {
    // Write your code here.
    
    // scores = {"C#": 3, "":0, "Python":6};
    // bestTeam = "Python"
    let winner = {score: 0, name: ''};
    const scoreMap = {};
  
    for (let i = 0; i < competitions.length; i++) {
      let homeTeam = competitions[i][0];
      let awayTeam = competitions[i][1];
  
      if(results[i] === 0) {
        scoreMap[awayTeam] = (scoreMap[awayTeam] ||0) + 3;
      } else {
        scoreMap[homeTeam] = (scoreMap[homeTeam] || 0) + 3;
      }
  
      if(scoreMap[awayTeam] >= winner.score){
        winner = {score: scoreMap[awayTeam], name: awayTeam};
      } else if (scoreMap[homeTeam] >= winner.score){
        winner = {score: scoreMap[homeTeam], name: homeTeam}
      }
    }
    return winner.name;
  }
  
  // Do not edit the line below.
  exports.tournamentWinner = tournamentWinner;

  //link for question: https://www.algoexpert.io/questions/tournament-winner