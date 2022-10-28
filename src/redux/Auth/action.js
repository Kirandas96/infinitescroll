import axios from "axios"
import * as types from "./actionTypes"

export const getLogin=({username,password})=>(dispatch)=>{
    dispatch({type:types.GET_LOGIN_REQUEST})

    return axios.get(`https://fakeservermasai.herokuapp.com/api/users?username=${username}&password=${password}`)
    .then((res)=>{
        if(res.data.length==1){
            dispatch(
                {type:types.GET_LOGIN_SUCCESS,
                msg:"LOGIN SUCCESSFULL"})
                return true
        }else{
            dispatch(
                {type:types.GET_LOGIN_FAILURE,
                msg:"LOGIN FAILED"})
        }
        
    })    
}

export const getLogout=()=>(dispatch)=>{
    dispatch({type:types.GET_LOGIN_REQUEST})
}