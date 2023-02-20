import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const AddNewData=createAsyncThunk(
    'AddNewData',
    async(Newdata)=>{
        const ConfigData={
            method:'POST',
            url:`http://localhost:3500/Users`,
            headers: {
                'Content-Type': 'application/json',
            },
            data:Newdata
        };
        const Newresponse= await axios(ConfigData)
        .then(function (Newresponse){
            
        })
            .catch(function(err){
                console.log("errrror" ,err)
           
        });
        return Newresponse.data
    }
)
export const SignupSlice=createSlice({
    name:'Data',
    initialState:{
        data:[],
        status:null,
        
    },
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(AddNewData.fulfilled,(state, payload)=>{
            console.log('success')

        })
        builder.addCase(AddNewData.pending,(state)=>{
            // console.log('loading')

        })
        builder.addCase(AddNewData.rejected,(state)=>{
            // console.log('failed')

        })
    },
})


export default SignupSlice.reducer