const timestampsWithinMargin = (timestamp1, timestamp2, margin = 60) => ( // margin in seconds
  Math.abs(Date.parse(timestamp1) - Date.parse(timestamp2)) < (margin * 1000)
);

const isDuplicateTx = (transaction1, transaction2) => (
  transaction1.sourceAccount === transaction2.sourceAccount
  && transaction1.targetAccount === transaction2.targetAccount
  && transaction1.amount === transaction2.amount
  && transaction1.category === transaction2.category
  && timestampsWithinMargin(transaction1.time, transaction2.time)
);

const compareByTimestamp = (transaction1, transaction2) => (
  Date.parse(transaction1.time) - Date.parse(transaction2.time)
);

const groupByDuplicateTransactions = (unsortedTransactions) => {
  // Sort the transactions so we are always comparing with the closest previous values
  const transactions = [...unsortedTransactions].sort(compareByTimestamp);

  // Combine into groups of duplicate transactions
  const finalGroups = transactions.reduce((groups, transaction) => {
    let txAddedToExistingGroup = false; // to track whether we found an existing group

    const updatedGroups = groups.reduce((acc2, cur2) => {
      if (cur2.some((grpTx) => isDuplicateTx(grpTx, transaction))) {
        txAddedToExistingGroup = true;
        return [...acc2, [...cur2, transaction]]; // add to existing group
      }
      return [...acc2, [...cur2]];
    }, []);

    // Or if no such group exists, start a new group for later transactions to check against
    return txAddedToExistingGroup ? updatedGroups : [...updatedGroups, [transaction]];
  }, []);

  // Remove groups of size 1 (i.e. groups with no duplicate transactions)
  return finalGroups.filter((grp) => grp.length > 1);
};

module.exports = groupByDuplicateTransactions;
