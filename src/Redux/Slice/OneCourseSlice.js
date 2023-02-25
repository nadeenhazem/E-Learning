import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchOneCourse=createAsyncThunk(
    'fetchOneCourse',
    async(LinkData)=>{
        const response= await axios.get(`https://e-learning-7wsy.onrender.com/Courses/${LinkData}`);
        return response.data
        
    }
)
export const OneCourseSlice=createSlice({
    name:'OneCourse',
    initialState:{
        data:[],
        status:null,
        
    },
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchOneCourse.fulfilled,(state,{payload})=>{
            state.data=payload;
            state.status='success'

        })
        builder.addCase(fetchOneCourse.pending,(state)=>{
            state.status='loading'

        })
        builder.addCase(fetchOneCourse.rejected,(state)=>{
            state.status='failed'

        })
    },
})


export default OneCourseSlice.reducer