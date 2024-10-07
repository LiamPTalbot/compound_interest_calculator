
# Compound Interest Calculator

This program calculates the final value of an investment after a certain number of years of monthly contributions and compounding interest. It compares the final value with a simple calculation that does not include interest, so you can see the difference that compounding interest makes.

## Features

- Accepts user input for initial investment, monthly contributions, number of years, and expected interest rate.
- Calculates the total value with compound interest.
- Provides the regular amount without interest for comparison.
- Outputs the difference between the two values.

## How it Works

1. The user is prompted to input:
   - Initial investment (`init_amount`)
   - Monthly contribution (`monthly_contributions`)
   - Number of years for compounding (`number_of_years`)
   - Expected annual interest rate (`interest_rate`)

2. The program computes:
   - The final amount using compound interest formula
   - The regular amount without compounding

3. It prints a summary with:
   - The final amount with compound interest
   - The regular amount without compounding
   - The difference between these two amounts

## Functions

### `compound_interest(init_amount, monthly_contributions, number_of_years, interest_rate)`
Calculates the final value of the investment with compound interest.

- **Parameters:**
  - `init_amount`: The initial investment amount.
  - `monthly_contributions`: The monthly contribution to the investment.
  - `number_of_years`: The number of years over which the investment will grow.
  - `interest_rate`: The annual interest rate.

### `calculate_regular_amount(init_amount, monthly_contributions, number_of_years)`
Calculates the total amount without interest (regular growth).

### `print_output(init_amount, monthly_contributions, number_of_years, interest_rate)`
Generates and prints a summary of the results, including both the compounded and non-compounded values.

### `run()`
Prompts the user for input and runs the calculations, printing the final summary.

## Usage

Run the program and input the required values when prompted:

```
node your_program.js
```

Example interaction:

```
What is your initial investment? 1000
What is your monthly contribution? 100
For how many years would you like to compound your interest? 5
What is your expected interest rate? 5
```

### Output:

```
INIT_AMOUNT: $1000

MONTHLY_CONTRIBUTION: $100

NUMBER_OF_YEARS: 5

INTEREST_RATE: 5%

FINAL_COMBINED_VALUE: $8631.41

REGULAR_AMOUNT: $12000

DIFFERENCE: $631.41
```

## Requirements

- **Node.js** installed in your system.
- **Prompt-sync** package for user input.

To install the `prompt-sync` package, use:

```
npm install prompt-sync
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
