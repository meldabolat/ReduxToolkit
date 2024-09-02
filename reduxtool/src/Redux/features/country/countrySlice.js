import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    country :[]
}

export const countrySlice =createSlice ({
    name: "country",
    initialState,
    reducers :{
        getCountry : async(state) =>{
            const {data}= await axios.get('https://restcountries.com/v3.1/all')
            console.log("data",data)
            state.country = data
        }
    }
})
export const {getCountry}= countrySlice.actions
export default countrySlice.reducers