const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
firstThree = str.slice(0,3);
theRest = str.slice(3,11);
pigLatin = `${theRest}${firstThree}`;
console.log(`${str} reorganized with the first 3 characters at the end is ${pigLatin}!`);


//Hint - define another variable to hold the new string or reassign the new string to str.

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let howManyLetters = input.question("How many number of letters do you want to relocate? ");

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
