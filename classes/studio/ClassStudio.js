//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(score){
        this.scores.push(score);

    }
    average() {
        let sum = 0
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
            let average = sum / this.scores.length;
            return Math.round(average *10) / 10;
    }
    status() {
            if (this.average() >= 90) {
                return "Accepted";
            } else if(this.average() >= 80) {
                return "Reserve";
            } else if (this.average() >= 70) {
                return "Probationary";
            } else {
                return "Rejected"
            }
        

    }
}
let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

merryMaltese.average()
console.log(merryMaltese.average());
// console.log(gladGator);

bubbaBear.addScore(83);
// gladGator.addScore(100);
// gladGator.addScore(100);
// console.log(bubbaBear);
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
let tests= 0;
while(gladGator.average() < 90) {
    gladGator.addScore(100)
    tests = tests + 1
   
}
console.log(`It took ${gladGator.name} ${tests} more tests to get to "Accepted" status`);

console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()} and has a status of ${bubbaBear.status()}.`);
console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.average()} and has a status of ${merryMaltese.status()}.`);

console.log(`${gladGator.name} earned an average test score of ${gladGator.average()} and has a status of ${gladGator.status()}.`);

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.


