const initialState = {
    rows:[],
    filteredRows:[],
    isLoading:false,
    isError: false
}


export const tableReducer = (state= initialState, action) => {
    switch (action.type) {
        case ('FETCH_TABLE'): {
            return {
                ...state,
                isLoading:true
            }
        }
        case ('FETCH_TABLE_SUCCESS'): 
            return {
                ...state,
                rows:action.payload,
                filteredRows:action.payload,
                isLoading:false
            }
        case ('FETCH_TABLE_ERROR'):
            return {
                ...state,
                isError:true
            }
        
        default:
            return state;
    }
}