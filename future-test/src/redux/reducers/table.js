const initialState = {
    rows:[],
    filteredRows:[],
    isLoading:false,
    isError: false,
    
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
        case ("SEARCH_DATA"):
            const search = action.payload
            const filteredRows = [...state.rows].filter(item => {
                return item.id.toString().includes(search) ||
                item.firstName.includes(search) ||
                item.lastName.includes(search) ||
                item.phone.includes(search) ||
                item.email.includes(search)

            })
            return {
                ...state,
                filteredRows
                }
        default:
            return state;
    }
}