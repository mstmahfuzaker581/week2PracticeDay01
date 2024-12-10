const calculateScore=(marks)=>{
    if(marks>=80 && marks<=100){
        return 'A+'; 
    }
    else if(marks>=70 && marks<=79){
        return 'A' 
    }
    else if(marks>=60 && marks<=69){
        return 'A-' 
    }
    else if(marks>=50 && marks<=59){
        return 'B' 
    }
    else if(marks>=40 && marks<=49){
        return 'C' 
    }
    else if(marks>=33 && marks<=39){
        return 'D' 
    }
    else {
        return 'F' 
    }
}
let marks=32;
const result=calculateScore(marks);
console.log(result)