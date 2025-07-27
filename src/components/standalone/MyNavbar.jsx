import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "../../stylesheets/standalone/MyNavbar.css";
import { AiOutlineMenu } from "react-icons/ai";
function MyNavbar() {
	return (
		<Navbar bg="none" fixed="top" expand="lg">
			<Container>
				<Navbar.Toggle data-bs-target="#basic-navbar-nav">
					<div className="menu-icon">
						<AiOutlineMenu />
					</div>
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <a className="navItem" href="#root">Home</a>
            <a className="navItem" href="https://blog.kernelrider.in/">Blog</a>
            <a className="navItem" href="#contact">Contact</a>
          </Nav>
        </Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
export default MyNavbar;
