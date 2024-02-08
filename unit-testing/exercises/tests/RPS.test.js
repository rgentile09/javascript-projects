const rps = require('../RPS');

describe("rps", function(){
    test("returns 'TIE' if players throw same hand", function() {
       let output = rps('rock', 'rock');
       expect(output).toBe("TIE!")
    });

    test("returns 'player two wins' if P1 = rock, P2 = paper", function() {
        let output = rps('rock', 'paper');
        expect(output).toBe("Player 2 wins!");
    });

    test("returns 'player two wins' if P1 = paper, P2 = scissors", function() {
        let output = rps('paper', 'scissors');
        expect(output).toBe('Player 2 wins!');
    });
    test("returns 'player two wins' if P1 = scissors, P2 = rock", function() {
        let output = rps('scissors', 'rock');
        expect(output).toBe('Player 2 wins!');
    });
    test("returns player one wins for any other scenario", function() {
        let output = rps('scissors', 'paper');
        expect(output).toBe('Player 1 wins!');
    });
    test("returns invalid input if player enters something other than RPS", function() {
        let output = rps('turtle', 'paper');
        expect(output).toBe("Invalid hand, please throw 'rock', 'paper' or 'scissors'.");

    });
});
