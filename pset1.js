/*
    @TODO: READ THIS!
    
    
    Implement the following functions __RECURSIVELY__
    NOTE: autoplay has been TURNED OFF to protect against
    accidental infinite loops. Feel free to turn back on but
    do so AT YOUR OWN RISK.
*/

/*  1
    @function factorial
    @param n {number}
    @returns {number}
    @description:
        - factorial is defined to be n!
            or, 5! = 5*4*3*2*1
*/

const factorial = (n) => {
        if (n < 2) {
                return n;
        }
        return factorial(n-1) * n;
}

console.log(factorial(5));

/*  2
    @function getInRange
    @param s {number}
    @param e {number}
    @returns {array}
    @description:
        - generate numbers in range
            for example getInRange(2,5) 
            should give us back [2,3,4,5]
    
    HINT:
        - remember to account for what happens if s > e!
*/

const getInRange = (s, e) => {
        if (s >= e){
            return [s];
        }
        return [s].concat(getInRange(s + 1, e));
    }

    console.log(getInRange(2,5));
    console.log(getInRange(-10, -5));
    
/*  3
    @function isEven
    @param n {number}
    @returns {boolean}
    @description:
        - determine without using % operator or Math.floor(), etc
            whether or not a number is even
*/

const isEven = (n) => {
        if(n < 0){
                return isEven(n * -1);
        }
        if (n === 0) {
                return true;
        }
        if (n === 1) {
                return false
        }
        return isEven(n - 2);
}

console.log( isEven(9) );

/*  4
    @function pow
    @param b {number}
    @param n {number}
    @returns {number}
    @description:
        - determine without using anything other than multiplication
            the value of b^n
*/

const pow = (b, n) => {
        if (n === 1){
                return b;
        }
        return pow(b, n - 1) * b;
}

console.log(pow(8 , 8), `should equal ${8**8}`)

/*  5
    @function multiply
    @param a {number}
    @param b {number}
    @returns {number}
    @description:
        - determine without using multiplication operator the product
            of a and b
*/

const multiply = (a, b) => {
        if (b === 1){
                return a;
        }
        return pow(a, b - 1) + a;
}

console.log(multiply(2 , 3))


/*  6
    @function reverse
    @param s {string}
    @returns {string}
    @description:
        - recursively reverse a string
*/


const reverse = (s) => {
        if(s === ''){
                return s;
        }
        return s.slice(-1) + reverse(s.slice(0 , -1))
}

console.log(reverse('string'))

/*  7
    @function isPalindrome
    @param s {string}
    @returns {boolean}
    @description:
        - recursively determine if a string is a palindrome
*/

const isPalindrome = s =>  s === reverse(s);

console.log(isPalindrome('racecar'));


/*  8
    @function map
    @param arr {array}
    @param cb {function}
    @returns {array}
    @description:
        - recursively implement map
*/


/*  9
    @function filter
    @param arr {array}
    @param cb {function}
    @returns {array}
    @description:
        - recursively implement filter
*/


/*  10
    @function reduce
    @param arr {array}
    @param cb {function}
    @param acc {anything}
    @returns {anything}
    @description:
        - recursively implement reduce
*/




