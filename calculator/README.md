# Calculator

## Description

This project is a **Simple Calculator** built using HTML, CSS, and JavaScript. The calculator allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It also supports toggling negative numbers, clearing the display, and using parentheses for more complex calculations.

## How It Works

The calculator consists of:

1. **HTML**: Provides the layout for the calculator buttons and display screen.
2. **CSS**: Styles the calculator for a clean and user-friendly interface.
3. **JavaScript**: Implements the logic for handling user input, evaluating expressions, and updating the display.

### JavaScript Functionality

- **Display Input**: 
  - The `toDisplay` function appends the user's input to the display. It also handles toggling between positive and negative numbers when the "+/-" button is pressed.
  
- **Clear Display**: 
  - The `clearDisplay` function clears all content from the calculator display, resetting it for a new calculation.
  
- **Calculation**: 
  - The `calculate` function evaluates the mathematical expression entered in the display using JavaScript's `eval()` method. If the expression is invalid, it catches the error and displays "Error" on the screen.

- **Parentheses Toggle**: 
  - The `toggleParentheses` function dynamically toggles between opening and closing parentheses for more complex calculations, depending on whether an opening parenthesis already exists in the current expression.

## Example

**Operations:**
- **Addition**: `5 + 3 = 8`
- **Subtraction**: `10 - 4 = 6`
- **Multiplication**: `6 * 2 = 12`
- **Division**: `9 / 3 = 3`

**Additional Features:**
- **Toggle Positive/Negative**: Pressing the "+/-" button flips the sign of the current number.
- **Parentheses**: Add parentheses to perform more complex calculations, e.g., `(2 + 3) * 4`.

This **Simple Calculator** is an easy-to-use tool for performing arithmetic calculations and provides an intuitive interface with basic functionality like parentheses, clearing the display, and error handling.