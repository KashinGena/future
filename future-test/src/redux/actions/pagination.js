export const changePage = (index) => {
    return {
        type:'CHANGE_PAGE',
        payload: index
    }
}

export const changeItemsPerPage = (itemsPerPage) => {
    return {
        type:'CHANGE_ITEMS_PER_PAGE',
        payload: itemsPerPage
    }
}