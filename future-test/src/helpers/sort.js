const sort = (arr,sortType,sortField) => {
    if (sortField==='phone') 
        return arr.sort((a,b) => SortPhone(a[sortField],b[sortField],sortType))
    if (sortField==='id') 
        return arr.sort((a,b) => sortNumeric(a[sortField],b[sortField],sortType))
    if (sortField==='firstName' || sortField==='lastName' || sortField==='email')
        return arr.sort((a,b) => sortAlphabet(a[sortField],b[sortField],sortType))
    return arr
}

const sortAlphabet = (a,b, type) => {
    if (type==='asc') {
        if(a.toLowerCase() < b.toLowerCase()) { return -1; }
        if(a.toLowerCase() > b.toLowerCase()) { return 1; }
        return 0;
    } else {
        if(a.toLowerCase() > b.toLowerCase()) { return -1; }
        if(a.toLowerCase() < b.toLowerCase()) { return 1; }
        return 0;
    }
        
}




const sortNumeric = (a,b, type) => {
    console.log('numer');
    
    if (type==='asc')
        return a-b
    else 
        return b-a
}


const SortPhone = (a,b, type) => {
    if (type==='asc')
        return a.toString().localeCompare(b.toString(), 'numeric')
    else 
        return b.toString().localeCompare(a.toString(), 'numeric')
}

export default sort