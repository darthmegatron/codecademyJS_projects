const team = {
  _games: [{opponent: 'Broncos', teamPoints: 42, opponentPoints: 27},
  {opponent: 'Raiders', teamPoints: 14, opponentPoints: 0},
  {opponent: 'Patriots', teamPoints: 21, opponentPoints: 77}],
  _players: [{firstName: 'Pablo', lastName: 'Sanchez', age: 11},
  {firstName: 'Brandon', lastName: 'Little', age: 10},
  {firstName: 'Eric', lastName: 'Scott', age: 12}],
  get games() {
    return this._games;
  },
  get players() {
    return this._players;
  },
  addPlayer: function (firstName, lastName, age) {
    team._players.push({firstName: firstName, lastName: lastName, age: age});
  },
  addGame: function (opponent, teamPoints, opponentPoints) {
    team._games.push({opponent: opponent, teamPoints: teamPoints, opponentPoints: opponentPoints});
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);
console.log();
team.addGame('Timerwolves', 14, 14);
team.addGame('Neighborhood United', 28, 21);
team.addGame('Orioles', 0, 10);
console.log(team.games);
