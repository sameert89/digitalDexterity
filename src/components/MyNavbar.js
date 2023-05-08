import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "../stylesheets/MyNavbar.css";
import { Link } from "react-router-dom";
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
            <Link className="navItem" to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
            <Link
              className="navItem"
              to="blog"
              style={{ textDecoration: "none" }}
            >
              Blog
            </Link>
            <Link
              className="navItem"
              to="contact"
              style={{ textDecoration: "none" }}
            >
              Contact
            </Link>
            <Link
              className="navItem"
              to="publish"
              style={{ textDecoration: "none" }}
            >
              Publish
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MyNavbar;
