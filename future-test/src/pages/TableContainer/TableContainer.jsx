import React from 'react'
import Table from '../../components/Table/Table'
import Pagination from '../../components/Pagination/Pagination'
import {useDispatch, useSelector} from 'react-redux'
import DetailInfo from '../../components/DetailInfo/DetailInfo'
import Search from '../../components/SearchInput/Search'
import {searchTableData, sortTable} from '../../redux/actions/table'
import {setSort} from '../../redux/actions/sort'

const TableContainer = () => {
    const dispatch = useDispatch()
    const rows = useSelector(state => state.tableReducer.filteredRows)
    const [detail,setDetail] =React.useState(null)
    const [search, setSearch] = React.useState('')
    const {sortType,sortField} = useSelector(state => state.sortReducer)
   
    const onDetailClick = React.useCallback(function() { 
        setDetail(this)
    },[])

    const onSortClick= function(sortField) { 
         const sort = (sortType==='asc')?'desc':'asc'  
         dispatch(setSort({
            sortType:sort,
             sortField 
            }))
        dispatch(sortTable({sortType,sortField}))
    }

    const onSearch = React.useCallback(function(event) { 
        setSearch(event.target.value)
        dispatch(searchTableData(event.target.value))
    },[])



    return (
        <div className='container'>
            <Search value={search} onChange={onSearch}/>
            <Table rows={rows}
                    onClickDetail={onDetailClick}
                    onSort={onSortClick} 
                    sortType={sortType}
                    sortField={sortField}/> 
             <Pagination/>
            {detail && <DetailInfo user={detail}/>}
        </div>
        
    )
}

export default TableContainer