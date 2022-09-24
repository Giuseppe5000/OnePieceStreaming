import Container from 'react-bootstrap/Container';
import NavbarJsx from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
    return (

        <NavbarJsx bg="dark" variant="dark">
            <Container>
                <NavbarJsx.Brand href="#home">OnePiece Streaming</NavbarJsx.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </NavbarJsx>

    )
}

export default Navbar;