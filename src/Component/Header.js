import React from "react";

const Header = (props)=> {  
    return (
        <header>
            <h1 className="expense-tracker-title">Expense Tracker</h1>
            <div className="balance-container">
                <h4 className="balance-title">YOUR BALANCE</h4>
                <h2 className="balance-amount">${props.balance}</h2>
            </div>
            <div className="income-expense-container">
                <div className="income">
                    <h4 className="income-title">INCOME</h4>
                    <h4 className="income-amount">${props.income}</h4>
                </div>
                <div className="expense">
                    <h4 className="expense-title">EXPENSE</h4>
                    <h4 className="expense-amount">${props.expense}</h4>
                </div>
            </div>
            <div>
                <h4 className="history-title">History</h4>
            </div>
            
        </header>
    )
}

export default Header