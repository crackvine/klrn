const list = [
  {
    name: 'Display',
    group: 'Technical detals',
    id: '60',
    value: '4',
  },
  {
    name: 'Manufacturer',
    group: 'Manufacturer',
    id: '58',
    value: 'Apple',
  },
  {
    name: 'OS',
    group: 'Technical detals',
    id: '37',
    value: 'Apple iOS',
  },
];

const grouped = list.reduce((groups, item) => ({
  ...groups,
  [item.group]: [...(groups[item.group] || []), item],
}), {});

console.log(grouped);
