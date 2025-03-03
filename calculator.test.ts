import { StringCalculator } from "./calculator";

describe("StringCalculator", () => {
    let calculator: StringCalculator;
    
    beforeEach(() => {
        calculator = new StringCalculator();
    });

    test("should return 0 for an empty string", () => {
        expect(calculator.add("")).toBe(0);
      });

    test("should return the number itself for a single number", () => {
        expect(calculator.add("1")).toBe(1);
        expect(calculator.add("5")).toBe(5);
    });

    test("should return the sum of multiple numbers", () => {
        expect(calculator.add("1,2,3")).toBe(6);
        expect(calculator.add("10,20,30")).toBe(60);
    });

    test("should handle newline (`\\n`) as a delimiter", () => {
        expect(calculator.add("1\n2,3")).toBe(6);
        expect(calculator.add("4\n5\n6")).toBe(15);
    });

    test("should throw an error if a negative number is provided", () => {
        expect(() => calculator.add("-1")).toThrow("Negative numbers not allowed: -1");
    });
    
} )