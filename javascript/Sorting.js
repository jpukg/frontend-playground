// Take away - ASCII
//https://www.techonthenet.com/ascii/chart.php

const fruits = ['orange', 'apple', 'peach'];
const numbers = ["0", "america", 10, 6564654,  "Apple", "@", 5, 9, 2, 2];

//Sorting with custom function
//NOTE: PLAY WITH CARE
// If we go with custom function, then the bountry condition (ex, @, A-Uppercase , a-lowercase) should be handled explicitly
console.log(numbers.sort((a, b) => {
    return (a - b);
}));

//Sorting with default sort function
console.log(numbers.sort());