import React, { useState } from "react";

const Expense = () => {
  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const addTransaction = () => {
    if (text && amount) {
      const transaction = {
        text,
        amount: parseFloat(amount),
      };
      setTransactions([...transactions, transaction]);
      setText("");
      setAmount("");
    }
  };

  const calculateTotalIncome = () => {
    return transactions
      .filter((transaction) => transaction.amount > 0)
      .reduce((total, transaction) => total + transaction.amount, 0);
  };

  const calculateTotalExpense = () => {
    return (
      transactions
        .filter((transaction) => transaction.amount < 0)
        .reduce((total, transaction) => total + transaction.amount, 0) * -1
    );
  };

  const calculateBalance = () => {
    return calculateTotalIncome() - calculateTotalExpense();
  };

  return (
    <div style={{ textAlign: "center", maxWidth: "400px", margin: "auto" }}>
      <h1 style={{ color: "#333" }}>Expense Tracker</h1>
      <div style={{ marginBottom: "10px" }}>
        <strong>Total Income:</strong> {calculateTotalIncome().toFixed(2)} DH
      </div>
      <div style={{ marginBottom: "10px" }}>
        <strong>Total Expense:</strong> {calculateTotalExpense().toFixed(2)} DH
      </div>
      <div style={{ marginBottom: "10px" }}>
        <strong>Balance:</strong> {calculateBalance().toFixed(2)} DH
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTransaction();
        }}
        style={{ marginBottom: "20px" }}
      >
        <input
          type="text"
          placeholder="Transaction"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ padding: "5px", marginRight: "5px" }}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ padding: "5px", marginRight: "5px" }}
        />
        <button
          type="submit"
          style={{
            padding: "5px 10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          Add Transaction
        </button>
      </form>
      <div>
        <h2>Transaction List</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {transactions.map((transaction, index) => (
            <li
              key={index}
              style={{
                background: transaction.amount < 0 ? "#FFCCCC" : "#CCFFCC",
                marginBottom: "5px",
                padding: "5px",
                borderRadius: "3px",
              }}
            >
              {transaction.text}: {transaction.amount.toFixed(2)} DH
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Expense;
