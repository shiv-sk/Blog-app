import { useState } from "react";
import {Button , Row , Col , Form , Stack} from "react-bootstrap";
import { useAuth } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";
function Login(){
    const {login} = useAuth();
    const navigate = useNavigate();
    const[loginData , setLoginData] = useState({
        email:"",
        password:""
    })
    
    const loginHnadler = async (e)=>{
        e.preventDefault()
        navigate("/");
        try {
             await login(loginData)
             
        } catch (error) {
            console.error("error is occured while Login api call" , error)
        }
    }
    return (
        <Form style={{height:"100vh" , paddingLeft:"35%" , paddingTop:"8"}} onSubmit={loginHnadler}>
            <Row>
                <Col xs={5}>
                    <h4 className="text-center">Login</h4>
                    <Stack gap={4}>
                        <Form.Control type="email" placeholder="email@mail.com" value={loginData.email} onChange={(e)=>setLoginData({...loginData , email:e.target.value})}/>
                        <Form.Control type="password" placeholder="password" value={loginData.password} onChange={(e)=>setLoginData({...loginData , password:e.target.value})}/>
                        <Button variant="primary" type="submit">login</Button>
                    </Stack>
                </Col>
            </Row>
        </Form>
    )
}
export default Login