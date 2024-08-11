import { useState } from "react";
import {Button , Row , Col , Form , Stack} from "react-bootstrap";
import { useAuth } from "../context/Authcontext";
import {useNavigate} from "react-router-dom";
function Register(){
    const {register , user} =  useAuth()
    const [registerData , setRegisterData] = useState({
        username:"",
        email:"",
        password:""
    })
    
    const navigate = useNavigate();
    const registerhandler = async(e)=>{
        e.preventDefault();
        try {
            await register(registerData);
            if(user){
                navigate("/");
            }
            
        } catch (error) {
            console.log("error is occured whle register Api call: ",error);
        }
    }
    return(
        <Form style={{height:"100vh" , paddingLeft:"35%" , paddingTop:"8"}} onSubmit={registerhandler}>
            <Row>
                <Col xs={5}>
                    <h4 className="text-center">Register</h4>
                    <Stack gap={4}>
                        <Form.Control type="text" placeholder="username" value={registerData.username} onChange={(e)=>setRegisterData({...registerData , username:e.target.value})}/>
                        <Form.Control type="email" placeholder="email@mail.com" value={registerData.email} onChange={(e)=>setRegisterData({...registerData , email:e.target.value})}/>
                        <Form.Control type="password" placeholder="password" value={registerData.password} onChange={(e)=>setRegisterData({...registerData , password:e.target.value})}/>
                        <Button variant="primary" type="submit">register</Button>
                    </Stack>
                </Col>
            </Row>
        </Form>
    )
}

export default Register