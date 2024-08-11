import {useState } from "react"
import { Button, Col, Form, Row, Stack } from "react-bootstrap"
import { baseurl, postReq } from "../utils/Service"
function Addblog (){
    const storedUser = JSON.parse(localStorage.getItem("User"))
    const [blogData , setBlogData] = useState({
        title:"",
        body:"",
        user:storedUser._id
    })
    const handleBlog = async (e)=>{
        e.preventDefault()
        try {
            const response = await postReq(`${baseurl}/blog` , blogData)
            if(response){
                alert("response is saved successfully")
            }
        } catch (error) {
            console.error("the error occured at addblog: " , error)
        }
    }
    
    return(
    <Form style={{height:"100vh" , paddingTop:"3%" , paddingLeft:"30%"}} onSubmit={handleBlog}>
      <Row>
        <Col xs={6}>
            <h4 className="text-center">Add New Blog</h4>
            <Stack gap={3}>
                <Form.Control type="text" placeholder="title" value={blogData.title} onChange={(e)=>setBlogData({...blogData , title:e.target.value})}/>
                
                <Form.Control as="textarea" rows={6} placeholder="Body for the Blog" value={blogData.body} onChange={(e)=>setBlogData({...blogData , body:e.target.value})}/>
                <Button type="submit">New Blog</Button>
            </Stack>
        </Col>
      </Row>
    </Form>
    )
}

export default Addblog