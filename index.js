let init_amount = 20000
let monthly_contributions = 400
let number_of_years = 30
let interest_rate = 10

function compound_interest (init_amount, monthly_contributions, number_of_years, interest_rate) {
    let total = init_amount
    let annual_contribution = monthly_contributions * 12
    for (let i = 0; i < number_of_years; i++) {
        total = total + annual_contribution
        total = total * ((100 + interest_rate) / 100)
    }
    return total.toFixed(2)
}

function calculate_regular_amount (init_amount, monthly_contributions, number_of_years) {
    let total = (init_amount + (monthly_contributions * 12)) * number_of_years
    return total.toFixed(2)
}

function print_output(init_amount, monthly_contributions, number_of_years, interest_rate) {
    let final_value = compound_interest(init_amount, monthly_contributions, number_of_years, interest_rate)
    let value_without_compounding = calculate_regular_amount(init_amount, monthly_contributions, number_of_years)
    let summary =`
    INIT_AMOUNT: ${init_amount}\n
    MONTHLY_CONTRIBUTION: ${monthly_contributions}\n
    NUMBER_OF_YEARS: ${number_of_years}\n
    INTEREST_RATE: ${interest_rate}\n\n
    FINAL_COMBINED_VALUE: ${final_value}\n
    REGULAR_AMOUNT: $${value_without_compounding}\n
    DIFFERENCE: $${final_value - value_without_compounding}
    `
    console.log(summary)
}

print_output()