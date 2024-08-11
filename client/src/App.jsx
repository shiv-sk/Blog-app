import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Navbr from './component/Navbr';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function App() {
  

  return (
    <>
    <Navbr />
    <Container>
      <Outlet />
    </Container>
    </>
  )
}

export default App
