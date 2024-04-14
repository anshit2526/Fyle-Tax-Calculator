const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Declaring variables to target some elements from the DOM
let grossAnnualIncome = document.getElementById("gross-annual-income");
let extraIncome = document.getElementById("extra-income");
let ageGroup = document.getElementById("age-group");
let applicableDedcution = document.getElementById("applicable-deductions");
let calculate = document.getElementById("calculate");
let overallIncome = document.getElementById("overall-income");
let overallIncomeText = document.getElementById("overall-income-text");


// Filling the value in input field 'age-group' from the dropdown menu
let age40 = document.getElementById("age-40");
let age40to60 = document.getElementById("age-40-60");
let age60 = document.getElementById("age-60");
$(age40).click(() => {
    ageGroup.value = '<40';
})
$(age40to60).click(() => {
    ageGroup.value = '\u226540 & <60';
})
$(age60).click(() => {
    ageGroup.value = `\u226560`;
})


// This function is calle when the user clicks on the 'Calculate' button. This function calculate the tax based on the age group and gross annual income.
const calculateTax = () => {

    // parsing the values from the input fields to calculate the tax.
    let grossAnnualIncomeValue = document.getElementById("gross-annual-income").value;
    let extraIncomeValue = document.getElementById("extra-income").value;
    let ageGroupValue = document.getElementById("age-group").value;
    let applicableDedcutionValue = document.getElementById("applicable-deductions").value;

    // converting all the values to floating point numbers as input fields treat every input as string. This is done by array destructuring.
    [
        grossAnnualIncomeValue,
        extraIncomeValue,
        applicableDedcutionValue
    ] = [
            parseFloat(grossAnnualIncomeValue),
            parseFloat(extraIncomeValue),
            parseFloat(applicableDedcutionValue)
        ];

    // calculating the income after the deductions
    let incomeAfterDeduction = (grossAnnualIncomeValue + extraIncomeValue) - applicableDedcutionValue;

    if (incomeAfterDeduction <= 800000) {
        console.log("No taxes will be charged");
        overallIncome.innerText = incomeAfterDeduction;
        overallIncomeText.innerText = 'No taxes will be charged';
    } else {
        console.log('i am inside else')
        if (ageGroupValue === '<40') {
            overallIncome.innerText = grossAnnualIncomeValue - (grossAnnualIncomeValue * 0.3);
            overallIncomeText.innerText = 'after 30% of tax deduction';
        }
        else if (ageGroupValue === '≥40 & <60') {
            overallIncome.innerText = grossAnnualIncomeValue - (grossAnnualIncomeValue * 0.4);
            overallIncomeText.innerText = 'after 40% of tax deduction';
        }
        else if (ageGroupValue === '≥60') {
            overallIncome.innerText = grossAnnualIncomeValue - (grossAnnualIncomeValue * 0.1);
            overallIncomeText.innerText = 'after 10% of tax deduction';
        }

    }

}


