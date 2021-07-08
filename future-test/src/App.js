import React from 'react'
import './App.css';
import TableContainer from './pages/TableContainer/TableContainer';
import {fetchTable} from './redux/actions/table'
import {useDispatch, useSelector} from 'react-redux'
import Loader from './components/Loader/Loader';

function App() {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.tableReducer.isLoading)

  React.useEffect(() => {
    dispatch(fetchTable())
},[])



  return (
    <div className="App">
        {isLoading? <Loader/>:<TableContainer/>}
    </div>
  );
}

export default App;
