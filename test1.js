const isDuplicateTx = (transaction1, transaction2) => (
  transaction1.sourceAccount === transaction2.sourceAccount
  && transaction1.targetAccount === transaction2.targetAccount
  && transaction1.amount === transaction2.amount
  && transaction1.category === transaction2.category
);

const acc = [
  [
    {
      id: 7,
      sourceAccount: 'G',
      targetAccount: 'F',
      amount: 100,
      category: 'hfisdfiusi',
    },
  ],
  [
    {
      id: 3,
      sourceAccount: 'A',
      targetAccount: 'B',
      amount: 100,
      category: 'eating_out',
    },
  ],
  [
    {
      id: 4,
      sourceAccount: 'B',
      targetAccount: 'C',
      amount: 100,
      category: 'dlsslssss',
    },
  ],
];

const cur = {
  id: 1,
  sourceAccount: 'A',
  targetAccount: 'B',
  amount: 100,
  category: 'eating_out',
};

let matched = false;
const final = acc.reduce((acc2, cur2) => {
  if (cur2.some((x) => isDuplicateTx(x, cur))) {
    matched = true;
    return [...acc2, [...cur2, cur]];
  }
  return [...acc2, [...cur2]];
}, []);

if (matched) {
  console.log(final);
} else {
  console.log([...final, [cur]]);
}

// let matched2 = false;
// acc.forEach((grp) => {
//   if (grp.find((x) => isDuplicateTx(x, cur))) {
//     grp.push(cur);
//     matched2 = true;
//   }
// });
// if (matched2) {
//   console.log(acc);
// } else {
//   console.log([...acc, [cur]]);
// }
