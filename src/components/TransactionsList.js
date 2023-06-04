import React from "react";
import Transaction from "./Transaction";

function TransactionsList({
  transactions,
  deleteTransaction,
  sortTransactionsByCategory,
  sortTransactionsByDate,
  sortTransactionsByDescription,

}) {
  return (
    <div>
      <div>
        <button className="ui button" onClick={sortTransactionsByDate}>Sort By Date</button>
        <button className="ui button" onClick={sortTransactionsByCategory}>Sort By Category</button>
        <button className="ui button" onClick={sortTransactionsByDescription}>Sort By Description</button>
      </div>
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">Date</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Description</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Category</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Amount</h3>
            </th>
          </tr>
          {/* render a list of <Transaction> components here */}
          {transactions.map((transaction) => (
            <Transaction
              key={transaction.id}
              transaction={transaction}
              deleteTransaction={deleteTransaction}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsList;
