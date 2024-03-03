function postfixCalculator(instructions) {
    const stack = [];
  
    const operators = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => (b === 0 ? undefined : a / b),
    };
  
    for (const instruction of instructions) {
      if (typeof instruction === 'number') {
        stack.push(instruction);
      } else if (typeof instruction === 'string' && operators.hasOwnProperty(instruction)) {
        if (stack.length < 2) {
          console.log('Error: not enough operands!');
          return;
        }
  
        const operand2 = stack.pop();
        const operand1 = stack.pop();
  
        const result = operators[instruction](operand1, operand2);
        if (result === undefined) {
          console.log('Error: division by zero!');
          return;
        }
  
        stack.push(result);
      } else {
        console.log('Error: invalid instruction!');
        return;
      }
    }
  
    if (stack.length === 1) {
      console.log(stack[0]);
    } else {
      console.log('Error: too many operands!');
    }
  }
  postfixCalculator([5,
    3,
    4,
    '*',
    '-']
   )