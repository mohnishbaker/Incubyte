export class StringCalculator {
    add(numbers: string): number {
      if (!numbers) return 0;
      
      let delimiter = /,|\n/;
      
      if(numbers.startsWith('//')) {

        const parts = numbers.split("\n", 2);
        delimiter = new RegExp(parts[0].substring(2).replace(/\W/g, "\\$&"));
        numbers = parts[1];

      }
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

