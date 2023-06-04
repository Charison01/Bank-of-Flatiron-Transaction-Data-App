import React, { useState } from "react";

function AddTransactionForm({ addTransaction }) {
  const [transaction, setTransaction] = useState({
    date: "",
    description: "",
    category: "",
    amount: 0,
  });

  //handle adding a transaction
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTransaction({
      ...transaction,
      [name]: value,
    });
  };

  //handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    //Check if all fields are filled
    if (
      transaction.date === "" ||
      transaction.description === "" ||
      transaction.category === "" ||
      transaction.amount === 0
    ) {
      alert("All fields are required");
      return;
    }

    addTransaction(transaction);
    setTransaction({
      date: "",
      description: "",
      category: "",
      amount: 0,
    });
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            type="date"
            name="date"
            value={transaction.date}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={transaction.description}
            placeholder="Description"
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            value={transaction.category}
            placeholder="Category"
            onChange={handleChange}
          />
          <input
            type="number"
            name="amount"
            value={transaction.amount}
            placeholder="Amount"
            step="0.01"
            onChange={handleChange}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
