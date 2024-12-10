function monthlySavings(payments, livingCost) {
   
    if (!Array.isArray(payments) || typeof livingCost !== "number") {
        return "invalid input";
    }

    let totalPayments = 0; 
    
    for (let i = 0; i < payments.length; i++) {
        if (payments[i] >= 3000) {
            let c=payments[i]*.20;
            totalPayments += payments[i]-c; 
        } else {
            totalPayments += payments[i]; 
        }
         
    }

    
    const savings = totalPayments- livingCost;

    if (savings >= 0) {
        return savings;
    } else if (savings == 0) {
        return 0;
    } else {
        return "earn more";
    }
}

console.log(monthlySavings([1000, 2000, 3000], 5400));  
console.log(monthlySavings([1000, 2000, 2500], 5000));  
console.log(monthlySavings([900, 2700, 3400], 10000));  
console.log(monthlySavings(100, [900, 2700, 3400]));