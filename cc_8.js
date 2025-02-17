// TASK 1 FUNCTION DECLARATION

function calculateSalary(baseSalary, bonus, taxRate) { // Write a function that computes the net salary
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate)
    return `Net Salary: $${netSalary.toFixed(2)}`;
}

// Test Cases
console.log(calculateSalary(5000, 500, 0.1)); // Expected output: "Net Salary: $5000.00"
console.log(calculateSalary(7000, 1000, 0.15)); // Expected output: "Net Salary: $6950.00"
