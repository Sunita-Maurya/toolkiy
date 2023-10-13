import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editPost } from '../features/userSlice';
const FormUpdate = ({id}) => {
  const navigate=useNavigate('')
const dispatch=useDispatch();
const [data,setData]=useState({
  name:'',
  password:'',
  age:''
})
const changeHander=(e)=>{
  setData(
   { ...data,[e.target.name]:e.target.value}
  )
}
const submitHandler=(id)=>{
  console.log(id)
  dispatch(editPost(data,))
  navigate('/read')
}
const handleEditPost = (id) => {
  dispatch(editPost(data,id))
    .then((response) => {
      // Handle success (optional)
      console.log('Post edited successfully:', response);
    })
    .catch((error) => {
      // Handle error (optional)
      console.error('Error editing post:', error);
    });
};

  return (
    <div>
      <h1>Update Form</h1>
   <form onSubmit={handleEditPost} className='flex flex-col justify-center gap-8 w-1/2 mx-auto '>
        <input type="text" name="name" value={data.name} onChange={(e)=>changeHander(e)} placeholder='enter name' className='border '/>
        <input type="text" name="password"  value={data.password}   onChange={(e)=>changeHander(e)} placeholder='enter password'/>
        <input type="number" name="age"  value={data.age}  onChange={(e)=>changeHander(e)} placeholder='age '/>
        <button type='submit' className='btn-sub border bg-gray-400'>Edit</button>
      </form>    </div>
  )
}

export default FormUpdate
