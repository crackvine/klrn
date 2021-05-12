const assert = require('assert');

const toOrdinal = number => {
  const int = parseInt(number);
  const r10 = int % 10;
  const r100 = int % 100;
  const suffixes = ['th', 'st', 'nd', 'rd']; 
  return r100 > 10 ? int + 'th' : int + (suffixes[r10] ?? 'th');
};

assert.strictEqual(toOrdinal(1), '1st');
assert.strictEqual(toOrdinal(11), '11th');
assert.strictEqual(toOrdinal(111), '111th');
assert.strictEqual(toOrdinal(2), '2nd');
assert.strictEqual(toOrdinal(12), '12th');
assert.strictEqual(toOrdinal(112), '112th');
assert.strictEqual(toOrdinal(3), '3rd');
assert.strictEqual(toOrdinal(13), '13th');
assert.strictEqual(toOrdinal(113), '113th');
assert.strictEqual(toOrdinal(4), '4th');
assert.strictEqual(toOrdinal(14), '14th');
assert.strictEqual(toOrdinal(114), '114th');
assert.strictEqual(toOrdinal(20), '20th');
assert.strictEqual(toOrdinal(100), '100th');
assert.strictEqual(toOrdinal(101), '101st');
assert.strictEqual(toOrdinal(102), '102nd');
assert.strictEqual(toOrdinal(103), '103rd');
assert.strictEqual(toOrdinal(1001), '1001st');
assert.strictEqual(toOrdinal(1002), '1002nd');
assert.strictEqual(toOrdinal(1003), '1003rd');
assert.strictEqual(toOrdinal(110), '110th');
assert.strictEqual(toOrdinal(202), '202nd');
assert.strictEqual(toOrdinal(1005), '1005th');
assert.strictEqual(toOrdinal(1020), '1020th');
assert.strictEqual(toOrdinal(1100), '1100th');
