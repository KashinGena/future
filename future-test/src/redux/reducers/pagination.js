const initialState = {
    itemsPerPage:25,
    currentPage:1,
    pageCount:0,
}

export const paginationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ('CHANGE_ITEMS_PER_PAGE'): 
            return {
                ...state,
                itemsPerPage:action.payload
            }
        case ('CHANGE_PAGE'): 
            return {
                ...state,
                currentPage: state.currentPage+action.payload
            }
        
        default:
            return state
            
    }
}