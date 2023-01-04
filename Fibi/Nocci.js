function fibonacciGenerator (n) {
    var output = [];
    var count = 0;

    while (output.length < n) {
        output.push(count);
        if (count === 0) {
            count++;
        } else if (count === 1 && output[0] === 0 && output.length === 2) {
            count;
        } else {
            count = count + output[output.length - 2];
        }
    }

    return output
}