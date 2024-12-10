const prompt = require('prompt-sync')();

class Calculator {

    add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Division par zéro n'est pas autorisée.");
    }
    return a / b;
  }

  power(a, b) {
    return Math.pow(a, b);
  }

  sqrt(a) {
    if (a < 0) {
      throw new Error("La racine carrée d'un nombre négatif n'est pas définie.");
    }
    return Math.sqrt(a);
  }

  factorial(n) {
    if (n < 0) {
      throw new Error("La factorielle d'un nombre négatif n'est pas définie.");
    }
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * this.factorial(n - 1);
  }

  validateNumber(input) {
    const num = parseFloat(input);
    if (isNaN(num)) {
      throw new Error("Veuillez entrer un nombre valide.");
    }
    return num;
  }
}

function main() {
  const calc = new Calculator();
  let running = true;

  while (running) {
    console.log("\n=== Calculatrice Simple ===");
    console.log("1. Addition (+)");
    console.log("2. Soustraction (-)");
    console.log("3. Multiplication (*)");
    console.log("4. Division (/)");
    console.log("5. Puissance (^)");
    console.log("6. Racine carrée (√)");
    console.log("7. Factorielle (!)");
    console.log("8. Quitter");

    const choice = prompt("Choisissez une option : ");

    try {
      switch (choice) {
        case '1': {
          const a = calc.validateNumber(prompt("Entrez le premier nombre : "));
          const b = calc.validateNumber(prompt("Entrez le deuxième nombre : "));
          console.log(`Résultat : ${calc.add(a, b)}`);
          break;
        }
        case '2': {
          const a = calc.validateNumber(prompt("Entrez le premier nombre : "));
          const b = calc.validateNumber(prompt("Entrez le deuxième nombre : "));
          console.log(`Résultat : ${calc.subtract(a, b)}`);
          break;
        }
        case '3': {
          const a = calc.validateNumber(prompt("Entrez le premier nombre : "));
          const b = calc.validateNumber(prompt("Entrez le deuxième nombre : "));
          console.log(`Résultat : ${calc.multiply(a, b)}`);
          break;
        }
        case '4': {
          const a = calc.validateNumber(prompt("Entrez le premier nombre : "));
          const b = calc.validateNumber(prompt("Entrez le deuxième nombre : "));
          console.log(`Résultat : ${calc.divide(a, b)}`);
          break;
        }
        case '5': {
          const a = calc.validateNumber(prompt("Entrez la base : "));
          const b = calc.validateNumber(prompt("Entrez l'exposant : "));
          console.log(`Résultat : ${calc.power(a, b)}`);
          break;
        }
        case '6': {
          const a = calc.validateNumber(prompt("Entrez le nombre : "));
          console.log(`Résultat : ${calc.sqrt(a)}`);
          break;
        }
        case '7': {
          const n = calc.validateNumber(prompt("Entrez un nombre entier : "));
          console.log(`Résultat : ${calc.factorial(Math.floor(n))}`);
          break;
        }
        case '8': {
          running = false;
          console.log("Merci d'avoir utilisé la calculatrice !");
          break;
        }
        default:
          console.log("Choix invalide. Veuillez réessayer.");
      }
    } catch (error) {
      console.error(`Erreur : ${error.message}`);
    }
  }
}

main();
