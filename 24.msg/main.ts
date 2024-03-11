//Define vaiables
let apple = "apple";
let upperCaseApple ="APPLE";
let ten =10;
let twenty = 20;
let fruits =["apple","banana","orange"];
// test for equality and inequality with string
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
console.log("Is apple is not equal to apple?");
console.log(apple !="apple");
//test using lower case functions
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase()== "apple");
console.log("\nIs APPLE is not equal to apple after converting lowercase?");
console.log(upperCaseApple.toLowerCase() != "apple");
//numerical tests
// equal to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
// not equal to
console.log("\n is ten is not equal to twenty?");
console.log(ten != twenty);
// greater than
console.log("\n Is ten is greater than zero?");
console.log(10>0);
// less than
console.log("\n Is twenty is less than ten?");
console.log(twenty<ten);
// greater than equal to
console.log("\n Is ten is greater than or equal to 5?");
console.log(ten >= 5);
// less than equal to
console.log("\n Is twenty is less than or equal to 10?");
console.log(twenty<= 10);

// tests using "and" & "or" operators
// using && operators
console.log("\n Is twenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty!=10 && twenty > 10);

console.log("\n Is twenty is not equal to 10 and twenty is greater than 30?");
console.log(twenty!=10 && twenty > 30);

// using || or operators
console.log("\n Istwenty is greater than 50 or twenty is equal to 20?");
console.log(twenty>50 || twenty == 20);
console.log("\n Istwenty is greater than 50 or twenty is not equal to 20?");
console.log(twenty>50 || twenty!== 20);

//  Test wether item is include in array
console.log("\nIs oranges include my fruit array?");
console.log(fruits.includes("orange"));
//not equal
console.log("\n Is orange is not include my fruits array?");
console.log(!fruits.includes("orange"));
