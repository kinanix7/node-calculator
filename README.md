# Simple Calculator in Node.js

A simple command-line calculator built in Node.js. This project demonstrates basic object-oriented programming concepts and error-handling techniques in JavaScript. It also follows the SOLID principles for cleaner and modular code.

## Features

- Perform basic mathematical operations:
  - Addition (`+`)
  - Subtraction (`-`)
  - Multiplication (`*`)
  - Division (`/`)
  - Power (`^`)
  - Square root (`√`)
  - Factorial (`!`)
- User-friendly error handling:
  - Validates numerical inputs.
  - Prevents division by zero.
  - Handles negative inputs for specific operations like square root and factorial.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- `prompt-sync` package (used for user input in the terminal)

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/simple-calculator.git
   cd simple-calculator
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the program**:
   ```bash
   node calculator.js
   ```

## Usage

1. When you run the program, you'll see a menu like this:

   ```
   === Calculatrice Simple ===
   1. Addition (+)
   2. Soustraction (-)
   3. Multiplication (*)
   4. Division (/)
   5. Puissance (^)
   6. Racine carrée (√)
   7. Factorielle (!)
   8. Quitter
   ```

2. Choose the operation by entering the corresponding number (e.g., `1` for addition).
3. Follow the prompts to input the required numbers.
4. View the result or error messages (if applicable).
5. Choose `8` to exit the program.

## Code Structure

- **`calculator.js`**: Contains the entire logic of the program, including:
  - `Calculator` class: Implements the mathematical operations as methods.
  - Input validation and error handling.
  - Main loop for user interaction.

## Error Handling

- **Invalid Input**: Prompts the user to enter a valid number.
- **Division by Zero**: Prevents division by zero and displays an appropriate message.
- **Negative Inputs for Square Root or Factorial**: Displays an error message for invalid inputs.

## Example Run

```
=== Calculatrice Simple ===
1. Addition (+)
2. Soustraction (-)
3. Multiplication (*)
4. Division (/)
5. Puissance (^)
6. Racine carrée (√)
7. Factorielle (!)
8. Quitter
Choisissez une option : 1
Entrez le premier nombre : 10
Entrez le deuxième nombre : 5
Résultat : 15
```

## Principles Followed

- **Object-Oriented Design**:
  - Each operation is implemented as a method in the `Calculator` class.
- **SOLID Principles**:
  - Single Responsibility: Input validation and mathematical operations are separated.
  - Open/Closed: Easily extendable with more operations.
  
## Contributing

Feel free to fork this repository and contribute by adding new features or improving the code. Submit a pull request with your changes!

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Replace `(https://github.com/kinanix7/node-calculator)` with the actual URL of your GitHub repository.
