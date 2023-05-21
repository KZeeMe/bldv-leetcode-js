function romanToInteger(str) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < str.length; i++) {
    const currentValue = values[str[i]];

    const nextValue = values[str[i + 1]];
    if (currentValue < nextValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
    //i++;
  }
  return total;
}

console.log(romanToInteger("III"));
console.log(romanToInteger("LVIII"));
console.log(romanToInteger("MCMXCIV"));
