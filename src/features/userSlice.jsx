import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser=createAsyncThunk("createUser",async(data)=>{
  try{
    const response=await axios.post("https://64dc6c26e64a8525a0f677a0.mockapi.io/crud",data);
    console.log(response.data)
    return response.data

  }catch(error){
    console.log(error)
  }
})
export const showUser=createAsyncThunk("showUser",async()=>{
    try{
      const response=await axios.get("https://64dc6c26e64a8525a0f677a0.mockapi.io/crud");
      console.log(response.data,"resdata")
      return response.data
  
    }catch(error){
      console.log(error)
    }
  })
  export const updateUser=createAsyncThunk("updateUser",async(id)=>{
    try{
      const response=await axios.put(`https://64dc6c26e64a8525a0f677a0.mockapi.io/crud$/${id}`);  
      console.log(response.data,"resdata")
      return response.data
  
    }catch(error){
      console.log(error)
    }
  })
  export const deleteUser=createAsyncThunk("deleteUser",async(id)=>{
    try{
      const response=await axios.delete(`https://64dc6c26e64a8525a0f677a0.mockapi.io/crud/${id}`);  
      return response.data
  
    }catch(error){
      console.log(error)
    }
  })
 export const  usersSlice=createSlice({
    name:"users",
    initialState:{
        users:[],
        loading:false,
        error:null,
    },
    reducers:{ 
      editPost: (state, action) => {
        const { id, data } = action.payload;
        console.log(id)
        const postToEdit = state.users.find((post) => post.id === id);
        if (postToEdit) {
          // Edit the post with updated data
          postToEdit.name = data.name;
          postToEdit.password = data.pxassword;
          postToEdit.age = data.age;

        }
      },
    },

    extraReducers:{     
      [showUser.pending]:(state)=>{
        state.loading=true
      },
      [showUser.fulfilled]:(state,action)=>{
        state.loading=false
        state.users=action.payload
      },[showUser.rejected]:(state)=>{
        state.loading=false
      },
      [createUser.pending]:(state)=>{
        state.loading=true
      },
      [createUser.fulfilled]:(state,action)=>{
        state.loading=false
        state.users.push(action.payload)
      },[createUser.rejected]:(state,action)=>{
        state.loading=false
        state.error=action.payload.message
      },
      [deleteUser.pending]:(state)=>{
        state.loading=true
      },
      [deleteUser.fulfilled]:(state,action)=>{
        state.loading=false
        console.log(action.payload)
        state.users=state.users.filter((user)=>user.id!==action.payload)

      },[deleteUser.rejected]:(state,action)=>{
        state.loading=false
        state.error=action.payload.message;
      },
   
    }
  
    
})
export const { editPost } = usersSlice.actions;

export default usersSlice.reducer