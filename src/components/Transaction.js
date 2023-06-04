import React from "react";

function Transaction({ transaction, deleteTransaction }) {
  // console.log(transaction);
  const { date, description, category, amount } = transaction;

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button onClick={() => deleteTransaction(transaction.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Transaction;
