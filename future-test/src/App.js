import React from 'react'
import './App.css';
import Table from './components/Table/Table';
import {fetchTable} from './redux/actions/table'
import {useDispatch, useSelector} from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const rows = useSelector(state => state.filteredRows)
  React.useEffect(() => {
    dispatch(fetchTable())

    
  },[])

  return (
    <div className="App">
       {rows && <Table rows={rows}/>} 
    </div>
  );
}

export default App;
