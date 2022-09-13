import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Color } from "../Color/Color";

function Header() {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundImage:
          "linear-gradient(to right, #ecfaff, #edf8ff, #f1f6ff, #f7f4ff, #fef1ff)",
      }}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ fontWeight: "600" }}
          className="fs-2"
        >
          <span style={{ color: Color.primary }}>Doc</span>
          <span style={{ color: Color.secondary }}>Mic</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="fs-5 ">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link href="#deets">Departments</Nav.Link>
            <Nav.Link href="#deets">Pages</Nav.Link>
            <Nav.Link href="#deets">Blog</Nav.Link>
            <Nav.Link href="#deets">Contacts</Nav.Link>
            <Button variant="primary">Free Contact</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
