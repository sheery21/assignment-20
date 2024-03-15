// chaptor no:14/16
// Q1

var city = "Karachi";
if (city !== "Karavi") {
  console.log("The City OF Lights");
}
// Q2
var variable1 = 11;
var variable2 = 12;
if (variable1 >= variable2) {
  variable1 = 12;
}
// Q3
if (11 !== 12) {
  alert("Congratulations! You guessed correctly.");
}
// Q4
var firstName = prompt("Please enter your first name.");
if (firstName !== "Sheri") {
  alert("No match");
}
// Q5
var studentNames = [];
var studentObjects = [];
var stringsArray = ["apple", "banana", "cherry"];
var numbersArray = [1, 2, 3, 4, 5];
var booleanArray = [true, false, true, false];
var mixedArray = ["apple", 1, true, "banana", 2, false, "cherry", 3];
var qualificationsArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// Q6
console.log("Student Names:", studentNames);
console.log("Student Objects:", studentObjects);
console.log("Strings Array:", stringsArray);
console.log("Numbers Array:", numbersArray);
console.log("Boolean Array:", booleanArray);
console.log("Mixed Array:", mixedArray);
console.log("Qualifications Array:", qualifications);    


// Q7
let colors = ['red', 'green', 'blue'];

// Q8
document.write('Initial colors: ' + colors.join(', ') + '<br>');

// Q9
let newColor = prompt('Enter a color to add to the beginning:');
colors.unshift(newColor);

// Q10
document.write('Updated colors after adding to the beginning: ' + colors.join(', ') + '<br>');

// Q11
newColor = prompt('Enter a color to add to the end:');
colors.push(newColor);