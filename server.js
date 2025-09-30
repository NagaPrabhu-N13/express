const express = require('express');
const app = express();
const port = 3000;

// Function to calculate factorial
const factorial = (n) => {
  // Factorial is not defined for negative numbers
  if (n < 0) {
    return "Not defined";
  }
  // Factorial of 0 is 1
  if (n === 0) {
    return 1;
  }
  // Calculate factorial iteratively
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// API endpoint: GET /factorial/:number
app.get('/factorial/:n', (req, res) => {
  const num = parseInt(req.params.n, 10);

  // Check if the parsed number is a valid integer
  if (isNaN(num)) {
    return res.status(400).json({ error: "Input must be a valid number." });
  }

  const result = factorial(num);
  
  res.json({ number: num, factorial: result });
});

// Start the server
app.listen(port, () => {
  console.log(`Factorial API server listening at http://localhost:${port}`);
});
