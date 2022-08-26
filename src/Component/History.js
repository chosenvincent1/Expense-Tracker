import React from "react";

const History = (props)=> {
    let amount
    if (props.amount < 0) {
        amount = `${'-'}${'$'}${Math.abs(props.amount)}`
    } else {
        amount = `${'$'}${Math.abs(props.amount)}`
    }
    return (
        <div className="history-container">
            <div className="history-item" style={{borderRight: props.amount < 0 ? "3px solid red" : "3px solid green"}}>
                <p>{props.item}</p>
                <p>{amount}</p>
            </div>
        </div>
    )
}

export default History
