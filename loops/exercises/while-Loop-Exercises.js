//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');
let startingFuel = 0, numberAstronauts = -1, maxAltitude = 0;



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

  while (startingFuel < 5000 || startingFuel > 30000 || isNaN(startingFuel)) {
    startingFuel = Number(input.question("How much fuel is the shuttle starting with? "))
    
  }

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */





//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
  while (numberAstronauts >= 7 || numberAstronauts < 0 || isNaN(numberAstronauts)) {
    numberAstronauts = Number(input.question("How many astronauts are on the shuttle? "));
    
  }
    let i = 0;
  
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
  let numberOfTrips = 0
while (startingFuel >= 0) {
     startingFuel = startingFuel - (numberAstronauts * 100);
    i = i + 1;
   
  }
console.log(i * 50);

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
