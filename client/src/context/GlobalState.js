import React, {useReducer, createContext} from "react";
import AppReducer from './AppReducer'
import axios from 'axios'

const initialState = {
    transactions: [],
    error: null,
    loading:true,
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    const getTransactions = async () => {
        try {
            const res = await axios.get('/api/v1/transactions')
            dispatch({
                type: "GET_TRANSACTION",
                payload: res.data.data
            })
            
        } catch (err) {
            dispatch({
                type: "ERROR",
                payload: err.response.data.error
            })
        }
    }

    const deleteTransaction = async (id) => {
        try {
            await axios.delete(`/api/v1/transactions/${id}`)
            dispatch({type: "DELETE_TRANSACTION", payload: id})
        } catch (err) {
            dispatch({
                type: "ERROR",
                payload: err.response.data.error
            })
        }
    }

    const addTransaction = async (transaction) => {

        /*const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }*/

        try {
            const res = await axios.post('/api/v1/transactions', transaction)
            dispatch({type: "ADD_TRANSACTION", payload: res.data.data})
            
        } catch (err) {
            dispatch({
                type: "ERROR",
                payload: err.response.data.error
            })
        }

    }

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                getTransactions,
                error:state.error,
                loading:state.loading,
                deleteTransaction,
                addTransaction,
            }}>
            {children}
        </GlobalContext.Provider>
    );

}