import { Container, Button, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar(){
    return <NavbarBs sticky="top" className="bg-white shadow-lg mb-3">
        <Container>
            <Nav className="me-auto">
                <Nav.Link to={"/"} as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to={"/store"} as={NavLink}>
                    Store
                </Nav.Link>
                <Nav.Link to={"/about"} as={NavLink}>
                    About
                </Nav.Link>
            </Nav>
            <Button style={{ width: "3rem", height: "3rem", position: "relative", }} variant="outline-primary" className="rounded-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="26" fill="currentColor" className="bi bi-bag-fill" viewBox="0 0 16 16"><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/></svg>
                <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{ color: "white", width: "1.25rem", height: "1.25rem", position: "absolute", bottom: "0", right: "0", transform: "translate(25%, 25%), "}}>3</div>
            </Button>
        </Container>
    </NavbarBs>
}