
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import sitelogo from "../Assets/sitelogo.svg";
import { Link } from "react-router-dom";
import "./SiteNav.css";

const SiteNav = () => {

  return (
    <nav className="py-4 bg-dark-subtle">
      <Navbar expand="lg">
        <Container>
          <Link to={"/home"}>
            <img className="w-50" src={sitelogo} alt="sitelogo"/>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="ms-4 text-primary nav" to={"/home"}>
                Home
              </Link>
              <Link className="ms-4 text-primary nav" to={"/movies"}>
                Movies
              </Link>
              <Link className="ms-4 text-primary nav" to={"/tv-shows"}>
                Tv Shows
              </Link>
              <Link className="ms-4 text-primary nav" to={"/blogs"}>
                Blogs
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default SiteNav;
