import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { showUser } from '../features/userSlice';
import { deleteUser } from '../features/userSlice';
import { Link } from 'react-router-dom';
const Read = () => {

    const dispatch=useDispatch()
    const user=useSelector((state)=>state.user.users)
    useEffect(()=>{

dispatch(showUser())
    },[dispatch,deleteUser])

   
const deleteData=(id)=>{
console.log(id)
dispatch(deleteUser(id))

    }
    const editData=()=>{
    console.log("ghjkl")
    }


  return (
    <div>
      <h1 className='text-red-500 text-3xl'>read</h1>
      <div className='grid grid-cols-6 gap-5 '>
      {user? user.map((data)=> <div className='w-[200px] p-3 border'>
         <p className=''>name: {data.name}</p> 
      <p>password: {data.password}</p> 
      <p>gge: {data.age}</p>
      <div>
        <button onClick={()=>deleteData(data.id)} className='bg-red-300 rounded-md p-2'>Delete</button>
        <Link to="/formUpdate">
        <button className='bg-red-300 rounded-md p-2'>Edit</button>
        </Link>

      </div>
      </div>):"loading..."}
    </div>
    </div>
  )
}

export default Read
