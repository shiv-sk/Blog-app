
import { Button, Card, Stack } from "react-bootstrap";
import { baseurl } from "../utils/Service";
import { useEffect, useState } from "react";
import axios from "axios";
function Myblog (){
    const [myBlog , setMyBlog] = useState([]);
    
    const storedUser = JSON.parse(localStorage.getItem("User"))
    const Id = storedUser._id
    useEffect(()=>{
        
        const myBlog = async ()=>{
           try {
             const response = await axios.get(`${baseurl}/blog/${Id}`)
             setMyBlog(response.data.myblogs);
           } catch (error) {
              alert("Error while deleting the blog " , error);
           }
        };
        myBlog();
    } , [Id])
    const deleteBlog = async (Id)=>{
        try {
            await axios.delete(`${baseurl}/blog/${Id}`)
            alert("blog is delted")
            setMyBlog((prevBlogs) => prevBlogs.filter((blog) => blog._id !== Id));
        } catch (error) {
            alert("error while deleting the blog")
        }
    }
    return(
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', paddingTop:"7%" , paddingLeft:"15%"}}>
            {
                myBlog.map((blog)=>(
                    <Card style={{ width: '18rem' }} bg="dark" key={blog._id}>
                    <Card.Body style={{color:"whitesmoke"}}>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Subtitle className="mb-2">{blog._id}</Card.Subtitle>
                    <Card.Text>
                        {blog.body}
                    </Card.Text>
                    <Stack direction="horizontal" gap={3}>
                    <Button variant="primary">Edit</Button>
                    <Button variant="primary" onClick={()=>deleteBlog(blog._id)}>Delete</Button>
                    </Stack>
                    </Card.Body>
                </Card>
                ))
            }
           
      </div>
    )
}

export default Myblog