const getTotalExpenses = expenses => {
  return expenses.reduce((total, current) => total + current.amount, 0);
};

export default getTotalExpenses;
