const initialState = {
    sortType:null,
    sortField:null
}

export const sortReducer = ( state = initialState, action) => {
    switch (action.type) {
        case('SET_SORT'): 
            return {
                ...state,
                sortType:action.payload.sortType,
                sortField:action.payload.sortField,
            }
        default:
            return state
    }
}

