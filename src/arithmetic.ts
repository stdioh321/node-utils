export const sum = (a: number, b: number): number => {
    return a + b;
  };
  
  export const sub = (a: number, b: number): number => {
    return a - b;
  };
  
  export const mult = (a: number, b: number): number => {
    return a * b;
  };
  
  export const div = (a: number, b: number): number => {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  };
  