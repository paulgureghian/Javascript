// Created by Paul A. Gureghian in May 2020. //
// This JavaScript program creates and extracts info about sports teams. //     

// Start of program. //

// Create a 'team' object. //
const team = {

    // Add object properties. //
    _players: [
        {firstName: "James", lastName: "Worthy", age: 25},
        {firstName: "Kobe", lastName: "Bryant", age: 30},
        {firstName: "Jerry", lastName: "West", age:32}
    ],
    _games: [
        {opponent: "Celtics", teamPoints: 120, opponentPoints: 133},
        {opponent: "Bucks", teamPoints :122, opponentPoints: 134},
        {opponent: "Knicks", teamPoints: 150, opponentPoints: 144}    
    ],

    // Create getter methods for the keys. //
    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    // Add an 'addPlayer' method. ///
    addPlayer(firstName, lastName, age) {
       let player = {
           firstName: firstName,
           lastName: lastName,
           age: age
       };
       this.players.push(player);
    }
};

team.addPlayer("Norm", "Nixon", 28);
team.addPlayer("Luke", "Walton", 30);
team.addPlayer("Larry", "Bird", 32); 

console.log(team.players);