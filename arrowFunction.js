// 3. Do the below programs in arrow function
// a. Print odd numbers in an array
let numbers = [1,2,3,4,5,6,7,8,9,10];
let odd = numbers.filter((data)=> data%2==1);
console.log(odd); // output : [1,3,5,7,9]

// b. Convert all the strings to title caps in a string array
let string ="hi guvi";
let output = string.split(" ").map((word)=> word.charAt(0).toUpperCase() + word.slice(1));
console.log(output.join(" ")); // output : Hi Guvi

// c. Sum of all numbers in an array
let sum = ((a,b)=> a+b);
console.log(sum(2,5)); // output : 7
 
// d. Return all the prime numbers in an array
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let primeNumber = num => {
        for(let i=2; i<num; i++){
         if(num%i===0) return false;
        } return num !== 1;
};

let prime = array.filter((data)=>primeNumber(data));
console.log(prime); //output : [2,3,5,7,11,13]

// e. Return all the palindromes in an array
var str = ["racecar"];
var out =  str.map((data)=> {
        var reverse = data.split("").reverse().join("");
        if(data == reverse){
                return "Is palindromes";
        } else {
                return "Is not a palindromes";
        }
        });
console.log(out);