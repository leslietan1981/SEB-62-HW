// // Unit 1 - 4 Intro to JavaScript Functions Lab Exercise
// /*
// Exercise 1: maxOfTwoNumbers()

// In this exercise, create a function named maxOfTwoNumbers.
// It should take two numbers as inputs and return the larger number.
// If they're equal, return either one.

// Exercise 1 has been completed for you:
// */

// const maxOfTwoNumbers = (x, y) => {
//   if (x >= y) {
//     return x;
//   } else {
//     return y;
//   }
// };

// console.log("Exercise 1 Result:", maxOfTwoNumbers(3, 9));
// //numbers 3 and 9 passed into x and y respectively of the function maxOfTwoNumbers
// // result expected is to be 9 since the purpose of the function is to check and return the larger number

// /*
// Exercise 2: isAdult()

// Write a function named isAdult. It should take an age (number)
// and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

// Example: isAdult(21) should return 'Adult'.

// Complete the exercise in the space below:
// */

// const isAdult = (x) => {
//   const adultAge = 18;
//   if (x >= adultAge) {
//     return "Adult";
//   } else {
//     return "Minor";
//   }
// };

// console.log("Exercise 2 Result:", isAdult(21));
// // Expect result to be Adult

// /*
// Exercise 3: isCharAVowel()

// Write a function named isCharAVowel that takes a single character as
// an argument. It should return true if the character is a vowel and
// false otherwise. For the purposes of this exercise, the character
// y should not be considered a vowel.

// Example: isCharAVowel('a') should return true.

// Complete the exercise in the space below:
// */
// // Let me try ternary expression
// const isCharAVowel = (char) =>
//   char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
//     ? "Vowel"
//     : "Not a vowel";

// console.log("Exercise 3 Result:", isCharAVowel("a"));
// // Expected result would be vowel

// /*
// Exercise 4: generateEmail()

// Create a function named generateEmail. It should take two strings:
// a name and a domain. It should return a simple email address.

// Example: generateEmail('johnsmith', 'example.com')
// should return 'johnsmith@example.com'.

// Complete the exercise in the space below:
// */
// const generateEmail = (name, domain) => {
//   return name + "@" + domain;
// };
// console.log("Exercise 4 Result:", generateEmail("johnsmith", "example.com"));
// // Expected result would be johnsmith@example.com

// /*
// Exercise 5: greetUser()

// Define a function called greetUser. It should take a name and a
// time of day (morning, afternoon, evening) and return a personalized
// greeting.

// Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

// Complete the exercise in the space below:
// */

// // this is template literal
// const greetUser = (name, timeOfDay) => `Good ${timeOfDay}, ${name}!`;

// console.log("Exercise 5 Result:", greetUser("Sam", "morning"));
// // Expected result would be Good morning, Sam!

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

// Practice declarative function
function maxOfThree(x, y, z) {
  if (x >= y && x >= z) {
    return x;
  } else if (y >= z) {
    return y;
  } else return z;
}

// Try ternary
const maxOfThreeT = (x, y, z) => (x >= y && x >= z ? x : y >= z ? y : z);

console.log("Exercise 6 Result:", maxOfThree(5, 10, 8));
console.log("Exercise 6 Result using ternary:", maxOfThreeT(5, 10, 8));
