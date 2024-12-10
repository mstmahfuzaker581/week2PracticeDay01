let year = prompt("Enter a year:");
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("This " + year + " is a Leap Year");
} else {
    console.log("This " + year + " is not a Leap Year");
}
