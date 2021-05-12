const assert = require('assert');

const maskCC = (str) => {
  if (str.length < 6) { return str; }
  const arr = str.split('');
  const first = arr.splice(0, 1);
  const last4 = arr.splice(-4, 4).join('');
  const masked = arr.map((x) => (Number.isNaN(x) ? x : '*')).join('');
  return first + masked + last4;
};

assert.strictEqual(maskCC('3457377345'), '3*****7345');
assert.strictEqual(maskCC('0000377345'), '0*****7345');
assert.strictEqual(maskCC('34573773'), '3***3773');
assert.strictEqual(maskCC('000000'), '0*0000');
assert.strictEqual(maskCC('34H73773'), '3*H*3773');
assert.strictEqual(maskCC('34573'), '34573');
