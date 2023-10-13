import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../features/userSlice'
import { useNavigate } from 'react-router-dom'
const Create = () => {
  const navigate = useNavigate();

  const dispatch=useDispatch()
  const [data,setData]=useState({
    name:"",
    password:"",
    age:'',
    id:Math.random()
  })
  const changeHander=(e)=>{
   setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler=(e)=>{
e.preventDefault();
console.log(data)
dispatch(createUser(data))
setData({
  name:"",
  password:"",
  age:""
})
navigate('/read');
}
  return (
    <div>
      <h1 className='text-3xl text-center my-5'>create</h1>
      <form onSubmit={submitHandler} className='flex flex-col justify-center gap-8 w-1/2 mx-auto '>
        <input type="text" name="name" value={data.name} onChange={(e)=>changeHander(e)} placeholder='enter name' className='border '/>
        <input type="text" name="password"  value={data.password}   onChange={(e)=>changeHander(e)} placeholder='enter password'/>
        <input type="number" name="age"  value={data.age}  onChange={(e)=>changeHander(e)} placeholder='age '/>
        <button type='submit' className='btn-sub border bg-gray-400'>submit</button>
      </form>
    </div>
  )
}

export default Create
