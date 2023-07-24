function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function generateFibonacciSeries(n) {
  const series = [];

  for (let i = 0; i < n; i++) {
    series.push(fibonacci(i));
  }

  return series;
}

const fibonacciSeries = generateFibonacciSeries(10);
console.log(fibonacciSeries);
