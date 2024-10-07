const prompt = require('prompt-sync')()

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
    FINAL_COMBINED_VALUE: $${final_value}\n
    REGULAR_AMOUNT: $${value_without_compounding}\n
    DIFFERENCE: $${(final_value - value_without_compounding).toFixed(2)}
    `
    console.log(summary)
}

function run () {
    let init_amount = parseInt(prompt('What is your initial investment?'))
    let monthly_contributions = parseInt(prompt('What is your monthly contribution?'))
    let number_of_years = parseInt(prompt('For home many years would you like to compound your interest?'))
    let interest_rate = parseInt(prompt('What is your expected interest rate?'))

    print_output(init_amount, monthly_contributions, number_of_years, interest_rate)
}

run()