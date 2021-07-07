import React from 'react'
import Table from '../../components/Table/Table'
import Pagination from '../../components/Pagination/Pagination'
import {fetchTable} from '../../redux/actions/table'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../components/Loader/Loader'

const TableContainer = () => {
    const dispatch = useDispatch()
    const rows = useSelector(state => state.rows)
    const isLoading = useSelector(state => state.isLoading)
    
    

    React.useEffect(() => {
        dispatch(fetchTable())
    
        
    },[])

    return (
        
        <div>
            {isLoading?<Loader/>: <><Table rows={rows} /> 
             <Pagination/></>}
           
        </div>
        
    )
}

export default TableContainer