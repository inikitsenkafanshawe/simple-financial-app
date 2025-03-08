import React, { createContext, useState, useContext } from "react";
import uuid from "react-uuid";

const TransactionContext = createContext();

const initialTransactions = [
  {
    id: uuid(),
    date: "2024-03-01",
    amount: 50,
    description: "Groceries",
    location: "Walmart",
    type: "Debit",
    category: "Shopping",
  },
  {
    id: uuid(),
    date: "2024-03-02",
    amount: 200,
    description: "Tickets",
    location: "Ticketmaster",
    type: "Credit",
    category: "Travel",
  },
];

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(initialTransactions);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, { id: Date.now(), ...transaction }]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionContext);
