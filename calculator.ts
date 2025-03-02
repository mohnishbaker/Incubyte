class StringCalculator {
    add(numbers: string): number {
      if (!numbers) return 0;
      
      const delimiter = /,|\n/;
      const numArray = numbers.split(delimiter).map(Number);
      
      if (numArray.some(n => n < 0)) {
        throw new Error(`Negative numbers not allowed: ${numArray.filter(n => n < 0).join(', ')}`);
      }
      
      return numArray.reduce((sum, num) => sum + num, 0);
    }
  } 

const stringCalculator = new StringCalculator();

console.log(stringCalculator.add("")); 
console.log(stringCalculator.add("1")); 
console.log(stringCalculator.add("1,5")); 
console.log(stringCalculator.add("4,5,6")); 
console.log(stringCalculator.add("1\n2,3")); 

module.exports = { StringCalculator };
