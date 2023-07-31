function findGCD(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    console.log(a);
    return a;
  }
  
  function findLCM(a, b) {
    const gcd = findGCD(a, b);
    return (a * b) / gcd;
  }
  
  const num1 = 98;
  const num2 = 56;
  const gcd = findGCD(num1, num2);
  const lcm = findLCM(num1, num2);
  console.log(`The GCD of ${num1} and ${num2} is: ${gcd}`);
  console.log(`The LCM of ${num1} and ${num2} is: ${lcm}`);
  