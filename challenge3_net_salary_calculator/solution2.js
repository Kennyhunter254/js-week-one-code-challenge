function calculateNetSalary() {
    let basicSalary = prompt("Enter basic salary:");
    let benefits = prompt("Enter benefits:");
    basicSalary = parseFloat(basicSalary);
    benefits = parseFloat(benefits);

    let grossSalary = basicSalary + benefits;

    // Calculations based on provided links and assumed values
    let payee = calculatePayee(grossSalary);
    let nhif = calculateNHIF(grossSalary);
    let nssf = calculateNSSF(grossSalary);

    let netSalary = grossSalary - (payee + nhif + nssf);

    console.log("Gross Salary: " + grossSalary);
    console.log("Payee (Tax): " + payee);
    console.log("NHIF Deductions: " + nhif);
    console.log("NSSF Deductions: " + nssf);
    console.log("Net Salary: " + netSalary);
}

function calculatePayee(grossSalary) {
    // Implement tax calculation logic based on KRA rates
    // Placeholder calculation
    return grossSalary * 0.3;
}

function calculateNHIF(grossSalary) {
    // Implement NHIF calculation logic based on NHIF rates
    // Placeholder calculation
    return 1000;
}

function calculateNSSF(grossSalary) {
    // Implement NSSF calculation logic based on NSSF rates
    // Placeholder calculation
    return 200;
}

calculateNetSalary();