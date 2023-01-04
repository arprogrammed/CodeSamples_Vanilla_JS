// Initializes a list/array and counter for logic.
var countList = []
var countNumber = 0

// While loop to fill list to 100.
while (countNumber < 100) {
    countNumber++;
    countList.push(countNumber);
}

// For loop with if_else to eval the number in list/array.
// Logs to console the results.
// Optionally I could initiate another list/array to push output to.
countList.forEach((numi) => {
    if (numi % 3 === 0 && numi % 5 === 0) {
        console.log("FizzBuzz");
    } else if (numi % 3 === 0) {
        console.log("Fizz");
    } else if (numi % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(numi);
    }
    
});

// This method preserves the original data set of 1-100
// for use later if needed.