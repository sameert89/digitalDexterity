import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import "./stylesheets/MyNavbar.css"
function MyNavbar() {
    return (
        <Navbar bg="none" fixed = "top">
            <Container>
                <Nav className='ms-auto'>
                    <Nav.Link className='navItem' href="#home">Home</Nav.Link>
                    <Nav.Link className='navItem' href="#home">Blog</Nav.Link>
                    <Nav.Link className='navItem' href="#home">Contact Me</Nav.Link>
                    <Nav.Link className='navItem' href="#home">Console</Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
}
export default MyNavbar;