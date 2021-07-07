export const fetchTable = () => {
    return (dispatch) => {
       dispatch(fetchTableStart())
        fetch(' http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
            .then(data =>  data.json())
            .then(data => dispatch(fetchTableSuccess(data)))
    }
}

const fetchTableStart = () => {
    return {
        type:'FETCH_TABLE'
    }
}

const fetchTableSuccess = (rows) => {
    return {
        type:'FETCH_TABLE_SUCCESS',
        payload:rows
    }
}