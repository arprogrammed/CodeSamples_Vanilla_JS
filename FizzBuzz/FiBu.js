var countList = []
var countNumber = 0

while (countNumber < 100) {
    countNumber++;
    countList.push(countNumber);
}

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