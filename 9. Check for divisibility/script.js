// get input from user
const user_input = prompt("Enter a list of numbers separated by commas:");

// convert input string to array of numbers
const numbers = user_input.split(',').map(num => parseInt(num));

// loop through the numbers and print those that meet the criteria
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  if (num % 2 === 0) {
    continue; // skip the number if it's divisible by 2
  }
  if (num % 3 === 0) {
    console.log(num); // print the number if it's divisible by 3 and not by 2
  }
}
