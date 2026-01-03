/**
 * Problem Solving: >>>>>>>
 */

/*
 *** Task-1: Array Filtering and Mapping
 ** Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.
 */

const peoples = [
  { name: "Alice", age: 30, gender: "female" },
  { name: "Bob", age: 25, gender: "male" },
  { name: "Charlie", age: 35, gender: "male" },
  { name: "Diana", age: 28, gender: "female" },
  { name: "Sohana", age: 25, gender: "female" },
];

const getFemales = () => {
  const people = peoples.filter((person) => person.gender === "female");
  return people.map((ppl) => ppl.name);
};
getFemales();

/*
 *** Task-2: Object Manipulation
 ** Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
 */

const books = [
  {
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    year: 1865,
  },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
];

const getBooksTitles = () => {
  const titles = books.map((book) => book.title);
  return titles;
};
getBooksTitles();

/*
 *** Task-3: Sorting Objects
 ** Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
 */

const cars = [
  { make: "Toyota", model: "Camry", year: 2018 },
  { make: "Honda", model: "Civic", year: 2020 },
  { make: "Ford", model: "Mustang", year: 2016 },
  { make: "Chevrolet", model: "Malibu", year: 2019 },
  { make: "Ford", model: "GT", year: 2013 },
];

const sortCarsByYear = () => {
  const sortedCars = cars.sort((a, b) => a.year - b.year);
  return sortedCars;
};
sortCarsByYear();

/*
 *** Task-4: Find and Modify
 ** Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
 */

const persons = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "Diana", age: 28 },
  { name: "Sohana", age: 25 },
];

const modifyPersonAge = (name, newAge) => {
  const personIndex = persons.findIndex((person) => person.name === name);
  if (personIndex !== -1) {
    persons[personIndex].age = parseInt(newAge);
  }
};
modifyPersonAge("Sohana", "32");

/*
 *** Task-5: Array Reduction
 ** Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const sumOfEvenNumbers = () => {
  const sum = numbers.reduce((accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
      return accumulator + currentValue;
    }
    return accumulator;
  }, 0);
};
sumOfEvenNumbers();


/*
 *** Task-6: Leap Year Checker
  **  Write a function that determines whether a given year is a leap year. A year is a leap year if it is divisible by 4, but not divisible by 100, unless it is also divisible by 400.
Example: Happy New Year
 */

const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;

};
console.log(isLeapYear(2024)); // true

/*
 *** Task-7: Unique Values
 ** Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.
 **
 */

const nums = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10];
const getUniqueNumbers = () => {
  const uniqueNumbers = [...new Set(nums)];
  return uniqueNumbers;
}
getUniqueNumbers();