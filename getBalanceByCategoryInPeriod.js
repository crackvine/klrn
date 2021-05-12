const floatingPointSum = (a, b) => (parseFloat(a) + parseFloat(b)).toFixed(2);

const dateInRange = (dateToCheck, start, end) => (
  Date.parse(start) <= Date.parse(dateToCheck) && Date.parse(dateToCheck) < Date.parse(end)
);

const getBalanceByCategoryInPeriod = (transactions = [], category, start, end) => (
  transactions.filter((trx) => (
    category.toLowerCase() === trx.category.toLowerCase() && dateInRange(trx.time, start, end)
  )).reduce((total, currentTrx) => floatingPointSum(total, currentTrx.amount), 0)
);

module.exports = { getBalanceByCategoryInPeriod };
