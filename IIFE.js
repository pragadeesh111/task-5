// 1. Do the below programs in anonymous function & IIFE
//  a. Print odd numbers in an array
        let oddNumber = [];
        function findOddNum(arrOfNum){
            for(let i=0;i<arrOfNum.length;i++){
                if(arrOfNum[i]%2==1){
                    oddNumber.push(arrOfNum[i]);
                }
            } return oddNumber;
        } 
        let arrOfNum = [1,2,3,4,5,6,7,8,9];
        console.log(findOddNum(arrOfNum));   //output - [1,3,5,7,9]


//  b. Convert all the strings to title caps in a string array
        function titleCase(str) {
            return str.toLowerCase().split(" ").map(function(word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(" ");
        } console.log(titleCase("hi guvi"));    //output - Hi Guvi


//  c. Sum of all numbers in an array
        function sumOfNum(num){
            for (value of num){
                sum+=value;
            }
            return sum;
        } 
        var sum=0;
        var num = [1,2,3,4,5];
        console.log(sumOfNum(num)); //output - 15

        
//  d. Return all the prime numbers in an array
        function isPrime(num) {
            for (let i = 2; num > i; i++) {
            if (num % i == 0) {
            return false;
            }
            }
            return num > 1;
        }
        var primeNumber = [1,2,3,4,5,6,7,8,9];
        console.log(primeNumber.filter(isPrime)); // output - [2,3,5,7]


//  e. Return all the palindromes in an array
        function pallindromes(arr){
            for(string of arr){
                let reverse =string.split("").reverse().join("");
                if(string==reverse){
                    output.push(reverse);
                }
            } return output;
        } 
        var arr = ["nitin", "sankar", "racecar"];
        var output = [];
        console.log(pallindromes(arr));   // output - ['nitin', 'racecar']


//  f. Return median of two sorted arrays of the same size.
        (function(arr1,arr2){
            let merge = [];
            for(let i=0;i<arr1.length && i<arr2.length;i++){
                merge.push(arr1[i],arr2[i]);
            }
            merge.sort((a,b)=>a-b);
            let middle = Math.floor(merge.length/2);
            console.log((merge[middle-1]+merge[middle])/2); // output - [4.5]
        })([2,3,4,5],[9,1,7,8]);


//  g. Remove duplicates from an array
        function duplicatesArray(inp){
         return inp.filter((item,index)=> inp.indexOf(item) === index);
        }
        var inp = [1,2,3,1,2,3,4];
        console.log(duplicatesArray(inp)); // output - [1,2,3,4]


//  h. Rotate an array by k times
        var rotate = function(a,k){
            n=a.length;
            c=[];
            d="";
        for(i=0;i<n;i++){
            c[(i+k)%(n)]=a[i];
        } 
        for(i=0;i<c.length-1;i++){
            d+=c[i]+" ";
        }
            d+=c[c.length-1];
        return d;
        }      
        console.log(rotate([1,2,3,4,5],2)); // output : 4 5 1 2 3 