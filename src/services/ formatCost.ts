const formatCost = (cost: number) => {
  const parts = cost.toFixed(2).split(".");
  const integerPart = parts[0];
  const decimalPart = parts[1];

  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    "."
  );

  return `${formattedIntegerPart},${decimalPart}`;
};

export default formatCost;
