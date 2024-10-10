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

return "Query not recognized.";
}
