import axios from "axios";
export const baseurl = "https://blog-app-one-ruddy.vercel.app/api/v1"
export const postReq =async (url , body)=>{
    try {
        const response = await axios({
            method:"post",
            url,
            headers:{
                "Content-Type":"application/json"
            },
            data:body
        })
        console.log(body);
        return response.data;
    } catch (error) {
        console.error("axios post request error" , error);
        return {error:true , message:error.message};
    }
}

export const getReq = async (url)=>{
    try {
        const response = await axios({
            method:"get",
            url,
            headers:{
                "Content-Type":"application/json"
            }
        })
        return response.data;
    } catch (error) {
        console.error("axios get request error" , error);
        return {error:true , message:error.message}
    }
}
