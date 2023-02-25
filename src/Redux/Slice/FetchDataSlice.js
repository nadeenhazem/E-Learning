import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchData=createAsyncThunk(
    'FetchData',
    async(LinkData)=>{
        const response= await axios.get(`https://e-learning-7wsy.onrender.com/${LinkData}`);
        return response.data
        
    }
)
export const FetchDataSlice=createSlice({
    name:'FetchData',
    initialState:{
        data:[],
        status:null,
        
    },
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchData.fulfilled,(state,{payload})=>{
            state.data=payload;
            state.status='success'

        })
        builder.addCase(fetchData.pending,(state)=>{
            state.status='loading'

        })
        builder.addCase(fetchData.rejected,(state)=>{
            state.status='failed'

        })
    },
})


export default FetchDataSlice.reducer
