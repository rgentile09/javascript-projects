const checkFive = require('../checkFive');

describe("checkFive", function() {

    test("returns the number 5 when num = 5", function(){
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.")
    
    });
    test("returns a number less than 5 when num < 5.", function() {
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.")
    });

    test("returns a number > 5 when num > 5.", function(){
        let output = checkFive(10);
        expect(output).toEqual("10 is greater than 5.")
    });
});