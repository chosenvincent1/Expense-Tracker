import React from "react";
import Header from "./Component/Header";
import History from "./Component/History";
import Input from "./Component/Input";
import "./App.css"

const App = ()=> {
  const [object, setObject] = React.useState({item: "", amount: ""})
 
  const handleChange = (event)=> {
      setObject(prevObject => {
        return {
          ...prevObject,
          [event.target.name]: event.target.value
        }
      })
  }

  const [state, setState] = React.useState([])

  const [income, setIncome] = React.useState(0)
  const [expense, setExpense] = React.useState(0)
  const [balance, setBalance] = React.useState(0)
  
  function handleSubmit(e) {
    e.preventDefault();
    setState(prevState => {
      return [...prevState, object] // or prevState.concat(object)
    })

    setIncome(prevIncome => {
      return object.amount < 0 ? prevIncome : prevIncome + parseFloat(object.amount)
    })

    setExpense(prevExpense => {
      return object.amount < 0 ? prevExpense + Math.abs(parseFloat(object.amount)) : prevExpense
    })

    setBalance(prevBalance => {
      return prevBalance + parseFloat(object.amount)
    })

    setObject({item: "", amount: ""}) //reset item and amount input to empty
  }

  const data = state.map((item, index) =>{
    return (
      <History key={index} {...item} />
    )
  })

  
  return (
    <div className="app">
      <Header 
        income={income} 
        expense={expense} 
        balance={balance} 
      />

      {data}

      <Input 
        onChange={handleChange} 
        itemValue={object.item} 
        amountValue={object.amount}
        itemName="item"
        amountName="amount"
        onsubmit={handleSubmit}
      />
    </div>
  )
}

export default App