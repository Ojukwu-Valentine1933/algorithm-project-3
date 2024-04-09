function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

let year = parseInt(prompt("Enter a year: "));
if (isLeapYear(year)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}




function ticketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

let age = parseInt(prompt("Enter your age: "));
console.log(`The ticket price for you is $${ticketPrice(age)}.`);


function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

let n = parseInt(prompt("Enter the value of n for Fibonacci sequence: "));
console.log(`The ${n}th Fibonacci number is ${fibonacci(n)}.`);



function isPalindrome(s) {
    s = s.toLowerCase().replace(/\s/g, "").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    if (s.length <= 1) {
        return true;
    } else if (s[0] !== s[s.length - 1]) {
        return false;
    } else {
        return isPalindrome(s.substring(1, s.length - 1));
    }
}

let string = prompt("Enter a string: ");
if (isPalindrome(string)) {
    console.log(`${string} is a palindrome.`);
} else {
    console.log(`${string} is not a palindrome.`);
}


function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else if (exponent > 0) {
        return base * power(base, exponent - 1);
    } else {
        return 1 / (base * power(base, -exponent - 1));
    }
}

let base = parseFloat(prompt("Enter the base: "));
let exponent = parseInt(prompt("Enter the exponent: "));
console.log(`${base} raised to the power of ${exponent} is ${power(base, exponent)}.`);
