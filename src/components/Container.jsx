import React, { useState, useEffect } from 'react';

function Container() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [incomeDescription, setIncomeDescription] = useState('');
  const [expenseDescription, setExpenseDescription] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const total = transactions.reduce((acc, cur) => acc + cur.amount, 0);
    setIncome(total >= 0 ? total : 0);
    setExpense(total < 0 ? -total : 0);
  }, [transactions]);

  const handleAddIncome = () => {
    if (incomeDescription && income !== 0) {
      setTransactions([
        ...transactions,
        {
          amount: income,
          description: incomeDescription,
          type: 'income',
        },
      ]);
      setIncome(0);
      setIncomeDescription('');
    }
  };

  const handleAddExpense = () => {
    if (expenseDescription && expense !== 0) {
      setTransactions([
        ...transactions,
        {
          amount: -expense,
          description: expenseDescription,
          type: 'expense',
        },
      ]);
      setExpense(0);
      setExpenseDescription('');
    }
  };

  return (
    <div>
      <div>
        <h2>Ingresos</h2>
        <input
          type="number"
          placeholder="Monto"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={incomeDescription}
          onChange={(e) => setIncomeDescription(e.target.value)}
        />
        <button onClick={handleAddIncome}>Agregar ingreso</button>
      </div>
      <div>
        <h2>Gastos</h2>
        <input
          type="number"
          placeholder="Monto"
          value={expense}
          onChange={(e) => setExpense(Number(e.target.value))}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={expenseDescription}
          onChange={(e) => setExpenseDescription(e.target.value)}
        />
        <button onClick={handleAddExpense}>Agregar gasto</button>
      </div>
      <div>
        <h2>Total: {income - expense}</h2>
      </div>
      <div>
        <h2>Historial</h2>
        {transactions.map((transaction, index) => (
          <div key={index}>
            <span>{transaction.type === 'income' ? '+' : '-'}</span>
            <span>{transaction.amount}</span>
            <span>{transaction.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Container;
