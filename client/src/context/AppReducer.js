// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) =>{
    switch(action.type) {
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
                
            }
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [action.payload,...state.transactions]
                    
            }
        case "GET_TRANSACTION":
            return {
                ...state,
                loading:false,
                transactions: action.payload
                    
            }
            case "ERROR":
                return {
                    ...state,
                    error:true,
                    transactions: action.payload
                        
                }
        default:
            return state;
    }
}