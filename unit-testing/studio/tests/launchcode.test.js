// launchcode.test.js code:
const launchcode = require('../index.js');


describe("Testing launchcode", function(){
  
  test('Value of keys are equal to correct values', function() {
      expect(launchcode.organization).toBe('nonprofit');
      expect(launchcode.executiveDirector).toBe('Jeff');
      expect(launchcode.percentageCoolEmployees).toBe(100);
  })
  
  test('programs offered include web development, data analysis, liftoff', function() {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  })
  // launchOutput Tests
  test('When passed a number only divisible by 2, returns launch!', function() {
    expect(launchcode.launchOutput(2)).toBe("Launch!");
  })

  test('When passed a number only divisible by 3, returns Code!', function() {
    expect(launchcode.launchOutput(3)).toBe("Code!");
  })

  test('When passed a number only divisible by 5, returns Rocks!', function() {
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
  })

  test('When passed a number divisible by 2 and 3, returns LaunchCode!', function() {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  })

  test('When passed a number divisible by 3 and 5, returns Code Rocks!', function() {
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  })

  test('When passed a number divisible by 2 and 5, returns Launch Rocks!', function() {
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks!");
  })

  test('When passed a number divisible by 2, 3 and 5, returns LaunchCode Rocks!', function() {
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
  })

  test('When passed a number not divisible by 2, 3 or 5, returns Rutabagas! That doesnt work.', function() {
    expect(launchcode.launchOutput(11)).toBe("Rutabagas! That doesn't work.");
  })
});