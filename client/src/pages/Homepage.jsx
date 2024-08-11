import { useEffect, useState } from 'react';
import {Button} from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import { baseurl} from '../utils/Service';
import axios from "axios";

function Homepage() {
  const [isLoading , setIsLoading] = useState(false);
  const [blogs , setBlogs] = useState([]);
  useEffect(()=>{
   try {
    setIsLoading(true);
       const allBlogs = async ()=>{
         const response = await axios.get(`${baseurl}/blog`)
         setBlogs(response.data.blogs)
        }
        allBlogs();
        setIsLoading(false);
   } catch (error) {
      console.error("axios.get error" , error)
   }finally{
    setIsLoading(false);
   }
  } , [])
  
  return (
    <>
    {
      isLoading ? <p>the page is loading</p> : (
      <>
      <h2 className="text-center">All Blogs</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', paddingTop:"2%" , paddingLeft:"15%"}}>
        
          {
              blogs.map((blog)=>(
                  <Card style={{ width: '18rem' }} key={blog._id} bg="dark">
                      <Card.Body style={{color:"whitesmoke"}}>
                          <Card.Title>{blog.title}</Card.Title>
                      
                          <Card.Text>
                          {blog.body}
                          </Card.Text>
                      <Button variant="primary">Read more</Button>
                      </Card.Body>
                  </Card>
              ))
          }
      </div>
    </>
      )
    }
    
    </>
  )
}

export default Homepage;