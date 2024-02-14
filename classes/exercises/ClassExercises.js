// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, numPages, numCheckOuts, hasBeenDiscarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this. numPages = numPages;
        this.numCheckOuts = numCheckOuts;
        this.hasBeenDiscarded = hasBeenDiscarded;
    }
    checkout(uses=1) {
        this.numCheckOuts += uses;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, numPages, numCheckOuts, hasBeenDiscarded) {
        super(title, author, copyrightDate, isbn, numPages, numCheckOuts, hasBeenDiscarded);
    }
    dispose(currentYear) {
        if (currentYear-this.copyrightDate > 5) {
            this.hasBeenDiscarded = 'Yes'
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, numPages, numCheckOuts, hasBeenDiscarded) {
        super(title, author, copyrightDate, isbn, numPages, numCheckOuts, hasBeenDiscarded);
    }
    dispose() {
        if (this.numCheckOuts > 100) {
            this.hasBeenDiscarded = 'Yes'
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
prideAndPrejudice = new Novel('Pride and Prejudice', 'Jane Austen', 1813, 1111111111111, 432, 32, 'No');

topSecretShuttleBuildingManual = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'no');


// Code exercises 4 & 5 here:
topSecretShuttleBuildingManual.dispose(2024);
console.log(topSecretShuttleBuildingManual);
prideAndPrejudice.checkout(5);
prideAndPrejudice.dispose();
console.log(prideAndPrejudice);