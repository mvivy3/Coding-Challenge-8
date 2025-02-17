// TASK 1 FUNCTION DECLARATION

function calculateSalary(baseSalary, bonus, taxRate) { // Write a function that computes the net salary
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate)
    return `Net Salary: $${netSalary.toFixed(2)}`;
}

// Test Cases
console.log(calculateSalary(5000, 500, 0.1)); // Expected output: "Net Salary: $5000.00"
console.log(calculateSalary(7000, 1000, 0.15)); // Expected output: "Net Salary: $6950.00"

// TASK 2: FUNCTION EXPRESSION

const calculateDiscount = function(price, discountRate) { // Declare a function expression to determine the final price
let finalPrice = price - (price * discountRate)
return `Final Price: $${finalPrice.toFixed(2)}`;
}

// Test Cases
console.log(calculateDiscount(100, 0.2)); // Expected output: "Final Price $80.00"
console.log(calculateDiscount(250, 0.15)); // Expected output: "Final Price: $212.50"

// TASK 3: ARROW FUNCTION

const calculateServiceFee = (amount, serviceType) => {
    let fee = 0;
    if (serviceType === "Premium")
        fee = amount * 0.15
    else if (serviceType === "Standard")
        fee = amount * 0.10
    else    
        fee = amount * 0.05
    return `Service Fee: $${fee.toFixed(2)}`
}

// Test Cases
console.log(calculateServiceFee(200, "Premium")); // Expected output: "Service Fee: $30.00"
console.log(calculateServiceFee(500, "Standard")); // Expected output: "Service Fee: $50.00"

// TASK 4: PARAMETERS AND ARGUMENTS
function calculateRentalCost(days, carType, insurance = false) { // Write a function that calculates rental costs
    let plans = {"Economy": 40, "Standard": 60, "Luxury": 100}
    if (insurance) 
        return (plans[carType] * days) + (20 * days)
    else
        return (plans[carType] * days)
}

// Test Cases
console.log(`Total Rental Cost: $${calculateRentalCost(3, "Economy", true)}`); // Expected output: "Total Rental Cost: $180"
console.log(`Total Rental Cost: $${calculateRentalCost(5, "Luxury", false)}`); // Expected output: "Total Rental Cost: $500"

// TASK 5: RETURNING VALUES
function calculateLoanPayment(principal, rate, time) { // Write a function that returns total loan payment
 let totalPayment = principal + (principal * rate * time) // Formula to calculate total payment
 return `Total Payment: $${totalPayment.toFixed(2)}`
};

// Test Cases
console.log(calculateLoanPayment(1000, 0.05, 2)); // Expected output: "Total Payment: $1100.00"
console.log(calculateLoanPayment(5000, 0.07, 3)); // Expected output: "Total Payment: $6050.00"
