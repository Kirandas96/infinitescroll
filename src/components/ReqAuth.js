import { useSelector } from "react-redux"; 
 import { Navigate ,useLocation} from "react-router-dom"; 

  
  
 export const ReqAuth = ({children}) => { 
    // let data=true
 const data=useSelector(state=>state.loginSucc) 
 const location=useLocation() 
  
 if(!data){ 
  return<Navigate state={{location}} to={"/login"} replace/> 
 } 
 else{ 
  return children 
 } 
  
 
 }; 
  
