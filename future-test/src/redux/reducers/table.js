import sort from '../../helpers/sort'

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
        case('SORT_TABLE'): {
            const sortTable= sort([...state.filteredRows],action.payload.sortType, action.payload.sortField)
            console.log(sortTable);
            return {
                ...state, 
                filteredRows:sortTable
            }
            
        }
        default:
            return state;
    }
}