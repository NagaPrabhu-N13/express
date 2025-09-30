const express = require('express');
const app = express();
const port = 3000;


const factorial = (n) => {
  if (n < 0) {
    return "Not defined";
  }

  if (n === 0) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};


app.get('/factorial/:n', (req, res) => {
  const num = parseInt(req.params.n, 10);


  if (isNaN(num)) {
    return res.status(400).json({ error: "Input must be a valid number." });
  }

  const result = factorial(num);
  
  res.json({ number: num, factorial: result });
});


app.listen(port, () => {
  console.log(`Factorial API server listening at http://localhost:${port}`);
});

