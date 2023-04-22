import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import "../stylesheets/MyNavbar.css"
import { Link } from 'react-router-dom';
function MyNavbar() {
    return (
        <Navbar bg="none" fixed = "top">
            <Container>
                <Nav className='ms-auto'>
                    <Link className = 'navItem' to='/' style={{ textDecoration: 'none' }}>Home</Link>
                    <Link className = 'navItem' to='blog' style={{ textDecoration: 'none' }}>Blog</Link>
                    <Nav.Link className='navItem' href="#home">Contact Me</Nav.Link>
                    <Nav.Link className='navItem' href="#home">Console</Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
}
export default MyNavbar;