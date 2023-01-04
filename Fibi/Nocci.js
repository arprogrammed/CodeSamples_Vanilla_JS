// Fibi uses a basic function with a number parameter.
function fibonacciGenerator (n) {
    // Control variables for counting and containing.
    var output = [];
    var count = 0;

    // While loop evaluates the current length of list/array
    // and will continue on true of less than parameter.
    while (output.length < n) {
        // Pushes count of 0 in
        output.push(count);
        // If logic evals the current number for determining if
        // it needs to be incremented, not incremented, or lastly
        // needs to have the previous two values added and pushed.
        if (count === 0) {
            count++;
        } else if (count === 1 && output[0] === 0 && output.length === 2) {
            count;
        } else {
            count = count + output[output.length - 2];
        }
    }

    // The list/array is passed out of the function.
    return output
}