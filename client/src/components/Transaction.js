import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({transaction}) => {
  const sign = transaction.amount < 0 ? '-':'+'
  const signClass = transaction.amount < 0 ? 'minus':'plus'
  const {deleteTransaction} = useContext(GlobalContext)
  return (
    <div><li className={signClass}>
    {transaction.text} <span>{sign}{Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction._id)} className="delete">X</button>
  </li></div>
  )
}
