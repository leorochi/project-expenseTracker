import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {

const { addTransaction } = useContext(GlobalContext);

const [text, setText] = useState('');
const [amount, setAmount] = useState(0);

const inputText = (e) => {
    setText(e.target.value);
}

const inputAmount = (e) => {
    setAmount(e.target.value);
}

const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
    }

    addTransaction(newTransaction);

}


  return (
    <div>
         <h3>Add new transaction</h3>
         <form onSubmit={onSubmit}>
         <div className="form-control">
          <label htmlFor="text">Text</label>
          <input value={text} onChange={inputText} type="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount
            (negative - expense, positive - income)</label>
          <input value={amount} onChange={inputAmount} type="number" placeholder="Enter amount..." />
          <button className="btn">Add transaction</button>
        </div>
      </form>
    </div>
  )
}

export default AddTransaction