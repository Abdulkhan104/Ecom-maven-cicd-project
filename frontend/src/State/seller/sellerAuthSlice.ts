import { createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../../config/Api";

export const sellerLogin=createAsyncThunk<any,any>("/sellerAuth/sellerLogin",    
    async(loginRequest ,{rejectWithValue})=>{
        try {
            const response=await api.post("/sellers/login",loginRequest)
            console.log("lOGIN OTP ", response.data)
            const jwt=response.data.jwt;
            localStorage.setItem("jwt",jwt);
            
        } catch (error) {
            console.log("Error -- -- --",error)
        }
    }
)