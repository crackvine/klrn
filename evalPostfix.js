const assert = require('assert');

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

const evalPostfix = (expr) => {
  const items = expr.split(' ');
  const stack = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (!isNaN(item)) { // item is a number
      stack.push(item);
    } else { // assume it must be an operator. pop and op on last 2 items
      const x = parseFloat(stack.pop());
      const y = parseFloat(stack.pop());
      stack.push(operations[item](y, x));
    }
  };
  return stack[0];
};

assert.strictEqual(evalPostfix('3 4 +'), 7);
assert.strictEqual(evalPostfix('3 4 - 5 +'), 4);
assert.strictEqual(evalPostfix('3 4 5 * -'), -17);
assert.strictEqual(evalPostfix('3 4 - 5 *'), -5);
assert.strictEqual(evalPostfix('5 3 4 - *'), -5);
assert.strictEqual(evalPostfix('3 4 + 5 *'), 35);
assert.strictEqual(evalPostfix('3 4 + 2 * 1 +'), 15);
assert.strictEqual(evalPostfix('5 1 2 + 4 * + 3 -'), 14)
assert.strictEqual(evalPostfix('5 1 2 + 4 * + 3 -'), 14)
