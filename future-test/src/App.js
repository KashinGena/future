import React from 'react'
import './App.css';
import {useSelector} from 'react-redux'
import TableContainer from './pages/TableContainer/TableContainer';
import Loader from './components/Loader/Loader';

function App() {
  const isLoading = useSelector(state => state.isLoading)
  


  return (
    <div className="App">
        <TableContainer/>
    </div>
  );
}

export default App;
