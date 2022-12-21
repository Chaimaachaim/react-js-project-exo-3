import {createSlice}from "@reduxjs/toolkit"

const initialState={
    name:"mstff",
     age:"14",
};
const userSlice= createSlice( {
    name :"user",
     initialState,
 });

export default userSlice.reducer;

