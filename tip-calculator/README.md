# Tip Calculator

## Description

This project is a simple Tip Calculator built using HTML, CSS, and JavaScript. The calculator takes in the total bill amount, the desired tip percentage, and the number of people sharing the bill, and it computes how much each person should pay, including the tip.

## How It Works

The application consists of:

1. **HTML**: Provides the structure for input fields where the user can enter the bill amount, choose the tip percentage, and specify the number of people splitting the bill.
2. **CSS**: Styles the webpage for a user-friendly interface.
3. **JavaScript**: Handles the calculation logic and dynamically updates the result on the page.

### JavaScript Functionality

The core logic is implemented in the `calculate` function:

- **Input Fields**: 
  - The user enters the **bill amount**.
  - The user selects a **tip percentage** (e.g., 10%, 15%, 20%).
  - The user specifies the **number of people** sharing the bill.
  
- **Tip Calculation**: 
  - The selected tip percentage is applied to the bill amount to compute the total bill including the tip.
  
- **Per-Person Calculation**:
  - The total bill (with tip) is divided by the number of people to determine how much each person should pay.
  
- The result is then displayed on the webpage.

## Example

**Input:**
- Bill Amount: ₹1000
- Tip: 15%
- Number of People: 4

**Output:**
```
Each person should pay ₹287.50
```

This Tip Calculator helps users quickly and easily calculate how much each person owes when splitting a bill, including the tip.