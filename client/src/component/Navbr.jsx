import {Navbar , Nav , Stack, Container , Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import { useAuth } from "../context/Authcontext";
function Navbr(){
    const {user , logout} = useAuth();
    
    return (
        <Navbar bg="dark" className="mb-3">
            <Container>
             <Link to={"/"} className="text-decoration-none link-light ">Blog_app</Link>
                <div className="d-flex gap-4">
                    {user ? ( <>
                        <Link to={"/myblog"} className="text-decoration-none link-light ">MyBlogs</Link>
                        <Link to={"/addblog"} className="text-decoration-none link-light ">AddBlog</Link>
                        </> ) : " "}
                   
                </div>
                <div className="d-flex gap-4">
                    {
                        user ? (<Button onClick={logout} variant="primary">logut</Button>) : (
                            <Stack direction="horizontal" gap={4}>
                                <Nav>
                                    <Link to={"/login"} className="text-decoration-none link-light">login</Link>
                                    <Link to={"/register"} className="text-decoration-none link-light">register</Link>
                                    
                                </Nav>
                        </Stack>
                        )
                    }
                   
                </div>
            </Container>
        </Navbar>
    )
}
export default Navbr