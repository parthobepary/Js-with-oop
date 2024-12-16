// Learn recursive function in TypeScript
// Make a recursive function to calculate the factorial of a number

// find a sum of a large number

const sum = (n: number) => {
    if (n === 0) return 0;

    return n + sum(n - 1);
}

// console.log(sum(1000));

// find a factorial of a 5

// const factorial = (n: number): number => {
//     if (n === 0) return 1;
//
//     return n * factorial(n - 1);
// }
//
// console.log(factorial(6));

/*
here is the problem. If we pass a large number to the factorial function,
it will throw a RangeError: Maximum call stack size exceeded error.

coz of we know js hase a call stack limit. and every time we call a function it will add a new stack to the call stack.
it depends on the browser or nodejs environment. but it is limited.

that's why we need to use the tail recursion function. or we can use for loop.
for loop some time stop synchronous code. but it is better than the recursive function. it will run. and show output.


The best solution is:
use many math equations to solve the problem. like the factorial of a number.
*/
