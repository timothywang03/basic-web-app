export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrewid")) {
    return ("Andrew ID: twang3");
  }

  const minusMatch = query.match(/what is (\d+) minus (\d+)/i);
  if (minusMatch) {
    const num1 = parseInt(minusMatch[1], 10);
    const num2 = parseInt(minusMatch[2], 10);
    return `The answer is ${num1 - num2}`;
  }
const addMatch = query.match(/what is (\d+) plus (\d+)/i);
if (addMatch) {
  const num1 = parseInt(addMatch[1], 10);
  const num2 = parseInt(addMatch[2], 10);
  return `The answer is ${num1 + num2}`;
}

const multiplyMatch = query.match(/what is (\d+) multiplied by (\d+)/i);
if (multiplyMatch) {
  const num1 = parseInt(multiplyMatch[1], 10);
  const num2 = parseInt(multiplyMatch[2], 10);
  return `The answer is ${num1 * num2}`;
}
const squareCubeMatch = query.match(/which of the following numbers is both a square and a cube: ([\d, ]+)/i);
if (squareCubeMatch) {
  const numbers = squareCubeMatch[1].split(',').map(num => parseInt(num.trim(), 10));
  const result = numbers.find(num => {
    const sqrt = Math.sqrt(num);
    const cbrt = Math.cbrt(num);
    return Number.isInteger(sqrt) && Number.isInteger(cbrt);
  });
  return result !== undefined ? `The number ${result} is both a square and a cube.` : "None of the numbers are both a square and a cube.";
}
const primeMatch = query.match(/which of the following numbers are primes: ([\d, ]+)/i);
if (primeMatch) {
  const numbers = primeMatch[1].split(',').map(num => parseInt(num.trim(), 10));
  const isPrime = (num: number) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  const primes = numbers.filter(isPrime);
  return primes.length > 0 ? `The prime numbers are: ${primes.join(', ')}.` : "None of the numbers are primes.";
}

return "Query not recognized.";
}
