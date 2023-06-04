import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const dataURL = "http://localhost:8001/transactions";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);

  //fetching transactions
  useEffect(() => {
    fetchTransactions();
  }, []);

  //function to fetch transactions
  const fetchTransactions = async () => {
    try {
      const response = await fetch(dataURL);
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error("Failed to fetch transactions", error);
    }
  };

  //Adding transactions entries
  const addTransaction = async (transaction) => {
    try {
      const response = await fetch(dataURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transaction),
      });
      const data = await response.json();
      setTransactions([...transactions, data]);
    } catch (error) {
      console.error("Failed to add transaction", error);
    }
  };

  //Delete a transaction
  const deleteTransaction = async (id) => {
    try {
      await fetch(`${dataURL}/${id}`, {
        method: "DELETE",
      });
      setTransactions(
        transactions.filter((transaction) => transaction.id !== id)
      );
    } catch (error) {
      console.error("Failed to delete transaction", error);
    }
  };

  //Sort transactions by category
  const sortTransactionsByCategory = () => { 
    const sortedTransactions = [...transactions].sort((a, b) =>
    a.category.localeCompare(b.category));
    setTransactions(sortedTransactions);
  }

  //Sort transactions by date
  const sortTransactionsByDate = () => { 
    const sortedTransactions = [...transactions].sort((a, b) =>
    a.date.localeCompare(b.date));
    setTransactions(sortedTransactions);
  }
  //sort transactions by description
  const sortTransactionsByDescription = () => { 
    const sortedTransactions = [...transactions].sort((a, b) =>
    a.description.localeCompare(b.description));
    setTransactions(sortedTransactions);
  }


  return (
    <div>
      <Search transactions={transactions} setTransactions={setTransactions} />
      <AddTransactionForm addTransaction={addTransaction} />
      <TransactionsList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
        sortTransactionsByCategory={sortTransactionsByCategory}
        sortTransactionsByDate={sortTransactionsByDate}
        sortTransactionsByDescription={sortTransactionsByDescription}
      />
    </div>
  );
}

export default AccountContainer;
