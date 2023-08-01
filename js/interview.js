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



  function countVowelsAndConsonants(str) {
    str = str.toLowerCase(); // Convert the string to lowercase for case-insensitivity
  
    // Helper function to check if a character is a vowel
    function isVowel(char) {
      return ['a', 'e', 'i', 'o', 'u'].includes(char);
    }
  
    // Base case: Empty string
    if (str === '') {
      return { vowels: 0, consonants: 0 };
    }
  
    const firstChar = str.charAt(0);
    if (firstChar.match(/[a-z]/i)) {
      if (isVowel(firstChar)) {
        const result = countVowelsAndConsonants(str.slice(1));
        return { vowels: result.vowels + 1, consonants: result.consonants };
      } else {
        const result = countVowelsAndConsonants(str.slice(1));
        return { vowels: result.vowels, consonants: result.consonants + 1 };
      }
    } else {
      // If the character is not a letter, skip it and continue with the rest of the string
      return countVowelsAndConsonants(str.slice(1));
    }
  }
  
  const inputString = "Hello World";
  const result = countVowelsAndConsonants(inputString);
  console.log(`String: ${inputString}`);
  console.log(`Vowel Count: ${result.vowels}`);
  console.log(`Consonant Count: ${result.consonants}`);
  
  