import React from 'react'
import Table from '../../components/Table/Table'
import Pagination from '../../components/Pagination/Pagination'
import {useDispatch, useSelector} from 'react-redux'
import DetailInfo from '../../components/DetailInfo/DetailInfo'
import Search from '../../components/SearchInput/Search'
import {searchTableData} from '../../redux/actions/table'

const TableContainer = () => {
    const dispatch = useDispatch()
    const rows = useSelector(state => state.tableReducer.filteredRows)
    const [detail,setDetail] =React.useState(null)
    const [search, setSearch] = React.useState('')
   
    
    const onDetailClick = React.useCallback(function() { 
        setDetail(this)
    },[])

    const onSearch = React.useCallback(function(event) { 
        setSearch(event.target.value)
        dispatch(searchTableData(event.target.value))
    },[])

 

    return (
        <div className='container'>
            <Search value={search} onChange={onSearch}/>
            <Table rows={rows} onClickDetail={onDetailClick} /> 
             <Pagination/>
            {detail && <DetailInfo user={detail}/>}
        </div>
        
    )
}

export default TableContainer