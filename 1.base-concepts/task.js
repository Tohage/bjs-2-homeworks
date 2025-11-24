"use strict";

function solveEquation(a, b, c) {
  const d = b ** 2 - 4 * a * c;
  const results = [];

  if (d < 0) {
    return results; 
  } else if (d === 0) {
    const x = -b / (2 * a);
    results.push(x);
  } else {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    results.push(x1, x2);
  }

  return results;
}

console.log(solveEquation(1, 5, 64);
console.log(solveEquation(1, 2, 1));
console.log(solveEquation(1, 2, 10));




"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    percent = Number(percent);
    contribution = Number(contribution);
    amount = Number(amount);
    countMonths = Number(countMonths);

    if (
        isNaN(percent) ||
        isNaN(contribution) ||
        isNaN(amount) ||
        isNaN(countMonths)
    ) {
        return false;
    }

    let monthlyRate = (percent / 100) / 12;

    let loanBody = amount - contribution;

    if (loanBody <= 0) {
        return 0; 
    }

   
    let payment = loanBody * (monthlyRate + (monthlyRate / ((1 + monthlyRate) ** countMonths - 1)));

    let totalAmount = payment * countMonths;

    return Number(totalAmount.toFixed(2));
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 0, 20000, 24));
console.log(calculateTotalMortgage(10, 1000, 20000, 24));
console.log(calculateTotalMortgage(10, 20000, 20000, 24));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36));
