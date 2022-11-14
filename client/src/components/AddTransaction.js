import React, { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)
    const {addTransaction} = useContext(GlobalContext)
    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
          id: Math.floor(Math.random() * 100000000),
          text,
          amount: +amount,
        }
        addTransaction(newTransaction)
    }
  return (
    <>
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Name</label>
          <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text" />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount (use “-” for expense)<span className='star'>*</span></label>
          <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)}  placeholder="Enter amount" />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
    )
}
