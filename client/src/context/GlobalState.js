import React, {useReducer, createContext} from "react";
import AppReducer from './AppReducer'

const initialState = {
    transactions: [
        /*{
            id: 1,
            text: "book",
            amount: -10
        }, {
            id: 2,
            text: "bill",
            amount: -100
        }, {
            id: 3,
            text: "salary",
            amount: 300
        }, {
            id: 4,
            text: "salary",
            amount: 300
        }, {
            id: 5,
            text: "book",
            amount: -10
        }, {
            id: 6,
            text: "bill",
            amount: -100
        }, {
            id: 7,
            text: "salary",
            amount: 300
        }, {
            id: 8,
            text: "salary",
            amount: 300
        }*/
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    const deleteTransaction = (id) => {
        dispatch({type: "DELETE_TRANSACTION", payload: id})
    }

    const addTransaction = (transaction) => {
        dispatch({type: "ADD_TRANSACTION", payload: transaction})
    }

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                deleteTransaction,
                addTransaction
            }}>
            {children}
        </GlobalContext.Provider>
    );

}