var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let bigN = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (bigN< numbers[i]) {
       bigN=numbers[i];
    }
}
console.log(bigN);