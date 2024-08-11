/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext , useContext , useState , useEffect} from "react";
import { baseurl, postReq } from "../utils/Service";
const AuthContext = createContext({
    user:null,
    token:null,
    register:async()=>{},
    login:async()=>{},
    logout:async()=>{}
})
const useAuth = ()=>useContext(AuthContext);

const Authprovider = ({children})=>{
    const[isLoading , setIsLoading] = useState(false);
    const[isError , setIsError] = useState(null);
    const[user , setUser] = useState(null);
    const[token , setToken] = useState(null);
    
    const register = async (registerData)=>{
       try {
         setIsLoading(true)
         const response = await postReq(`${baseurl}/user/register` , registerData)
         const {user , token} = response;
         localStorage.setItem("User" , JSON.stringify(user));
         localStorage.setItem("Token" , token);
         setUser(user);
         setToken(token);
       } catch (error) {
         setIsError(error)
       } finally{
         setIsLoading(false);
       }
    }
    const login = async (loginData)=>{
       try {
         setIsLoading(true)
         const response = await postReq(`${baseurl}/user/login` , loginData);
         const {user , token} = response
         localStorage.setItem("User" , JSON.stringify(user));
         localStorage.setItem("Token" , token);
         setUser(user);
         setToken(token); 
       } catch (error) {
         setIsError(error)
       } finally{
         setIsLoading(false);
       }
    }
    const logout = ()=>{
        try {
            setIsLoading(true);
            localStorage.removeItem("User")
            localStorage.removeItem("Token")
            setUser(null)
            setToken(null)
        } catch (error) {
            setIsError(error)

        } finally{
            setIsLoading(false)
        }
    }
    useEffect(()=>{
      const storedUser = JSON.parse(localStorage.getItem("User"));
      const storedToken = localStorage.getItem("Token");
      if(storedUser && storedToken){
        setUser(storedUser);
        setToken(storedToken);
      }
    } , [])
    

    return (
        <AuthContext.Provider value={{user , token , register , login , logout}}>
            {isLoading ? "Loading please wait" : children}
        </AuthContext.Provider>
    )
}

export {Authprovider , AuthContext , useAuth}