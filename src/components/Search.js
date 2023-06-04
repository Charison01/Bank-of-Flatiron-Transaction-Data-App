import React from "react";

function Search({transactions, setTransactions}) {

  //function to handle search
  const handleSearch = (event) => {
    const searchItem = event.target.value.toLowerCase();
    const filteredTransactions = transactions.filter((transaction) => 
      transaction.description.toLowerCase().includes(searchItem));
    setTransactions(filteredTransactions);
  }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
