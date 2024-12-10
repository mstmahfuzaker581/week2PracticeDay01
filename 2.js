const EvenOdd=(num)=>{
    if(num%2===0)
    {
        return "This number is even number";
    }
    else
    {
        return "This number is odd number";
    }
}
let num=prompt("Enter a number:");
const result=EvenOdd(num);
console.log(result);