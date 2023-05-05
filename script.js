//                                       ARRAYS AND LOOP

/*Question no 01: Declare and initialize an empty multidimensional array.
(Array of arrays)*/
var multiDimArray = [[]];
console.log();(multiDimArray);

/*Question no 02: Declare and initialize a multidimensional array
representing the following matrix:*/
var matrix = [];
for (var i = 0; i < 3; i++) {
  matrix[i] = [];
  for (var j = 0; j < 4; j++) {
    if (i === 0) {
      matrix[i][j] = j;
    } else if (i === 1) {
      matrix[i][j] = (j + 1) % 4;
    } else {
      matrix[i][j] = (3 - j) % 4;
    }
  }
}
console.log(matrix);

/*Question no 03: Write a program to print numeric counting from 1 to 10*/
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br />");
  }  

/*Question no 04: Write a program to print multiplication table of any
number using for loop. Table number & length should be
taken as an input from user.*/
var num = parseInt(prompt("Enter a number to print its multiplication table: "));
var length = parseInt(prompt("Enter the length of the multiplication table: "));
console.log("Multiplication table of " + num + " for length " + length + ":\n");
for (var i = 1; i <= length; i++) {
  console.log(num + " x " + i + " = " + (num*i));
}

/*Question no 05: Write a program to print items of the following array
using for loop:
fruits = [“apple”, “banana”, “mango”, “orange”,
“strawberry”]*/
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
  document.write((fruits[i]) + ("<br />"));
}

/*Question no 06: Generate the following series in your browser. See
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k*/
document.write("a. Counting: ");
for (var i = 1; i <= 15; i++) {
  document.write(i + ", ");
}
document.write("<br>");
document.write("b. Reverse counting: ");
for (var i = 10; i >= 1; i--) {
  document.write(i + ", ");
}
document.write("<br>");
document.write("c. Even: ");
for (var i = 0; i <= 20; i += 2) {
  document.write(i + ", ");
}
document.write("<br>");
document.write("d. Odd: ");
for (var i = 1; i <= 19; i += 2) {
  document.write(i + ", ");
}
document.write("<br>");
document.write("e. Series: ");
for (var i = 2; i <= 20; i += 2) {
  document.write(i + "k, ");
}

/*Question no 07: You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array.
After searching, prompt the user whether the given item is
found in the list or not.*/
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order today?").toLowerCase();
var index = bakeryItems.indexOf(userInput);
if (index !== -1) {
  alert(userInput + " is available at index " + index + " in our bakery.");
} else {
  alert("We are sorry. " + userInput + " is not available in our bakery.");
}

/*Question no 08: Write a program to identify the largest number in the
given array.
A = [24, 53, 78, 91, 12].*/
var A = [24, 53, 78, 91, 12];
var largest = A[0];
for (var i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i];
  }
}
console.log("Array Items: " + A);
console.log("The largest number in the array is " + largest);

/*Question no 09: Write a program to identify the smallest number in the
given array.
A = [24, 53, 78, 91, 12]*/
var A = [24, 53, 78, 91, 12];
var smallest = A[0];
for (var i = 1; i < A.length; i++) {
  if (A[i] < smallest) {
    smallest = A[i];
  }
}
console.log("Array Items: " + A);
console.log("The smallest number in the array is: " + smallest);

/*Question no 10: Write a program to print multiples of 5 ranging 1 to
100.*/
for (var i = 1; i <= 20; i++) {
    document.write(i * 5 + "<br />");
  }  