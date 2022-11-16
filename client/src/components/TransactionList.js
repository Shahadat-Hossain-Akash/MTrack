import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import {Transaction} from './Transaction'

export const TransactionList = () => {

  const {transactions, getTransactions} = useContext(GlobalContext)

  useEffect(() => {
    getTransactions();
  }, [])

  return (
    <>
      <h3>History <span>({transactions.length}{transactions.length > 1 ? " items" : " item"})</span></h3>
      <ul className="lists" id="style-3">
        {transactions.length === 0 ? <span className='item'>Looks Empty!!!</span> : transactions.map(transaction => (
          <Transaction key={transaction._id} transaction={transaction} />
        )) } 
      </ul>
    </>
  )
}
