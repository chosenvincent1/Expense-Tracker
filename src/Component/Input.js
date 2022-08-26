import React from "react";

const Input = (props)=> {
    return (
        <section className="new-transaction-section">
            <h4 className="new-transaction-title">Add New Transaction</h4>
            <form onSubmit={props.onsubmit}>
                <label htmlFor="item-name">
                    <p>Text</p>
                    <input
                        type="text"
                        name={props.itemName}
                        className="item-name"
                        placeholder="Enter text..."
                        value={props.itemValue}
                        onChange={props.onChange}
                        required
                    />
                </label>
                
                <label htmlFor="item-amount">
                    <p>Amount</p>
                    <p>(negative-expense, positive-income)</p>
                    <input 
                        type="number"
                        name={props.amountName}
                        className="item-amount"
                        placeholder="0"
                        value={props.amountValue}
                        onChange={props.onChange}
                        required
                    />
                </label> <br />
                <button className="transaction-btn">Add Transaction</button>
            </form>
        </section>
    )
}

export default Input