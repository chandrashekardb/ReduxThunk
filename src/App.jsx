import React,{useState, useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import User from './components/User';
import { userAction } from './redux/actions/userAction';

const App = () => {
  const dispatch=useDispatch();
  const userList=useSelector(state=>state.userList)
  const {loading, users, error}=userList;

  useEffect(()=>{
    dispatch(userAction())
  },[dispatch])
  return (
    <div>
      <h1>Redux-Thunk </h1>
      {loading ? <h2>Loading...</h2>: error ? <h2>{error}</h2>:<User users={users}/>}
    </div>
  )
}

export default App