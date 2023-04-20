import { Phone } from "@mui/icons-material";
import {signInWithEmailAndPassword } from "firebase/auth";
import {createSlice,PayloadAction}  from "@reduxjs/toolkit"
import { auth } from "../../firebase";
type User = {
        email:string,
        uid:string,
        photoURL:string,
}
type Auth = {
    email:string,
    password:string
}
const initialState : User= {
      email:"",
      uid:"",
      photoURL:""
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        SetUser: (state,action:PayloadAction<User>) => {
            state.email = action.payload.email;
            state.uid = action.payload.uid;
            state.photoURL = action.payload.photoURL;

        },
        Login: (state,action:PayloadAction<Auth>) => {
           return state;

         }
    }
})


export const {SetUser,Login} = authSlice.actions;

export default authSlice.reducer;